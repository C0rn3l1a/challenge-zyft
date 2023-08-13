import { createContext, useState } from 'react'
import './App.css'
import { Nav } from './components/organisms/Nav'
import { InstructionImage } from './components/organisms/InstructionImage';
import { SuggestionCards } from './components/organisms/SuggestionCards';
import { InstructionsStepper } from './components/organisms/InstructionsStepper';

export interface ProductSuggestion {
    img: string;
    name: string;
    price: number;
    originalPrice?: number;
    store: string;
}

export const AppContext = createContext({})
export interface IAppContext {
    step: number;
    suggestions: ProductSuggestion[];
}
export interface IUseAppContext {
    state: IAppContext;
    setState: (newState: IAppContext) => void;
}

function App() {
    const [state, setState] = useState<IAppContext>({ step: 1, suggestions: [] });

    return (<>
        <AppContext.Provider value={{state, setState}}>
            <Nav></Nav>
            <main className="flex flex-col h-full max-w-5xl self-center lg:grid lg:grid-cols-[45%_55%] lg:grid-rows-[200px_auto] gap-4 lg:gap-8 px-4 bg-slate-100">
                <section className="flex flex-col justify-end w-full pt-8 pb-2">
                    <h1 className="text-4xl font-medium">How does Zyft work?</h1>
                    <h2 className="text-lg mt-2 text-gray-500">Search over 1 million+ products across 35,000+ Australian retailers</h2>
                </section>
                <div className="lg:col-start-2 lg:row-start-2">
                    { state.step < 3 ? <InstructionImage step={state.step} /> : <SuggestionCards /> }
                </div>
                <div className="h-full w-full lg:col-start-1 lg:row-start-2">
                    <InstructionsStepper />
                </div>
            </main>
        </AppContext.Provider>
    </>);
}

export default App

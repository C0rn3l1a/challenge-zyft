import { useContext } from "react";
import { AppContext, IUseAppContext } from "../../App";
import { IconCircle } from "../cells/IconCircle";
import { ActionButton } from "../cells/ActionButton";

export function InstructionsStepper() {
    const context: IUseAppContext = useContext(AppContext);
    const { state, setState } = context;

    const nextStep = () => {
        if (state.step < 3) {
            setState({ ...state, step: state.step + 1 });
        } else {
            alert('try zyft!');
        }
    }

    return <>
        <ol className="flex flex-col">
            <li className="grid grid-cols-[4px_50px_1fr] gap-x-4 gap-y-2 items-center">
                <div className="row-span-5 w-0.5 h-full bg-gray-500 relative">
                    {state.step === 1 && <div className="absolute -left-px w-1 h-24 bg-red-500"></div>}
                </div>
                <IconCircle icon="market" active={state.step === 1} />
                <h2 className="text-base">1. Explore deals from Australian retailers</h2>
                { state.step === 1 && <>
                    <p className="col-start-3 col-span-2 w-full text-sm text-gray-500 mb-4">Instant price comparisons from multiple websites, in one place</p>
                    <div className="col-start-2 col-span-2 flex items-center justify-center">
                        <ActionButton type="primary" onClick={nextStep} >Next Steps</ActionButton>
                    </div>
                </> }
            </li>
            <li className="grid grid-cols-[4px_50px_1fr] gap-x-4 gap-y-2 items-center">
                <div className="row-span-5 w-0.5 h-full py-4 bg-gray-500 relative">
                    {state.step === 2 && <div className="absolute -left-px w-1 h-24 bg-red-500"></div>}
                </div>
                <IconCircle icon="tag" active={state.step === 2} />
                <h2 className="text-base">2. Track price history and stock levels</h2>
                { state.step === 2 && <>
                    <p className="col-start-3 col-span-2 w-full text-sm text-gray-500 mb-4">Instant price comparisons from multiple websites, in one place</p>
                    <div className="col-start-2 col-span-2 flex items-center justify-center">
                        <ActionButton type="primary" onClick={nextStep} >Next Steps</ActionButton>
                    </div>
                </> }
            </li>
            <li className="grid grid-cols-[4px_50px_1fr] gap-x-4 gap-y-2 items-center relative">
                <div className="row-span-5 w-0.5 h-full py-4 bg-gray-500">
                    {state.step === 3 && <div className="absolute -left-px w-1 h-24 bg-red-500"></div>}
                </div>
                <IconCircle icon="market" active={state.step === 3} />
                <h2 className="text-base">3. Let's Go Shopping</h2>
                { state.step === 3 && <>
                    <p className="col-start-3 col-span-2 w-full text-sm text-gray-500 mb-4">Instant price comparisons from multiple websites, in one place</p>
                    <div className="col-start-2 col-span-2 flex items-center justify-center">
                        <ActionButton type="primary" onClick={nextStep} >Try Zyft Now</ActionButton>
                    </div>
                </> }
            </li>
        </ol>
    </>

}

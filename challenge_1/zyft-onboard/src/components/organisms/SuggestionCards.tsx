import { useContext, useEffect } from "react";
import { AppContext, IUseAppContext, ProductSuggestion } from "../../App";
import samsungPhoneImg from "../../assets/samsung-phone.png";
import samsungTvImg from "../../assets/samsung-tv.png";
import loadingImg from "../../assets/loading.png";
import { ProductCard } from "./ProductCard";

export function SuggestionCards() {
    const context: IUseAppContext = useContext(AppContext);
    const { state, setState } = context;
    const isMd = window.innerWidth > 640;

    useEffect(() => {
        setTimeout(() => {
            const suggestions: ProductSuggestion[] = [
                {
                    name: 'Samsung 55" QN85B Neo QLED 4K Smart TV',
                    price: 1705,
                    originalPrice: 1895,
                    store: 'Amazon AU',
                    img: samsungTvImg, 
                },
                {
                    name: 'Samsung Galaxy S23 5G 256GB',
                    price: 1449,
                    originalPrice: 1559,
                    store: 'Amazon AU',
                    img: samsungPhoneImg, 
                },
            ];
            setState({ ...state, suggestions });
        }, 1500);
    });

    return <div className={`flex flex-col sm:flex-row items-center sm:justify-evenly gap-4 lg:-mt-32`}>
        { state.suggestions?.length ? 
            !isMd ? <ProductCard product={state.suggestions[0]} /> :
            state.suggestions.map((product, index) => <div  className={index % 2 ? 'mb-16' : 'mt-16'}>
                <ProductCard product={product}/>
            </div>) :
            <div className="py-14 lg:mt-32">
                <img src={loadingImg} className="w-52 h-52 animate-ping"/>
            </div>
        }
    </div>
}


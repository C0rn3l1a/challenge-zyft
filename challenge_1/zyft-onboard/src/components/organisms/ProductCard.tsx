import { ProductSuggestion } from "../../App";
import { ActionButton } from "../cells/ActionButton";

interface ProductCardProps {
    product: ProductSuggestion;
}

export function ProductCard(props: ProductCardProps) {
    return <div className="flex flex-col gap-4 w-72 p-4 rounded-lg bg-white">
        <img className="h-40 w-auto self-center" src={props.product.img} alt={`Product Picture for ${props.product.name}`} />
        <p className="text-gray-500">
            <span>{props.product.store}</span>
        </p>
        <h3 className="text-xl font-semibold">{props.product.name}</h3>
        <p className="flex gap-4 items-baseline">
            <strong className="text-red-600 text-lg">{props.product.price.toLocaleString('en-US',{style: 'currency', currency: 'USD'})}</strong>
            <s className="text-gray-500 text-sm">{props.product.originalPrice?.toLocaleString?.('en-US',{style: 'currency', currency: 'USD'})}</s>
        </p>
        <ActionButton type="secondary" className="my-2">View Deal</ActionButton>
    </div>;
}

import { PropsWithChildren } from "react"

interface ActionButtonProps {
    onClick?: React.MouseEventHandler,
    className?: string,
    type: 'primary'|'secondary',
}

export function ActionButton(props: PropsWithChildren<ActionButtonProps>) {
    const base = 'rounded-full px-4 py-2 border border-red-600';
    const variants = {
        'primary': 'bg-red-600 text-white hover:bg-white hover:text-red-600',
        'secondary': 'text-red-600 hover:bg-red-600 hover:text-white',
    }

    return <button 
        className={`${base} ${variants[props.type]} ${props.className || ''}`}
        onClick={props.onClick}>
        {props.children}
    </button>;
}

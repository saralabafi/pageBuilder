import { IBadgeProps } from "./Badge.type";
import Link from "next/link"


const Badge = (props: IBadgeProps) => {
    const {
        badgeTitle,
        link,
        backgroundColor = 'bg-blue-100',
        txtColor = 'text-red-800',
        txtSize = 'text-xs',
        customCSS,
        sx
    } = props ;

    return (
        link ?
        <Link 
        href={link} 
        className={`${backgroundColor} 
        ${txtColor} 
        ${txtSize}
        ${customCSS ?? ''}
        hover:bg-blue-200 font-medium mr-2 px-2.5 py-0.5 rounded`}
        style={sx}
        >
            {badgeTitle}</Link> : 
        <span 
        className={`${backgroundColor} 
        ${txtColor} 
        ${txtSize}
        ${customCSS ?? ''}
        hover:bg-blue-200 
        font-medium 
        mr-2 px-2.5 py-0.5 rounded`}
        style={sx}
        >
            {badgeTitle}</span>
    )
}

export default Badge;
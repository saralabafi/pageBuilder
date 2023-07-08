import { IBadgeProps } from "./Badge.type";


const Badge = (props: IBadgeProps) => {
    const {
        badgeTitle,
        link,
        bgColor = 'blue',
        txtColor = 'blue',
        txtSize = 'xs'
    } = props ;

    const tagElm = link ? 'a' : 'span'; 

    return (
        link ?
        <a 
        href={link} 
        className={`bg-${bgColor}-100 
        text-${txtColor}-800 
        text-${txtSize} 
        hover:bg-blue-200 font-medium mr-2 px-2.5 py-0.5 rounded 
        dark:bg-${bgColor}-900 
        dark:text-${txtColor}-300`}>
            {badgeTitle}</a> : 
        <span 
        className={`bg-${bgColor}-100 
        text-${txtColor}-800 
        text-${txtSize} 
        hover:bg-blue-200 
        font-medium 
        mr-2 px-2.5 py-0.5 rounded 
        dark:bg-${bgColor}-900 
        dark:text-${txtColor}-300`}>
            {badgeTitle}</span>
    )
}

export default Badge;
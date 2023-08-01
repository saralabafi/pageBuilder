
import { CardProps } from "./Card.types"
const Card = (props: CardProps) => {
    const { children, customCSS, padding = "p-2", margin } = props
    return (
        <div className={`
        bg-white  border-2  shadow-sm  rounded w-full ${padding}
         ${margin || ""}  ${customCSS || ''}`}

        >
            {children}

        </div>
    )
}

export default Card
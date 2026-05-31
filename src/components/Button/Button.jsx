import './Button.scss'

const Button = (props) => {
    const {
        type = 'button',
        href,

    } = props

    const isLink = href !== undefined
    const Component = isLink ? 'a' : 'button'

    return(
        <Component>
            
        </Component>
    )
}
export default Button
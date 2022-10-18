export function Buttion(props) {
    return (
        <button type={props.type} onClick={props.onClick} className={props.className} >{props.text} {props.icon}</button>
    )
}
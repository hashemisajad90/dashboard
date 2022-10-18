export function Input(props) {
    return(
        <input className={props.className} type={props.type} value={props.value} placeholder={props.placeholder} defaultValue={props.defaultValue} onChange={props.onChange} />
    )
}
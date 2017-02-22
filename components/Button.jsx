const Button = (props) => (
	<button className="btn btn-default" {...props}>
		{props.icon ? <span className={"glyphicon glyphicon-" + props.icon}></span> : null}
		{' '}
		{props.label}
	</button>
)

const CartButton = ({in_cart, className = "btn btn-block", icon, label}) => {
	return (in_cart ? 
		<Button className={className + " btn-danger"} icon={icon || "remove"} label={label || "Usuń z koszyka"}/> :
		<Button className={className + " btn-success"} icon={icon || "shopping-cart"} label={label || "Dodaj do koszyka"}/>
	)
}
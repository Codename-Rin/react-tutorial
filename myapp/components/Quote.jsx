const Quote = (props) => {
	var data = props.data;

	return (
		<div className="col-xs-12 col-sm-6 col-md-4">
			<blockquote>
				<span className="label label-default">{data.title}</span>
				<img src={data.image} alt="Image"/>
				<p>{data.quote}</p>
				<footer>{data.author} in {data.article}</footer>
			</blockquote>
		</div>
	)
}
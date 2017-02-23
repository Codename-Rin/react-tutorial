const QuotesList = ({list}) => (
	<div>
		{list.map((data) => <Quote data={data} key={data._id} />)}
	</div>
)
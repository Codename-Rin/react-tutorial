var courseLabel = function(data){
	return data.is_new ? <span className="label label-default">Nowy!</span> : null;
};

var coursePromoLabel = function(data) {
	return data.is_promo ? <b>Kurs jest w PROMOCJI!</b> : null;
};

var courseMedia = function(data) {
	return <img src={data.image} alt="cover" />
};

var courseActions = function(data) {
	return (
		<div className="btn-group pull-right">
			<button className="btn btn-default">Szczegóły kursu</button>
			<button className="btn btn-default">Dodaj do ulubionych</button>
			<button className="btn btn-default">Dodaj do koszyka</button>
		</div>
	)
};

var courseDetails = function(data) {
	return (
		<table className='table course_details'>
			<tbody>
				<tr>
					<th>Autor</th>
					<td>{data.author}</td>
				</tr>
				<tr>
					<th>Czas trwania</th>
					<td>{data.duration}</td>
				</tr>
			</tbody>
		</table>
	)
};

var course = function(data) {
	return (
		<div className="media course">
			{ /* Course media column */}
			<div className="media-left">
				{courseMedia(data)}
			</div>
			{ /* Course content column */}
			<div className="media-body">
				<h3>{data.title} {courseLabel(data)}</h3>
				<p>{data.description}</p>

				{ /* Promotion */}
				{coursePromoLabel(data)}

				{ /* Course actions */}
				{courseActions(data)}
			</div>

			{ /* Course details column */}
			<div className='media-right'>
				{courseDetails(data)}
			</div>
		</div>
	)
};

var courseList = function(list) {
	return (
		<div>
			{list.map(function(data){
				return <div key={data.id}> {course(data)}</div>;
			})}
		</div>
	)
};

var list = courses_data.slice(0,5);
	
ReactDOM.render(courseList(list), document.getElementById('root'));
const CourseMedia = ({data}) => (<img src={data.image} alt="cover" />);

const CourseLabel = ({data}) =>(data.is_new ? <span className="label label-default">Nowy!</span> : null);

const CoursePromoLabel = ({data}) => (data.is_promo ? <b>Kurs jest w PROMOCJI!</b> : null);

const CourseActions = ({data}) => (
	<div className="btn-group pull-right">
		<Button label="Szczegóły kursu" />
		<Button label="Dodaj do ulubionych" icon="star"/>
	</div>
)

const CourseDetails = ({data}) => (
	<div>
		<table className='table course_details'>
			<tbody>
				<tr>
					<th>Ocena</th>
					<td>
						<Rating max={5} value={3} onChange={(rating)=>console.log(rating)}/>
					</td>
				</tr>
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
		<CartButton in_cart={false} />
	</div>
)

const Course = (props) => {
	var {data, Details} = props;

	return (
		<div className="media course">

			{ /* Course media column */}
			<div className="media-left">
				<CourseMedia {...props} />
			</div>

			{ /* Course content column */}
			<div className="media-body">
				<h3>{data.title} <CourseLabel {...props} /></h3>
				<p>{data.description}</p>

				{props.children}
			</div>

			{ /* Course details column */}
			{Details ?
				<div className='media-right'>
					<Details {...props} />
				</div> : null
			}
		</div>
	)
};

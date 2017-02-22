const FavouritesCoursesList = ({list}) => (
	<div>
		<h1>Ulubione Kursy</h1>
		<hr/>
		<div>
			{list.map((data) => <Course data={data} key={data.id} Details={CourseDetails}>
				{ /* Promotion */}
				<CoursePromoLabel data={data} /> 

				{ /* Course actions */}
				<div className="btn-group pull-right">
					<Button label="Szczegóły kursu" />
					<FavButton active={AppState.state.favouritesMap[data.id]} 
						onActivate={()=>actions.addFavourite(data.id)} 
						onDeactivate={()=>actions.removeFavourite(data.id)}/>
				</div>
			</Course>)}
		</div>
	</div>
)
const List = (props) => {
	const {id , work} = props.list;
	const {onEditItem , onDeleteItem} = props;
	return (
			<div className='col-12 '>
				<div className='form-group'>
					<div className='row border'>
						<div className='col-10 mt-2'>
							<h4 className='text-primary'>{work}</h4>
						</div>
						<div className='col-1 mt-3'>
							<i onClick = {() => onDeleteItem(id)} className='ti-trash text-danger f-18'></i>
						</div>
						<div className='col-1 mt-3'>
							<i onClick = {() => onEditItem(id)}  className='ti-pencil-alt text-success f-18'></i>
						</div>
					</div>
				</div>
			</div>
		)
}
export default List
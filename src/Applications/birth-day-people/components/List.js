
const List = (props) => {
	return (
			<div>
				<div className='wrapper mt-1 mb-1'>
					<img src = {props.people.img} alt={props.people.name} className='img-fluid circle'/>
					<div className='content'>
						<p className='text-dark'>{props.people.name}</p>
						<p className='text-light'>{props.people.birth}</p>
					</div>
				</div>
			</div>
			)
}
export default List;
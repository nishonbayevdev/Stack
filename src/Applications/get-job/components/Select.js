const Select = ({id , company , onSelect}) => {
	return (
			<div>
				<button className='btn btn-outline mt-1 mb-1' onClick = {() => onSelect(id)}>{company}</button>
			</div>
		)
}
export default Select;
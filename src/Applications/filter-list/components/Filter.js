const Filter = ({onChangeFoods , catagory}) => {
	return (
			<button className='btn btn-outline text-success d-inline' onClick = {() => onChangeFoods(catagory)}>{catagory}</button>
		)
}
export default Filter;
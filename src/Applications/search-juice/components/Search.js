import {useRef} from 'react';
import {useGolobalContext} from './context';
const Search = () => {
	const {setKey} = useGolobalContext();
	const searchValue = useRef('');
	const onSubmit = (e) => {
		e.preventDefault();
	}
	const onSearch = () => {
		setKey(searchValue.current.value)
		if(searchValue.current.value === '') {
			setKey('a')
		}
	}
	return <div className='col-10 offset-1'>
									<form onSubmit = {onSubmit} className='form-group d-flex' >
										<input ref = {searchValue} onChange = {onSearch} className='form-control' pleaceholder='Search...'/>
										<button className='btn btn-dark'>
											Search
										</button>
									</form>
								</div>
}
export default Search;
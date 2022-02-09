import React from 'react';
import '../../asserts/css/main.css'
import CounterComponent  from'./components/CounterComponent'
import './css/style.css'
class Counter extends React.Component {
	render () {
		return (
				<div>
					<div className='wrapper'>
						<CounterComponent/>
					</div>
				</div>
				)
	}
}
export default Counter
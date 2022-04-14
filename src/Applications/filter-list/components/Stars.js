import {Fragment} from 'react';
const Stars = (props) => {
	
		if (props.stars === 1) {
			return (
				<Fragment>
					<i key = {1} className = 'ti ti-star text-yellow'></i>
				</Fragment>
				)
			}
		else if (props.stars === 2) {
			return (
				<Fragment>
					<i key = {1} className = 'ti ti-star text-yellow'></i>
					<i key = {2} className = 'ti ti-star text-yellow'></i>
				</Fragment>
				)
		}
		else if (props.stars === 3) {
			return (
				<Fragment>
					<i key = {1} className = 'ti ti-star text-yellow'></i>
					<i key = {2} className = 'ti ti-star text-yellow'></i>
					<i key = {3} className = 'ti ti-star text-yellow'></i>
				</Fragment>
				)
		}
		else if (props.stars === 4) {
			return (
				<Fragment>
					<i key = {1} className = 'ti ti-star text-yellow'></i>
					<i key = {2} className = 'ti ti-star text-yellow'></i>
					<i key = {3} className = 'ti ti-star text-yellow'></i>
					<i key = {4} className = 'ti ti-star text-yellow'></i>
				</Fragment>
				)
		}
		else if (props.stars === 5) {
			return (
				<Fragment>
					<i key = {1} className = 'ti ti-star text-yellow'></i>
					<i key = {2} className = 'ti ti-star text-yellow'></i>
					<i key = {3} className = 'ti ti-star text-yellow'></i>
					<i key = {4} className = 'ti ti-star text-yellow'></i>
					<i key = {5} className = 'ti ti-star text-yellow'></i>
				</Fragment>
				)
		}
		else {
			return (
				<Fragment></Fragment>
				)
	}
}
export default Stars;
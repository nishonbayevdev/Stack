import React from 'react';
import ColorGeneration from './components/ColorGeneration'
import '../../asserts/css/main.css'
import './css/style.css'
class ColorRandom extends React.Component {
	render () {
		return (
				<div>
					<ColorGeneration/>
				</div>
				) 
	}
}
export default ColorRandom;
import {useState , useEffect} from 'react';
const ColorCrad = (props) => {
	const [copy , setCopy] = useState(false);
	const weight = props.weight;
	const hex = props.hex;
	const objBackroundColor = {
		backgroundColor : "#" + hex
	}
	const copyClipBoard = () => {
		window.navigator.clipboard.writeText('#' + hex);
		setCopy(true);
	}
	useEffect(()=>{
		const clearCopy = setInterval(()=>{
				setCopy(false);
			},3000)
		return () => clearInterval(clearCopy)
	},[])
	return (
		<div className='col-xl-2 col-lg-2 col-md-4 col-sm-12'>
			<div onClick = {copyClipBoard} style={objBackroundColor} className='card shadow card-self' >
				#{hex}
				<div className='t-center text-danger'>
					{weight}%
				</div>
				<div className={`copy ${copy?'copy-block':null} shadow`}>
					Copy's done
					<span className='triangle'></span>
				</div>
			</div>
			
		</div>
		)
}
export default ColorCrad;
import {useState} from 'react';
export default (props) => {
	const [hide , setHide] = useState(false);
	const {title , context , date , poll} = props.question;
	const closeAndOpen = () => {
		setHide(!hide)
	}
	return( 
		<div className='row'>
			<div className='col-10'>
				<h4 className='text-muted'>
					{title}
				</h4>
			</div>
			<div className='col-2'>
				<div className='toggle' onClick = {closeAndOpen}>
					{!hide ? <i className='ti ti-plus text-dark'></i> : <i className='ti ti-minus text-danger'></i>}
				</div>
			</div>
			<div className='col-10 offset-1'>
				<p className='text-light set-time'> {hide && context}</p> 
			</div>
			<div className='col-12'>
				<div className='row text-align-center'>
					<div className='col-6'>
						<p className='text-primary'><i className='ti ti-eye'></i> {poll}</p>
					</div>
					<div className='col-6'>
						<p className='text-light'><i className='ti ti-timer'></i> {date}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
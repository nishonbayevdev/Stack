const View = (props) => {
	const {job , exprience , hobby} = props.devoloper;
	return (
			<div className = 'row'>
				<div className='col-12'>
					<h4 className='text-light text-align-center'>
						<i className='ti ti-angle-right'></i>{job}
					</h4>
					<h5 className='text-success'>
						<i className='ti ti-angle-right'></i>
						Exprience for devolopment : {exprience}
					</h5>
					<p className='text-info'>
						<i className='ti ti-angle-right'></i>
						{hobby}
					</p>
				</div>
			</div>
		)
}
export default View;
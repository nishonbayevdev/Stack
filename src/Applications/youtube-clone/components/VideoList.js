import {Component} from 'react';
class VideoList extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		const {title,dateTime,description,video} = this.props.video;
		return (
			<div className='mt-3 mb-3 col-xl-4 col-lg-4 col-md-6 col-sm-10'>
				<div className='card shadow'>
					<div className='card-head'>
						<video controls className='video-fluid'>
							<source src = {video}>
							</source>
						</video>
					</div>
					<div className='card-body'>
						<h3 className='text-muted'>
							{title}
						</h3>
						<p className='text-muted'>
							{description}
						</p>
					</div>
					<div className='card-footer'>
						<p className='text-muted'>
							{dateTime.substring(0,19)}
						</p>
					</div>
				</div> 
			</div>
			)
	}
}
export default VideoList;
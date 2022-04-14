import React from 'react';
import VideoList from './VideoList';
import Http404 from './Http404';
class App extends React.PureComponent {
	constructor (props) {
		super (props);
		this.state = {videos : [],key:""}
	}
	onGetQuery = async (e) => {
		e.preventDefault();
		try {
			const respone = await fetch(`api/video/?query=${this.state.key}&token=adasdlasmdlksa5a1d5s1d51d21cs21csd0c2`);
			const video = await respone.json();
			this.setState({videos:video});
		}
		catch (err) {
			this.setState({videos : []})
		}
	}
	render () {
		return (
			<div className='container-full'>
				<div className='container'>
					<div className='row mt-5'>
						<div className='col-12 '>
							<h3 className='text-align-center text-dark'>
								Search Video
							</h3>
							<div className='row mt-5 mb-3'>
								<div className='col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-12 col-sm-12'>
									<form onSubmit={this.onGetQuery} className='form-group d-flex'>
										<input required onChange={(e) => this.setState({key:e.target.value})} className='text' className='form-control' placeholder='Search ...'/>
										<button className='btn btn-dark'>Search</button>
									</form>
								</div> 
							</div>
						</div> 
					</div>
					<div className='row'>
					{!this.state.videos.NotFound?this.state.videos.map((video) => {
						return <VideoList key={video.id} video = {video}/>
					}):<Http404/>}
					</div>
				</div>
			</div>
			)
	}
}
export default App;
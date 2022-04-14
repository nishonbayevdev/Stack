import logo from '../image/logo.svg';
import backImages from '../image/feature-illustration-2.svg';
import rightImage from '../image/hero-illustration.svg';
import Modal from './Modal';
const Home = () => {
	return (
		<div className='wrapper bg-wrapper' style={{backgroundImage:`url(${backImages})`}}>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 mt-5 mb-5'>
						<h2 className='text-muted'>
							All of the examples were tested with Python 3.9.5
						</h2>
						<p className='text-success'>
							In software development, design is often considered as the step that's done before
								programming. This isn't true; in reality, analysis, programming, and design tend
								to overlap, combine, and interweave. Throughout this book, we'll be covering
								a mixture of design and programming issues without trying to parse them into
								separate buckets. One of the advantages of a language like Python is the ability
								to express the design clearly
						</p>
					</div>
					<div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-5 mb-5'>
						<div className='img-fluid img-right' style={{backgroundImage:`url(${rightImage})`}}>
						</div>
					</div>
				</div> 
			</div>
		</div>
		)
}
export default Home;

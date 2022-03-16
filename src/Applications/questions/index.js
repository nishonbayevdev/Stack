import {useEffect , useState , Fragment} from 'react';

import Loading from './components/Loading';
import Question from './components/Question';

import './css/style.css';
const App = (props) => {
	const [questions , setQuestions] = useState([]);
	useEffect(() => {
		getQuestions()
	},[]);
	const getQuestions = async () => {
		try {
			const res = await fetch('api/questions/');
			const questions = await res.json();
			setQuestions(questions)
		}
		catch(err) {
			console.log('err')
		}
	}
	if (questions.length === 0) {
		return <Loading/>;
	}
	else {
		return (
			<Fragment>
				<div className='container mt-5'>
					<div className='card shadow'>
						<div className='card-body'>
							<div className='row'>
								<div className='col-lg-4 col-xl-4 col-md-12 col-sm-12'>
									<h3>Hello everyone and those questions for you</h3>
								</div>
								<div className='col-lg-8 col-xl-8 col-md-12 col-sm-12'>
									{
										questions.map((question) => {return  <Question key={question.id} question={question}/>})
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
			)
	}
}
export default App;
import {Component} from 'react';
import Comment from './components/Comment';
import './css/style.css';
import avatarOne from './img/1.png'
import avatarTwo from './img/2.png'
import avatarThree from './img/3.jpg'
import avatarFour from './img/4.jpg'
import avatarFive from './img/5.jpg'

class CommentApp extends Component {
	data = [
		{
			avatar : avatarOne,
			name : 'Alex',
			text : 'Hey What\'s There?',
			date : '10:20 PM'
		},
		{
			avatar : avatarTwo,
			name : 'Hermiona',
			text : 'She is my freind',
			date : '1:45 AM'
		},
		{
			avatar : avatarThree,
			name : 'Jon',
			text : 'I love it',
			date : '12:20 PM'
		},
		{
			avatar : avatarFour,
			name : 'Harry',
			text : 'Hey What\'s There',
			date : '9:20 PM'
		},
		{
			avatar : avatarFive,
			name : 'Alex',
			text : 'How\'s it going?',
			date : '3:25 AM'
		}

		]
	render () {
		return (
				<div>
					<div className = 'commnet-main'>
						<div className='container'>
							{this.data.map((data,index) => <Comment key = {index} avatar = {data.avatar} name = {data.name} text = {data.text} date = {data.date} />)}
						</div>
					</div>
				</div>
				)
	}
}
export default CommentApp;
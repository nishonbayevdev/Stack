const Comment = (props) => {
	return (
			<div>
				<div className = 'comment-box'>
					<img className='avatar' src={props.avatar} alt='rasm' />
					<div className='comment'>
						<h2 className = 'comment-name'>{props.name}</h2>
						<p className = 'comment-text'>{props.text}</p>
						<h4 className = 'comment-date'>{props.date}</h4>
					</div>
				</div>
			</div>
			);
}
export default Comment;
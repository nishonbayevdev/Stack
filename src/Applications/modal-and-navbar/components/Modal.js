import {useGlobalData} from './context';
const Modal = () => {
	const {isOpenModal , closeModal} = useGlobalData();
	return <main className={`${isOpenModal?'modal-show':'modal-unshow'} modal-card `}>
		<div className='modal-center'>
			<div className='modal-card'>
				<div className='modal-card-head shadow'>
					<button onClick={closeModal} className='btn btn-danger'>Close</button>
				</div>
			</div>
		</div>
	</main>
}
export default Modal;
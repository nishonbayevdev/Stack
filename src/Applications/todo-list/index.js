import { useState , Fragment , useEffect} from "react";
import List from './components/List'
import './css/style.css';
const App = (props) => {
    const getLocalStorage = () => {
        const store = localStorage.getItem('lists');
        if (store) {
            return JSON.parse(store)
        }
        else{
            return [];
        }
    }
    const [lists , setLists] = useState(getLocalStorage());
    const [item , setItem] = useState("");
    const [isEdit , setIsEdit] = useState(false);
    const [isEditID , setIsEditID] = useState(null)
    const onSetList = (event) => {
        event.preventDefault();
        if (!isEdit) {
            const newItem = {
            id : Date.now().toString(),
            work : item
            }
            setLists([...lists , newItem])   
            console.log(lists) 
        }
        else if (isEdit) {
            setLists(
                lists.map((list) => {
                    if (list.id === isEditID){
                        return {...list , work:item}
                    }
                    return list
                })
                    )
            setIsEdit(false)   
        }
        
    }
    const onDeleteItem = (id) => {
        const newItems = lists.filter((list) => list.id !== id);
        setLists(newItems)
    }
    const onEditItem = (id) => {
        setIsEdit(true);
        const itemFind = lists.find((list) => list.id === id);
        setItem(itemFind.work);
        setIsEditID(id);
    } 
    useEffect(() => {
        localStorage.setItem('lists' , JSON.stringify(lists))
    },[lists])
    return ( 
        <Fragment>
            <div className = 'container'>
                <div className="row">
                    <div className = 'col-12 mt-5 mb-3'>
                        <h3 className='text-muted text-align-center'>
                            To Do List
                        </h3>
                    </div> 
                    <div className='col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-md-12 col-sm-12'>
                        <form onSubmit = {onSetList} className='form-group d-flex'>
                            <input required type='text' value = {item} onChange = {(e) => {setItem(e.target.value)}} className='form-control' placeholder='You may add your task...'/>
                            <button type='submit' className='btn btn-success'>{ isEdit?"Edit":"Add"}</button>
                        </form>
                    </div>
                    <div className='col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-md-12 col-sm-12 card shadow'>
                        <div className='card-body'>
                            <div className='row'>
                                {
                                    lists.map((list ) => {
                                        return <List onEditItem = {onEditItem} onDeleteItem={onDeleteItem} list = {list} key = {list.id} />
                                    })
                                }
                            </div>
                        </div>
                        <div className='card-footer text-align-center mt-2 mb-2'>
                            <button onClick = {() => setLists([])} className='btn btn-light text-danger text-align-center'>
                                Clear all items
                            </button>
                        </div>
                    </div>  
                </div>
            </div>
        </Fragment>
     );
}
 
export default App;
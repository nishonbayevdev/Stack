import {Fragment , useState } from "react";
import Value from 'values.js';
import ColorCard from './components/ColorCard';
import './css/style.css';
const App = () => {
    const [colors , setColors] = useState(new Value('#f1f1f1').all());
    const [target , setTarget] = useState("#f1f1f1")
    const [error , setError] = useState(false);
    const onSubmitForm = (event) => {
        event.preventDefault()
        try {
            setError(false);
            const colors = new Value(target).all()
            setColors(colors);    
        }
        catch(err) {
            setError(true);
        }
        
    }
    console.log(colors)
    console.log(target)
    return (
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 mt-5'>
                        <h3 className='text-dark t-center mb-3 mt-3'>
                            Color Generate
                        </h3>
                        <form onSubmit = {onSubmitForm} className='form-group d-flex wrapper'>
                            <input className={`form-control ${error ? 'error' : null} `} value={target} onChange = {(event) => {setTarget(event.target.value)}} type='text' require="true" />
                            <button className='btn btn-light'>Generate</button>    
                        </form>
                    </div>
                    <div className='col-12'>
                        <div className='row'>
                            {
                                colors.map((color , index) => {
                                    return <ColorCard key={index} weight = {color.weight} hex = {color.hex}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default App;
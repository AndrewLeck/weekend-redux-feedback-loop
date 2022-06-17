import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Understanding (){

    const dispatch = useDispatch();
    const [understandingInput, setUnderstandingInput] = useState('');
    const history = useHistory();
    
    const sendToSupport = () => {
        history.push('/api/support')
        console.log('Inside send to support');
        dispatch({
            type:'ADD_UNDERSTANDING',
            payload:{
                understandingInput,
            }
        })
    }
    
    console.log('Inside Understanding function')

    return(
        <>
            <h2>How well are you understanding the content?</h2>
                <div>Understanding?</div>
                <input 
                type="number" 
                required
                value={understandingInput}
                onChange={(event) => setUnderstandingInput(event.target.value)}
                />
                
                <span><button onClick={() => sendToSupport()}>NEXT</button></span>
        </>
    )
}
export default Understanding;
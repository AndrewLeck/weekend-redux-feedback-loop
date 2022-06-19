import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {useState} from 'react';
function Feelings (){

    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState('')
    
    const sendToUnderstanding = () => {
        history.push('/api/understanding')
        console.log('inside sendtounderstanding')
        dispatch({
            type:'ADD_FEELING',
            payload: feeling,
        })
    }
    
    console.log('Inside feelings function')
    
    return(
        <>
            <h2>How are you feeling today?</h2>
                <div>Feeling?</div>
                <input 
                type="number" 
                required
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
                />
                <span><button onClick={() => sendToUnderstanding()}>NEXT</button></span>   
        </>
    )
}
export default Feelings;
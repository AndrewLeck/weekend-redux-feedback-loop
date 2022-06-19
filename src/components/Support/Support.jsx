import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Support (){

    const dispatch = useDispatch();
    const history = useHistory();
    const [supportInput, setSupportInput] = useState('');
  

    const sendToComments = () => {
        history.push('/api/comments')
        console.log('Inside Send to Comments');
        dispatch({
            type:'ADD_SUPPORT',
            payload:
                supportInput,
        })
    }
    console.log('Inside Support function')

    return(
        <>
            <h2>How well are you being supported?</h2>
                <div>Support?</div>
                <input 
                type="number" 
                required
                value={supportInput}
                onChange={(event) => setSupportInput(event.target.value)}
                />
                <span><button onClick={() => sendToComments()}>NEXT</button></span>
        </>
    )
}
export default Support;
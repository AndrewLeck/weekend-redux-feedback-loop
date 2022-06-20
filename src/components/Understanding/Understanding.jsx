import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';

function Understanding (){

    const dispatch = useDispatch();
    const [understandingInput, setUnderstandingInput] = useState('');
    const history = useHistory();
    
    const sendToSupport = () => {
        console.log('Inside send to support');
        dispatch({
            type:'ADD_UNDERSTANDING',
            payload: understandingInput,
        })
        if ( understandingInput === ''){
            // alert("This field must be filled out");
            Swal.fire({
                icon: 'error',
                title:'Oops...',
                text: 'Please fill out the input feild'
            })
            return false;
        }
        history.push('/api/support')
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
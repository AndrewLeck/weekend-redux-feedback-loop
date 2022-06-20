import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {useState} from 'react';
import Swal from 'sweetalert2';
function Feelings (){
    

    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState('')
    
    const sendToUnderstanding = () => {
        console.log('inside sendtounderstanding')
        dispatch({
            type:'ADD_FEELING',
            payload: feeling,
        })
        if (feeling === ''){
            // alert("This feild must be filled out");
            Swal.fire({
                icon: 'error',
                title:'Oops...',
                text: 'Please fill out the input feild'
            })
            return false;
        }
        history.push('/api/understanding')
    }
    
    console.log('Inside feelings function')
    
    return(
        <>  
            <h2>How are you feeling today?</h2>
                <div>Feeling?</div>
                <input 
                type="number" 
                value={feeling}
                onChange={(event) => setFeeling(event.target.value)}
                required
                />
                <span><button onClick={() => sendToUnderstanding()}>NEXT</button></span>   
        </>
    )
}
export default Feelings;
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';


function Submit (){
const dispatch = useDispatch()
    const history = useHistory();

    const sendBackToFeedBack= () => {
        dispatch ({
            type:'RESET_DATA'
        })

        history.push('/')
    }
    console.log('Inside Submit function')

    return(
        <>  
            <div>
                <h2>Thank You!</h2>
                    <button onClick={sendBackToFeedBack}>Leave New FeedBack</button>
            </div>
        </>
    )
}
export default Submit;
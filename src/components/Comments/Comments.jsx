import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


function Comments (){

    const dispatch = useDispatch();
    const [commentsInput, setCommentsInput] = useState('');
    const history = useHistory();

    const sendToReview = () => {
        history.push('/api/review')
        dispatch({
            type:'ADD_COMMENT',
            payload:
                commentsInput,
        })
    }
    console.log('Inside Comments function')

    return(
        <>
            <h2>Any comments you want to leave?</h2>
                <div>comments</div>
                <input 
                type="text"
                value={commentsInput}
                onChange={(event) => setCommentsInput(event.target.value)}
                />
                <span><button onClick={() => sendToReview()}>NEXT</button></span>
        </>
    )
}
export default Comments;
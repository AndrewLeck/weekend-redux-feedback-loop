import {useHistory} from 'react-router-dom'
function Comments (){
    const history = useHistory();
    const sendToReview = () => {
        history.push('/api/review')
    }
    console.log('Inside Comments function')

    return(
        <>
            <h2>Any comments you want to leave?</h2>
            <form>
                <div>comments</div>
                <input 
                type="text" 
                />
                <span><button onClick={sendToReview}>NEXT</button></span>
            </form>
        </>
    )
}
export default Comments;
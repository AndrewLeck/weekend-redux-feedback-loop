import {useHistory} from 'react-router-dom'

function Review(){
    const history = useHistory();
    const sendToSubmit= () => {
        history.push('/api/submit')
    }
    console.log('Inside Review function')

    return(
        <>
            <h2>Review Your Feedback</h2>
            <form>
                <ul>
                    <li>
                        Feelings: 
                    </li>
                    <li>
                        Understanding:
                    </li>
                    <li>
                        Support:
                    </li>
                    <li>
                        Comments:
                    </li>
                </ul>
                
                
                <button onClick={sendToSubmit}>SUBMIT</button>{/* Create a teneiry? When Review Not complete print Incomplete and grey out/ complete print Submit*/}
                <button>INCOMPLETE</button>
                
            </form>
        </>
    )
}
export default Review;
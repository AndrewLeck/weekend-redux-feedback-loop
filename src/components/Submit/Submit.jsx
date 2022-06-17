import {useHistory} from 'react-router-dom'

function Submit (){
    const history = useHistory();
    const sendBackToFeedBack= () => {
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
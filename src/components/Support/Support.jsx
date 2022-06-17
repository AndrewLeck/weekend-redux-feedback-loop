import {useHistory} from 'react-router-dom'

function Support (){
    const history = useHistory();
    const sendToComments = () => {
        history.push('/api/comments')
    }
    console.log('Inside Support function')

    return(
        <>
            <h2>How well are you being supported?</h2>
            <form>
                <div>Support?</div>
                <input 
                type="number" 
                required
                />
                <span><button onClick={sendToComments}>NEXT</button></span>
            </form>
        </>
    )
}
export default Support;
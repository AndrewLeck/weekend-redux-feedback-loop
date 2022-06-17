import {useHistory} from 'react-router-dom'

function Understanding (){
    const history = useHistory();
    const sendToSupport = () => {
        history.push('/api/support')
    }
    
    console.log('Inside Understanding function')

    return(
        <>
            <h2>How well are you understanding the content?</h2>
            <form>
                <div>Understanding?</div>
                <input 
                type="number" 
                required
                />
                
                <span><button onClick={sendToSupport}>NEXT</button></span>
                
            </form>
        </>
    )
}
export default Understanding;
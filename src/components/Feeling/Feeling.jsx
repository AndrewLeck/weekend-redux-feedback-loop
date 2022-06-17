import {useHistory} from 'react-router-dom'
function Feelings (){
    const history = useHistory();
    const sendToUnderstanding = () => {
        history.push('/api/understanding')
    }
    console.log('Inside feelings function')
    
    return(
        <>
            <h2>How are you feeling today?</h2>
            <form>
                <div>Feeling?</div>
                <input 
                type="number" 
                required
                />
                
                <span><button onClick={sendToUnderstanding}>NEXT</button></span>
                
            </form>
        </>
    )
}
export default Feelings;
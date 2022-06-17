import { Link } from 'react-router-dom';
function Comments (){
    console.log('Inside Comments function')

    return(
        <>
            <h2>Any comments you want to leave?</h2>
            <form>
                <div>comments</div>
                <input 
                type="text" 
                />
                <Link to='/api/feedback'>
                <span><button>NEXT</button></span>
                </Link>
            </form>
        </>
    )
}
export default Comments;
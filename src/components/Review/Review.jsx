import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import '../Review/Review.css';
import Swal from 'sweetalert2';

function Review(){

 const feeling = useSelector(store => store.feeling)
 const understanding = useSelector(store => store.understanding)
 const support = useSelector(store => store.support)
 const comments = useSelector(store => store.comments)
 const history = useHistory();
    
 const sendToSubmit= () => {
        history.push('/api/submit')

        axios({
            method: 'POST',
            url:'/api/feedback',
            data: {
                feeling,
                understanding,
                support,
                comments,
            }
        })
        .then(() => {
            console.log('POST SUCESS') 
            Swal.fire({
                icon:'success',
                title: 'Success',
                text: 'Sucessfully submitted'
            })
        })
        .catch((err) => {
            console.log('POST FAILED', err);
        })

    }
    
    console.log('Inside Review function')
    
    const changeFeelings = () =>{
        Swal.fire({
            title: 'Edit Feelings',
            input:'number',
            inputValue: feeling,
            confirmButtonText: 'Save Changes',
            confirmButtonColor:'green',
            showCancelButton: true,
            cancelButtonColor:'red',
            cancelButtonText: 'Cancel edit'
          }).then((result) =>{
              console.log(result)
              if (result.isConfirmed){
                  Swal.fire(
                      'Saved!',
                      'Feeling has been updated.',
                      'success'
                  )
                  Swal.getInput(feeling)
              } else if (result.dismiss ===  Swal.DismissReason.cancel){
                  Swal.fire(
                      'Cancelled',
                      'No changes were made',
                      'error'
                  )
              }
              return feeling
          })
          console.log(feeling)
    }
   
    return(
        <>
            <h2>Review Your Feedback</h2>
                <ul>
                    <li>
                        Feelings: {feeling} <button onClick={changeFeelings}>Edit</button>
                    </li>
                    <li>
                        Understanding: {understanding} <button>Edit</button>
                    </li>
                    <li>
                        Support: {support} <button>Edit</button>
                    </li>
                    <li>
                        Comments: {comments} <button>Edit</button>
                    </li>
                </ul>

                
                <button onClick={sendToSubmit}>SUBMIT</button>{/* Create a teneiry? When Review Not complete print Incomplete and grey out/ complete print Submit*/}
                {/* <button>INCOMPLETE</button> */}
        </>
    )
}
export default Review;
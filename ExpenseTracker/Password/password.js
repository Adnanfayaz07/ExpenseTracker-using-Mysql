const forgotPasswordForm=document.querySelector("#forgotpasswordform")
 forgotPasswordForm.addEventListener('submit',(e)=>{
     e.preventDefault()
     const email=document.querySelector('.email').value
     
    axios.get(`http://54.235.24.107:3000/password/forgotpassword/${email}`).then((res)=>{
        forgotPasswordForm.reset()
        alert(res.data.message)
        window.location.href='../login/login.html'
    }).catch((error) => {
        if ( error.response.data) {
            alert(error.response.data.error);
        } else {
            alert('An error occurred. Please try again later.');
        }
    })
        })
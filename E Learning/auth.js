const loginbtn = document.querySelector('#login');
const signInbtn = document.querySelector('#signup');
const btnc = document.querySelectorAll('.btnc');
const notSingup = btnc[0].querySelector('#nsp');
const submit = document.getElementById('submit');
const logbox=document.querySelectorAll('.login-box')
const logCont = document.getElementById('logincont');

// -----------------------------------------------------------------------------------------------------------------------------------------------
function Login(){
    const username=logbox.getElementById('username');
    const password=logbox.getElementById('password');
        console.log('this is'+username.value);
        console.log(password.value);


};
// /---
submit.addEventListener('click', () => {
    logCont.style.display = 'none';
});
loginbtn.addEventListener('click', () => {
    logbox[0].querySelector('h2').innerHTML='Login';
    logCont.style.display = 'block';  
});

signInbtn.addEventListener('click', () =>{
    logCont.style.display = 'block';
    logbox[0].querySelector('h2').innerHTML='Register';
    notSingup.innerText='Already Signup ? Sign In'
});

notSingup.addEventListener('click',()=>{
    logbox[0].querySelector('h2').innerHTML='Register';
});


var email=document.getElementById("Email");
var username =document.getElementById("userName");
var password=document.getElementById("passWord");
var number=document.getElementById("phno");
var form=document.getElementById("form");

form.addEventListener('submit',e=>{
     e.preventDefault();
     validateInputs();
     if(flag1==true && flag2==true && flag3==true && flag4==true){
     window.location.replace("login.html");
     }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const numberValue = number.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
        flag1=false;
    } else {
        flag1=true;
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        flag2=false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        flag2=false;
    } else {
        flag2=true;
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        flag3=false;
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.');
        flag3=false;
    } else {
        flag3=true;
        setSuccess(password);
    }

    if(numberValue === '') {
        setError(number, 'number is required');
        flag4=false;
    } else if (numberValue.length < 10) {
        setError(number, 'number must be at least 10 character.');
        flag4=false;
    } else {
        flag4=true;
        setSuccess(number);
    }
};




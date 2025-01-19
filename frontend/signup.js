async function handleSubmit() {
     const errorMsg = document.getElementById('errorMsg');
     const password = document.getElementById('password').value;
     const confirmPass = document.getElementById('confPass').value;

    if (!password.includes('$') || password !== confirmPass) {
        document.getElementById('errorMsg').style.display = 'block';
        return;
    }

    const formData = {
        userName: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: password
    };


axios.post('http://localhost:3000/api/register', formData)
.then(response => {

    if (response.data.success) {
        const userName = response.data.userName ;
		
		localStorage.setItem('username', userName);
		window.location.href = './home.html';

    } else {
        errorMsg.style.display = 'block';
        errorMsg.textContent = response.data.message || 'שגיאה בתהליך ההרשמה.';
    }
})
.catch(error => {
    console.error("Error during the request:", error);
    errorMsg.style.display = 'block';
    errorMsg.textContent = 'אירעה שגיאה בחיבור לשרת. נסה שוב מאוחר יותר.';
});

}

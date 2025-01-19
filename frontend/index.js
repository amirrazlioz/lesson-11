function handleLogin() {
    const name = document.getElementById('name').value;    
    if (name.length >= 2) {       
        window.location.href = './signup.html';
    } else {
        
        document.getElementById('errorMsg').style.display = 'block';
    }    
}

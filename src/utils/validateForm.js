const validateForm = (email, password, username = null)=>{
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(username !== null){
        const isValidUsername = /^[a-zA-Z0-9._-]{3,20}$/.test(username);
        if(!isValidUsername){ return "Invalid Username"};
    }

    if(!isValidEmail){ return "Invalid Email"}
    if(!isValidPassword){ return "Invalid Password"}

    return null; // null means it is valid
}

export default validateForm;
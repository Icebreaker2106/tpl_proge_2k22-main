function passwordCheck() {
    var password = "Password123";
    
    var inputVal = document.getElementById("psw").value;

    if (inputVal == password) {
        alert("Good job man you cracked the password!");
        window.location.href = "test.html";
    
    } else {
        alert("No way you're getting in bro");
    }

}
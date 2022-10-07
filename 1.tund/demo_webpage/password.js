function passwordCheck() {
    var password = "Password123";
    
    var userInput = window.prompt("Please enter password!");

    if (userInput == password) {
        alert("Good job man you cracked the password!");
        window.location.href = "test.html";
    
    } else {
        alert("No way you're getting in bro");
    }

}
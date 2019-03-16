function getInfo(username, password){
    var res = 'Not exists';
    username = document.getElementById("username").value;
    // password = document.getElementById("password");
    if (allUsers.has(username) == true){
        res = 'Exists!';
    }
    console.log("Result: " + res);
};
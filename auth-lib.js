// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// var group = document.getElementById("group").value;
// var right = document.getElementById("right").value;

function createUser(){
    let username = getUsername();
    let password = getPassword();

    if (username.length != 0){
        if (allUsers.has(username)){
            throw new Error("User with us");
        }
        allUsers.set(username, password);
        console.log("User added: " + username + " " + password);
    } else{
        throw new Error("Username is empty");
    }
};

function deleteUser(username) {

    username = getUsername();

    try{
        if (!allUsers.has(username) || allUsers.size == 0){
            throw Error("User " + username + " haven't joined us yet, try to fire someone else.");
        }
        allUsers.delete(username);
        console.log("Ok, user " + username + " left us...");
    }catch (noUserError) {
        console.log("User " + username + " haven't joined us yet, try to fire someone else.");
    }
};

function users() {
    let usersArray = [];
    try{
        if (allUsers.size == 0){
            throw Error;
        }
        for (let user of allUsers.keys()){
            usersArray.push(user);
            console.log(user + " pushed");
        }
        console.log(usersArray);
    }catch (noUsersExist) {
        console.log("No users joined us so far");
    }
};

function createGroup(group) {

    group = getGroup();

    try{
        if (!group.length == 0){
            if (allGroups.has(group)){
                throw Error("Group " + group + " was created earlier");
            }
            allGroups.set(group, []);
            console.log("Group " + group + " created");
        }else {
            throw Error("Group name is empty")
        }
    }catch (groupError) {
        console.log(groupError);
    }
};

function deleteGroup(group) {

    group = getGroup();

    try{
        if (!allGroups.includes(group)){
            throw Error;
        }
        console.log("Group " + group + " removed");
    }catch (groupNotExists) {
        console.log("No such a " + group + " in the system");
    }
};

function groups() {

    try{
        if (allGroups.size == 0){
            throw Error;
        }
        console.log(allGroups);
    }catch (noGroupExist) {
        console.log("No groups exist so far");
    }
};

function addUserToGroup(username, group) {

    // username = getUsername()
    // group = getGroup();

    try{
        if (allGroups.get(group).includes(username)){
            throw Error;
        }
        allGroups.get(group).push(username);
        console.log("User " + username + " have been added to the " + group + " group");
    }catch (userInGroup) {
        console.log("User " + username + " is already in group");
    }
};

function userGroups(username) {

    // username = getUsername();
    username = document.getElementById("username").value;

    let userGroups = [];

    for (let gr of allGroups.keys()){
        for (let i = 0, elem = allGroups.get(gr); i < allGroups.get(gr).length; i++){
            if (elem[i] == username){
                userGroups.push(gr);
            }
        }
    }
    console.log(username + " has membership in: " + userGroups);
};

function removeUserFromGroup(username, group) {

    username = getUsername();
    group = getGroup();

    allGroups.get(group).splice(allGroups.get(group).indexOf(username));
    console.log("User " + username + " deleted from " + group + " group");
};

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function createRight(right) {

    right = getRight();
    // right = makeid();

    if (right.length == 0){
        throw new Error("Right empty");
    }else if (allRights.has(right)){
        throw new Error("Right defined already");
    }
    allRights.set(right, []);
    console.log("Right " + right + " created");

};

function deleteRight(right) {

    right = getRight();

    if (right.length == 0){
        throw new Error("Right empty");
    }
    if (!allRights.has(right)){
        throw new Error("No such right");
    }
    allRights.delete(right);
    console.log("Right " + right + " deleted");
};

function groupRights(group) {

    group = getGroup();

    let groupRights = [];

    if (group.length == 0){
        throw new Error("Group empty");
    }
    if(!allGroups.has(group)){
        throw new Error("No such group");
    }
    for (let right of allRights.keys()){
        for (let i = 0, elem = allRights.get(right); i < allRights.get(right).length; i++){
            if (elem[i] == group){
                console.log("Group right: " + elem[i] + " of group " + group + " right: " + right);
                groupRights.push(right);
            }
        }
    }

    // console.log("Group rights: " + groupRights + ", size: " + groupRights.length);
    console.log(groupRights);
};

function rights() {

    if (allRights.size == 0){
        throw new Error("No rights");
    }
    let rights = [];

    for (let right of allRights.keys()){
        rights.push(right);
    }
    console.log(rights);
};

function addRightToGroup(right, group) {
    //switch back!
    // right = getRight();
    // group = getGroup();

    if (right.length == 0){
        throw new Error("Right empty");
    }else if (group.length == 0){
        throw new Error("Group name impty");
    }else if (!allRights.has(right)){
        throw new Error("No such right");
    }else if(!allGroups.has(group)){
        throw new Error("Now such group");
    }else if(allRights.get(right).includes(group)){
        throw new Error("No group for this right");
    }

    allRights.get(right).push(group);
    console.log("Right " + right + " added to " + group + " group");

};

function removeRightFromGroup(right, group) {

    right = getRight();
    group = getGroup();

    if (right.length == 0){
        throw new Error("Right empty");
    }else if (group.length == 0){
        throw new Error("Group name impty");
    }else if (!allRights.includes(right)){
        throw new Error("No such right");
    }else if(!allGroups.includes(group)){
        throw new Error("Now such group");
    }else if(!allRights.get(right).includes(group)){
        throw new Error("No group for this right");
    }

    allRights.get(right).splice(group);
    console.log("Right " + right + " deleted from " + group + " group");
};

function isAuthorized(user, right) {};


//Extra, delete after

function checkRight() {

    let username = document.getElementById("username").value;
    // let right = document.getElementById("userRight").value;
    // if (username.length == 0){
    //     console.log("Username empty, took from userCheck field");
    // }

    let userGroups = [];

    for (let group of allGroups.keys()){
        for (let i = 0, elem = allGroups.get(group); i < allGroups.get(group).length; i++){
            if (elem[i] == username){
                userGroups.push(group);
            }
        }
    }

    let userRights = [];

    for (let right of allRights.keys()){
        for (let i = 0, elem = allRights.get(right); i < allRights.get(right).length; i++){
            for (let j = 0; j < userGroups.length; j++){
                if (userGroups[j] == elem[i]){

                    userRights.push(right);
                }
            }
        }
    }

    // if (userRights.includes(right)){
    //     console.log("Yes, user " + username + " can " + right);
    // }else{
    //     console.log("No, he can not:(");
    // }
    console.log(userRights);
    return userRights;
}



//LOGIN


var sessions = new Map();

function createSession(username){

    sessions.set(username, true);
    console.log(sessions);
};



function login(username, password) {

    username = getUsername();
    password = getPassword();

    // if (!sessions.has(username)){
    //     sessions.set(username, true);
    // }

    let connect = false;

    if (allUsers.has(username)){
        console.log("User is in system");
        if (allGroups.get("complete bullshit").includes(username) &&
                !allGroups.get("priority users").includes(username) &&
                !allGroups.get("non priority users").includes(username)){
            console.log("User " + username + " is in complete bullshit, so let us let him surf without password");
            createSession(username);
            connect = true;
            console.log("Keep surfing, but please stay quiet");
        }else {
            if (allUsers.get(username) === password){
                // console.log(allUsers.get(username) + " == " + password);
                // console.log(sessions.get(username) + " ...creating session");
                if (sessions.has(username) == false){
                    // console.log(sessions.get(username) + " ...creating session");
                    // createSession(username);
                    // if (!sessions.has(username)){
                    //     // sessions.set(username, true);
                    //     createSession(username);
                    // }else{
                    //     console.log(username + " is already logged in");
                    // }
                    createSession(username);
                    connect = true;

                    console.log("Session created: " + connect);
                }else {
                    connect = false;
                    console.log("Session not created: " + connect + " because of active session ");
                }
            } else {
                connect = false;
                console.log("Session not created: " + connect + " password is incorrect");
            }
        }
    }else {
        connect = false
        console.log("Session not created: " + connect + " because user is not in system");
    }

    console.log("CONNECTION: " + connect);
    if (connect == true){
        console.log("You now have the following rights: ");
        checkRight();
    }
    return connect;
};

function loginAs(username) {

    username = getUsername();

    if (currentUser() == null){
        throw new Error("No user logged in");
    }
    if (!allGroups.get("priority users").includes(currentUser())){
        throw new Error("You're not the priority one");
    }
    if (username == null){
        throw new Error("Username empty");
    }

    let connect = false;

    if (allUsers.has(username)){
        console.log("User is in system");
        if (sessions.has(username) == false){
            console.log(sessions.get(username) + " ...creating session");
            logout();
            // createSession(username);
            if (sessions.has(username) == false){
                // sessions.set(username, true);
                createSession(username);
            }else{
                console.log(username + " is already logged in");
            }
            connect = true;

            console.log("Session created: " + connect + ". You're logged in as " + currentUser());
        }else {
            connect = false;
            console.log("Session not created: " + connect + " because of active session ");
        }
    }else {
        connect = false
        console.log("Session not created: " + connect + " because user is not in system");
    }
}

function currentUser() {

    let current;
    for (let user of sessions.keys()){
        current = user;
    }
    console.log(current);
    return current;
};

function logout(){
    if (sessions.size != 0){
        sessions.clear();
    }
    console.log(sessions);
};

function securityWrapper(username, right){
    var result = null;

    username = document.getElementById("username").value;
    right = getRight();
    console.log(right);

    if (!allUsers.has(username)){
        throw new Error("Check user in system");
    }
    if (allRights.has(right) == false){
        throw new Error("No such right");
    }
    if (currentUser() != username){
        throw new Error("Log in firstly");
    }
    if (!checkRight(username).includes(right)){
        throw new Error("You can not do like this");
    }
    console.log("Function name: " + priorityActionsMap.get(right).name);
    return priorityActionsMap.get(right)(1);                                        //HOW TO CALL FUNC FROM ARRAY!!!
};

addActionListener(function listener(username, action) {

    var right = document.getElementById("userRight").value;

    username = document.getElementById("username").value;
    action = securityWrapper(username, right);

    if (!actionsArray.includes(listener(user, action))){
        actionsArray.push(listener(user, action));
    }

    console.log("Пользователь " + username + " только что сделал " + action.name);
});

var username = getUsername();
var password = getPassword();

var group = getGroup();

var right = getRight();

function groupSize(group) {
    group = document.getElementById("group").value;
    console.log(allGroups.get(group).length);
};


function getUsername() {
    return document.getElementById("username").value;
}

function getPassword() {
    return document.getElementById("password").value;
}

function getGroup() {
    return document.getElementById("group").value;
}

function getRight() {
    return document.getElementById("userRight").value;
}
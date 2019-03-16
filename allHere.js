var allUsers = new Map();

var allGroups = new Map();

var allRights = new Map();

// allUsers.set("admin", "admin");
// allUsers.set("echo88", "1234");
// allUsers.set("manager01", "0101");
// allUsers.set("drinker", "7777");

//PRIORITY USERS
allUsers.set("mainOne", "mainOne");
allUsers.set("mainTwo", "mainTwo");
allUsers.set("mainThree", "mainThree");

allUsers.set("middleOne", "middleOne");
allUsers.set("middleTwo", "middleTwo");
allUsers.set("middleThree", "middleThree");
allUsers.set("middleFour", "middleFour");

allUsers.set("lowOne", "lowOne");
allUsers.set("lowTwo", "lowThree");
allUsers.set("lowThree", "lowThree");
allUsers.set("lowFour", "lowFour");
allUsers.set("lowFive", "lowFive");
// allGroups.set("administrative", []);
// allGroups.set("management", []);
// allGroups.set("wasting time", []);

allGroups.set("priority users", []);
allGroups.set("non priority users", []);
allGroups.set("complete bullshit", []);


// allRights.set("add user", []);
// allRights.set("delete user", []);
// allRights.set("add content", []);
// allRights.set("delete content", []);
// allRights.set("waste collection", []);

allRights.set("priority rights", []);       //those who can login as other users
allRights.set("just rights", []);
allRights.set("no rights at all", []);
allRights.set("can drink a lot", []);
allRights.set("glenfiddich drink", []);
allRights.set("chivas Regal sipping", []);
allRights.set("brake fluid drinking", []);
allRights.set("mud eating", []);



function doAll(){

    // addUserToGroup("admin", "administrative");
    // addUserToGroup("admin", "management");
    // addUserToGroup("admin", "wasting time");
    // addUserToGroup("drinker", "wasting time");
    //
    // addRightToGroup("add user", "management");
    // addRightToGroup("delete user", "management");
    // addRightToGroup("add content", "administrative");
    // addRightToGroup("delete content", "administrative");
    // addRightToGroup("waste collection", "wasting time");

    addUserToGroup("mainOne", "priority users");
    addUserToGroup("mainTwo", "priority users");
    addUserToGroup("mainThree", "priority users");

    addUserToGroup("middleOne", "non priority users");
    addUserToGroup("middleTwo", "non priority users");
    addUserToGroup("middleThree", "non priority users");
    addUserToGroup("middleFour", "non priority users");

    addUserToGroup("lowOne", "complete bullshit");
    addUserToGroup("lowTwo", "complete bullshit");
    addUserToGroup("lowThree", "complete bullshit");
    addUserToGroup("lowFour", "complete bullshit");
    addUserToGroup("lowFive", "complete bullshit");

    addRightToGroup("priority rights", "priority users");
    addRightToGroup("just rights", "priority users");
    addRightToGroup("no rights at all", "priority users");
    //
    addRightToGroup("can drink a lot", "priority users");
    addRightToGroup("glenfiddich drink", "priority users");
    addRightToGroup("chivas Regal sipping", "priority users");

    addRightToGroup("just rights", "non priority users");
    addRightToGroup("no rights at all", "non priority users");
    addRightToGroup("brake fluid drinking", "non priority users");

    addRightToGroup("no rights at all", "complete bullshit");
    addRightToGroup("mud eating", "complete bullshit");

    console.log("Ok, done");
}


function userMapSize() {
    console.log(allUsers.size);
}

class User {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    get getUsername(){return this.username;}
    get getPassword(){return this.password;}


}

class Right {

    constructor(right){
        this.right = right;
    }
}

function groupsSize() {
    console.log(allGroups.length);
}

class Group{

    constructor(group) {
        this.group = group;
    }

    get getGroup() {
        return this.group;
    }
}

// function asMuchAsYouCan(bottles){
//     bottlesInTotal += bottles;
//     console.log("Drunk " + bottlesInTotal + " in total");
// };
//
// function glenfiddichDrink(bottles){
//     glenfiddich += bottles;
//     console.log("Drunk " + glenfiddich + " in total");
// };
//
// function chivasRegalDrink(bottles) {
//     chivasRegal += bottles;
//     console.log("Drunk " + chivasRegal + " in total")
// }
//
// function brakeFluidDrink(bottles) {
//     brakeFluid += bottles;
//     console.log("Drunk " + brakeFluid + " in total");
// }
//
// function eatMud(shovel) {
//     mud += shovel;
//     console.log("Ate " + mud + " in total");
// }
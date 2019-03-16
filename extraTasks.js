//Priority functions

var bottlesInTotal = 0;
var glenfiddich = 0;
var chivasRegal = 0;

var brakeFluid = 0;

var mud = 0;

var priorityActionsMap = new Map();
priorityActionsMap.set("can drink a lot", asMuchAsYouCan);
priorityActionsMap.set("glenfiddich drink", glenfiddichDrink);
priorityActionsMap.set("chivas Regal sipping", chivasRegalDrink);
priorityActionsMap.set("brake fluid drinking", brakeFluidFrink);
priorityActionsMap.set("mud eating", eatMud);

function asMuchAsYouCan(bottles){
    bottlesInTotal += bottles;
    console.log("Drunk " + bottlesInTotal + " of ALL he could in total");
};

function glenfiddichDrink(bottles) {
    glenfiddich += bottles;
    console.log("Drunk " + bottles + " of glenfiddich in total");
};

function chivasRegalDrink(bottles) {
    chivasRegal += bottles;
    console.log("Drunk " + bottles + " of chivas regal in total");
};
function brakeFluidFrink(bottles) {
    brakeFluid += bottles;
    console.log("Drunk " + bottles + " of brake fluid in total");
}
function eatMud(shovel) {
    mud += shovel;
    console.log("Ate " + shovel + " shovel(s) of mud in total");
}


// function securityWrapper(username, right){
//
//     username = getUsername();
//     right = getRight();
//     console.log(right);
//
//     if (!allUsers.has(username)){
//         throw new Error("Check user in system");
//     }
//     if (!allRights.has(right)){
//         throw new Error("No such right");
//     }
//     if (currentUser() != username){
//         throw new Error("Log in firstly");
//     }
//     if (!checkRight(username).includes(right)){
//         throw new Error("You can not do like this");
//     }
//     // return asMuchAsYouCan(7);
//     // console.log(priorityActionsMap.get(right));
//     return priorityActionsMap.get(right);
// };

// var priorityActions = {
//     asMuchAsYouCan : function (bottles) {
//         bottlesInTotal += bottles;
//         console.log("Drunk " + bottlesInTotal + " in total"); },
//     glenfiddichDrink : function (bottles) {
//         glenfiddich += bottles;
//         console.log("Drunk " + glenfiddich + " in total"); },
//     chivasRegalDrink : function (bottles) {
//         chivasRegal += bottles;
//         console.log("Drunk " + chivasRegal + " in total"); },
// };
//
// var nonPriorityActions = {
//     "brakeFluidDrink" : function (bottles) {
//         brakeFluid += bottles;
//         console.log("Drunk " + brakeFluid + " in total"); },
//     "eatMud" : function (shovel) {
//         mud += shovel;
//         console.log("Ate " + mud + " in total"); }
// };
//
// var obj = { asMuchAsYouCan : "can drink as much as you can",
//             glenfiddichDrink : "glenfiddich frink",
//             chivasRegalDrink : " drink chivas regal",
//             brakeFluidDrink : "drink brake fluid",
//             eatMud : "simply eat mud"};
//
// // console.log(priorityActions);
// // console.log(nonPriorityActions);
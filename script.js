/*
let members_button = document.querySelector("#members_button");
let achievements_button = document.querySelector("#achievements_button");
let media_button = document.querySelector("#media_button");
*/

let members_list = document.querySelector("#members_list");

members_button.addEventListener("click", () => {

    members_list.textContent = "CozyFoundViper";

});

document.querySelector("#done_button").addEventListener("click", () => {

    members_list.textContent = "";


});
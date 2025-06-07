
let crew_bio_button = document.querySelector("#crew_bio_button");
let members_button = document.querySelector("#members_button");
let achievements_button = document.querySelector("#achievements_button");
let media_button = document.querySelector("#media_button");


let crew_bio = document.querySelector("#crew_bio");
let members_list = document.querySelector("#members_list");
let achievements_list = document.querySelector("#achievements_list");
let media_list = document.querySelector("#media_list");

let found_bio = document.querySelector("#found");


crew_bio_button.addEventListener("click", () => {
    crew_bio.textContent = "ForeigNoise is a worldwide breaking team. Founded in 2019, it served as a community of both foreign and Korean breakers to bridge cultural differences through Hip Hop culture and dance. While it started off as a forum for the foreign-breaking community to come together to learn from one another, battle, and prepare for competitions, ForeigNoise has evolved into its current form to educate and entertain public and private audiences about breaking and Hip Hop culture. Its current membership includes members of the Korean diaspora from the Philippines and the United States.";
    members_list.textContent = "";
    achievements_list.textContent = "";
    media_list.textContent = "";
});

members_button.addEventListener("click", () => {
    crew_bio.textContent = "";
    members_list.textContent = found_bio.textContent;
    achievements_list.textContent = "";
    media_list.textContent = "";


});

achievements_button.addEventListener("click", () => {
    crew_bio.textContent = "";
    members_list.textContent = "";
    achievements_list.textContent = "Taco Amigo, China UN, Holi Hai";
    media_list.textContent = "";
});

media_button.addEventListener("click", () => {
    crew_bio.textContent = "";
    members_list.textContent = "";
    achievements_list.textContent = "";
    media_list.textContent = "PHOTO AND VIDEO PLACEHOLDER";
})




document.querySelector("#done_button").addEventListener("click", () => {

    crew_bio.textContent = "";
    members_list.textContent = "";
    achievements_list.textContent = "";
    media_list.textContent = "";


});
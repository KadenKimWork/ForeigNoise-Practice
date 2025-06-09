
let crew_bio_button = document.querySelector("#crew_bio_button");
let members_button = document.querySelector("#members_button");
let achievements_button = document.querySelector("#achievements_button");
let media_button = document.querySelector("#media_button");

let main_space = document.querySelector("#main_space");

let crew_bio = document.querySelector("#crew_bio");
let members_list = document.querySelector("#members_list");
let achievements_list = document.querySelector("#achievements_list");
   //let crew_video = videoElement.src("crew_video_space");
let media_list = document.querySelector("#media_list");

//let found_bio = document.querySelector("#found");



/*
crew_bio_button.addEventListener("click", () => {
    crew_bio.textContent = "ForeigNoise is a worldwide breaking team. Founded in 2019, it served as a community of both foreign and Korean breakers to bridge cultural differences through Hip Hop culture and dance. While it started off as a forum for the foreign-breaking community to come together to learn from one another, battle, and prepare for competitions, ForeigNoise has evolved into its current form to educate and entertain public and private audiences about breaking and Hip Hop culture. Its current membership includes members of the Korean diaspora from the Philippines and the United States.";
    members_list.textContent = "";
    achievements_list.textContent = "";
    media_list.textContent = "";
});

members_button.addEventListener("click", () => {
    crew_bio.textContent = "";
    members_list.textContent = members_list.textContent;
    //members_list.textContent = found_bio.textContent;
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
*/





//main_space.textContent = crew_bio.textContent;

/*
document.querySelector("#buttons").addEventListener("click", e => {
    if (e.target == crew_bio_button) {
        main_space.textContent = crew_bio.textContent;
    } else if (e.target == members_button) {
        main_space.textContent = document.querySelector("#cozy_name").innerHTML + document.querySelector("#cozy_name").textContent;
    } else if (e.target == achievements_button) {
        main_space.textContent = achievements_list.textContent;
    } else if (e.target == media_button) {
        main_space.textContent = "VIDEO";
    };
});
*/

const main_space_div = document.getElementById('main_space');


document.querySelector("#buttons").addEventListener("click", e => {
    if (e.target == crew_bio_button) {
        //main_space.textContent = crew_bio.textContent;
        main_space_div.innerHTML = '<p id="crew_bio">This is the crew bio.</p>'

    } else if (e.target == members_button) {
        //main_space.textContent = document.querySelector("#cozy_name").innerHTML + document.querySelector("#cozy_name").textContent;
        main_space_div.innerHTML = '<p id="cozy_name">COZY</p><p id="found_name">FOUND</p><p id="viper_name">VIPER</p>'

        

    } else if (e.target == achievements_button) {
        //main_space.textContent = achievements_list.textContent;
        main_space_div.innerHTML = '<p id="achievements list">TACO AMIGO, CHINA UN, HOLI HAI</p>'

    } else if (e.target == media_button) {
        //main_space.textContent = "VIDEO";

        main_space_div.innerHTML = '<p id="media_list">MEDIA:<video id="crew_video" src="ForeigNoise Teaser Test_01.m4v" controls height = 40% width = 40%> </p>'

    };
});

document.querySelector("#cozy_name").addEventListener("click", () => {
            main_space_div.innerHMTL = '<p id="cozy_bio>Cozy age 34</p>'
        });

document.querySelector("#crew_photo").addEventListener("click", () => {

    main_space.textContent = crew_bio.textContent;

});


document.querySelector("#done_button").addEventListener("click", () => {

    main_space.textContent = "";

});

document.querySelector("#cozy_name").addEventListener("click", () => {

    alert("COZY");

});
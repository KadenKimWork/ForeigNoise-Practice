
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

let cozy_button = document.querySelector("#cozy_name");
let found_button = document.querySelector("#found_name");
let viper_button = document.querySelector("#viper_name");



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

let main_space_div = document.getElementById('main_space');




document.querySelector("#buttons").addEventListener("click", e => {


    if (e.target == crew_bio_button) {
        //main_space.textContent = crew_bio.textContent;
        main_space_div.innerHTML = '<p id="crew_bio">This is the crew bio.</p>'

    } else if (e.target == members_button) {
        //main_space.textContent = document.querySelector("#cozy_name").innerHTML + document.querySelector("#cozy_name").textContent;
        
        main_space_div.innerHTML = '<div id="members_list"><p id="cozy_name"><img src="Cozy_Photo.png" style="width: 70px; height: auto;">COZY</p><p id="found_name"><img src="Found_Photo.png" style="width: 70px; height: auto">FOUND</p><p id="viper_name"><img src="Viper_Photo.png" style="width: 70px; height: auto;">VIPER</p></div>'

            /*
            document.querySelector("#members_list").addEventListener("click", e => {
                if (e.target === cozy_button) {
                    main_space_div.innerHTML = '<p id="cozy_bio">Cozy age 36</p>'
                    alert("COZY");
                } else if (e.target === found_button) {
                    main_space_div.innerHTML = '<p id="found_bio">Found age 31</p>'
                    alert("FOUND");
                } else if (e.target === viper_button) {
                    main_space_div.innerHTML = '<p id="viper_bio">Viper age 28</p>'
                    alert("VIPER");
                }
            });
            */

        document.querySelector("#cozy_name").addEventListener("click", () => {
            main_space_div.innerHTML = '<p id="cozy_bio"><img src="Cozy_Photo.png" style="width: 100px; height: auto;">Cozy age 36</p>'
        });
        document.querySelector("#found_name").addEventListener("click", () => {
            main_space_div.innerHTML = '<p id="found_bio"><img src="Found_Photo.png" style="width: 100px; height: auto;">Found age 31</p>'
        });
        document.querySelector("#viper_name").addEventListener("click", () => {
            main_space_div.innerHTML = '<p id="viper_name"><img src="Viper_Photo.png" style="width: 100px; height: auto;">Viper age 28</p>'            
        })


    } else if (e.target == achievements_button) {
        //main_space.textContent = achievements_list.textContent;
        main_space_div.innerHTML = '<div id="achievements"><p id="achievements list"><div id="taco_amigo"><p>TACO AMIGO</p><p>A charming hour long show for the excited guests of "Taco Amigo" in Itaewon, South Korea! Guests were blown away by the members of ForeigNoise&apos;s performances and were even invited to learn some of their own Breaking moves where they would battle it out for a special prize!</p></div><div id="china_un"><p>CHINA UN</p><p>An uplifting performance celebrating the contestants who worked hard to compete at the China UN&apos;s Korean language competition. Being no strange to professionalism, ForeigNoise brought the nervous crowd to a stand with their energetic moves and routines!</p></div><div id="holi_hai"><p>HOLI HAI</p><p>A captivating and highly dynamic performance that captured the spirit of "Holi"! ForeigNoise was invited to Chuncheon, South Korea where they would celebrate the Hindu festival of spring, or "festival of colors", and light up the crowd!</p></div></div>'

    } else if (e.target == media_button) {
        //main_space.textContent = "VIDEO";

        main_space_div.innerHTML = '<p id="media_list">TACO AMIGO BREAKING NIGHT:<img src="ForeigNoise Crew Photo.jpg" id="crew_photo" height = 70% width = 70% alt="group photo of ForeigNoise members">FOREIGNOISE HIGHLIGHT REEL:<br></br></p><video id="crew_video" src="ForeigNoise Teaser Test_01.m4v" controls height = 40% width = 40%> </p>'

    };
});


           


document.querySelector("#crew_photo").addEventListener("click", () => {

    main_space_div.innerHTML = '<p id="crew_bio">This is the crew bio.</p>'

});


document.querySelector("#done_button").addEventListener("click", () => {

    main_space_div.innerHTML = ''

});


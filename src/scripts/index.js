// Any code you will write for your website (in the future!) should go here

let data = [{
        title: "Nick Cave and the Bad Seeds",
        thumb: "../images/1.png",
        videoUrl: "../images/videos/1.mp4"
    },
    {
        title: "Radiohead",
        thumb: "../images/2.png",
        videoUrl: "../images/videos/2.mp4"
    },
    {
        title: "Fleet Foxes",
        thumb: "../images/3.png",
        videoUrl: "../images/videos/3.mp4"
    },
    {
        title: "The National",
        thumb: "../images/4.png",
        videoUrl: "../images/videos/4.mp4"
    }
];

generateVideoThumbs = data => {
    data.forEach(el => {
        let parent = document.createElement('div');
        parent.classList.add('video-thumb');

        let title = document.createElement('p');
        title.innerHTML = el.title;

        let imgCont = document.createElement('div');
        imgCont.classList.add('img-cont')

        let img = document.createElement('img');
        img.src = el.thumb;

        imgCont.appendChild(img);
        parent.appendChild(imgCont);
        parent.appendChild(title);

        let vidCont = document.querySelector(".cont");
        vidCont.appendChild(parent);
    });
}

generateVideoThumbs(data)


// showPlayer = e => {
//     let pl = document.querySelector(".player");
//     pl.classList.add("active");
// }

// hidePlayer = e => {
//     let pl = document.querySelector(".player");
//     pl.classList.remove("active");
// }
// close.addEventListener("click", hidePlayer);

// Instead of having two functions we can use toggle
togglePlayer = e => {
    let pl = document.querySelector(".player");
    pl.classList.toggle("active");
}

let close = document.querySelector(".close");

close.addEventListener("click", togglePlayer);
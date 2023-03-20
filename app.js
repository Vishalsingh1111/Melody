const music = new Audio('audio/20.mp3');
// music.play();


const songs = [
    {
        id: "1",
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpg",
    },
    {
        id: "2",
        songName: `Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/2.jpg",
    },
    {
        id: "3",
        songName: `Cartoon - On & On<br>
        <div class="subtitle">Daniel Levi</div>`,
        poster: "images/3.jpg",
    },
    {
        id: "4",
        songName: `Warriyo - Mortals <br>
        <div class="subtitle">Mortals </div>`,
        poster: "images/4.jpg",
    },
    {
        id: "5",
        songName: `Ertugrul Gazi <br>
        <div class="subtitle">Ertugrul</div>`,
        poster: "images/5.jpg",
    },
    {
        id: "6",
        songName: `Electronic Music <br>
        <div class="subtitle">Electro</div>`,
        poster: "images/6.jpg",
    },
    {
        id: "7",
        songName: `Agar Tum sath Ho<br>
        <div class="subtitle">tamashaa </div>`,
        poster: "images/7.jpg",
    },
    {
        id: "8",
        songName: `Suna Hai <br>
        <div class="subtitle">Neha Kakker</div>`,
        poster: "images/8.jpg",
    },
    {
        id: "9",
        songName: `Dilbar<br>
        <div class="subtitle">Satyameva Jayate</div>`,
        poster: "images/9.jpg",
    },
    {
        id: "10",
        songName: `Duniya<br>
        <div class="subtitle">Luka Chuppi</div>`,
        poster: "images/10.jpg",
    },
    {
        id: "11",
        songName: `Lagdi lahore Di <br>
        <div class="subtitle">Street Dancer 3</div>`,
        poster: "images/11.jpg",
    },
    {
        id: "12",
        songName: `Putt Jatt Da <br>
        <div class="subtitle">Putt Jatt Da</div>`,
        poster: "images/12.jpg",
    },
    {
        id: "13",
        songName: `Baarishein<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "images/13.jpg",
    },
    {
        id: "14",
        songName: `Vaaste<br>
        <div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "images/14.jpg",
    },
    {
        id: "15",
        songName: `Lut Gaye<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/15.jpg",
    },
    {
        id: "16",
        songName: `Tu Meri Jindagi hai Tu <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/16.jpg",
    },
    {
        id: "17",
        songName: `Batao yaad Hai Tumko Wo Jab Dil Ko Churaya Tha<br>
        <div class="subtitle">Batao yaad Hai Tumko</div>`,
        poster: "images/17.jpg",
    },
    {
        id: "18",
        songName: `Mere Dhol judaiyan <br>
        <div class="subtitle">Ali Sethi</div>`,
        poster: "images/18.jpg",
    },
    {
        id: "19",
        songName: `Eh Munda Pagal Ne Saare<br>
        <div class="subtitle">Ap Dhillo</div>`,
        poster: "images/19.jpg",
    },
    {
        id: "20",
        songName: `Duniya 82k <br>
        <div class="subtitle">Ap Dhillo , Gurinder</div>`,
        poster: "images/20.jpg",
    },
    {
        id: "21",
        songName:`Jhoome Jo Pathaan <br>
        <div class="subtitle">Arijit Singh Sukriti Kakar Vishal Dadlani Shekhar Ravjiani</div>`,
        poster: "images/arijit_img/1.jpeg",
    },
    {
        id: "22",
        songName:`Kesariya <br>
        <div class="subtitle">Pritam Arijit Singh Amitabh</div>`,
        poster: "images/arijit_img/2.jpeg",
    },
    {
        id: "23",
        songName:`Deva Deva<br>
        <div class="subtitle"> Arijit Singh </div>`,
        poster: "images/arijit_img/3.jpeg",
    },
    {
        id: "24",
        songName:`Fitoor<br>
        <div class="subtitle">Arijit Singh Neeti Mohan</div>`,
        poster: "images/arijit_img/4.jpeg",
    },
    {
        id: "25",
        songName:`Lehra Do<br>
        <div class="subtitle">Pritam Arijit Singh.</div>`,
        poster: "images/arijit_img/5.jpeg",
    },
    {
        id: "26",
        songName:`Tumse Bhi Zyada <br>
        <div class="subtitle">Tadap</div>`,
        poster: "images/arijit_img/6.jpeg",
    },
    {
        id: "27",
        songName:`Desh Mere <br>
        <div class="subtitle"> Bhuj The Pride Of India</div>`,
        poster: "images/arijit_img/7.jpeg",
    },
    {
        id: "28",
        songName:`Ho Ke Rahenge<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "images/arijit_img/8.jpeg",
    },
    {
        id:"29",
        songName:`Rahogi Meri <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "images/arijit_img/9.jpeg",
    },
    {
        id: "30",
        songName:`Ghungroo <br>
        <div class="subtitle">War</div>`,
        poster: "images/arijit_img/10.jpeg",
    },
    {
        id: "31",
        songName:`Thodi Jagah <br>
        <div class="subtitle">Marjaavaan </div>`,
        poster: "images/arijit_img/11.jpeg",
    },
    {
        id: "32",
        songName:`Pal Pal Dil Ke Paas <br>
        <div class="subtitle">Arijit Singh </div>`,
        poster: "images/arijit_img/12.jpeg",
    },
    {
        id: "33",
        songName:`Bekhayali <br>
        <div class="subtitle">Kabir Singh </div>`,
        poster: "images/arijit_img/13.jpeg",
    },
    {
        id: "34",
        songName:`Tujhe Kitna Chahne Lage <br>
        <div class="subtitle">Kabir Singh</div>`,
        poster: "images/arijit_img/14.jpeg",
    },
    {
        id: "35",
        songName:`Tera Fitoor<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "images/arijit_img/15.jpeg",
    },
    {
        id: "36",
        songName:`Dua Karo  <br>
        <div class="subtitle">Street Dancer 3D</div>`,
        poster: "images/arijit_img/16.jpeg",
    },
    {
        id: "37",
        songName:`Chal Ghar Chalen  <br>
        <div class="subtitle">Malang</div>`,
        poster: "images/arijit_img/17.jpeg",
    },
    {
        id: "38",
        songName: `2 Ladke<br>
        <div class="subtitle">Neha kakkar</div>`,
        poster: "images/neha_img/1.jpeg",
    },
    {
        id: "39",
        songName: `O Sajna<br>
        <div class="subtitle">Neha kakkar</div>`,
        poster: "images/neha_img/2.jpeg",
    },
    {
        id: "40",
        songName: `Baarish Mein Tum<br>
        <div class="subtitle">Neha Kakkar,Rohanpreet Singh </div>`,
        poster: "images/neha_img/3.jpeg",
    },
    {
        id: "41",
        songName: `La La La <br>
        <div class="subtitle">Neha kakkar </div>`,
        poster: "images/neha_img/4.jpeg",
    },
    {
        id: "42",
        songName: `Tattoo Waaliye  <br>
        <div class="subtitle">Bunty Aur Babli 2</div>`,
        poster: "images/neha_img/5.jpeg",
    },
    {
        id: "43",
        songName: `Kanta Laga<br>
        <div class="subtitle">Yo Yo Honey Singh,Neha Kakkar </div>`,
        poster: "images/neha_img/6.jpeg",
    },
    {
        id: "44",
        songName: `2 Phone <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "images/neha_img/7.jpeg",
    },
    {
        id: "45",
        songName: `Dil Ko Karaar Aaya<br>
        <div class="subtitle">Neha Kakker</div>`,
        poster: "images/neha_img/8.jpeg",
    },
    {
        id: "46",
        songName: `Phone Mein Teri Photo <br>
        <div class="subtitle">Tuesdays And Fridays </div>`,
        poster: "images/neha_img/9.jpeg",
    },
    {
        id: "47",
        songName: `Khyaal Rakhya Kar <br>
        <div class="subtitle">Neha Kakker</div>`,
        poster: "images/neha_img/10.jpeg",
    },
    {
        id: "48",
        songName: `Taaron Ke Shehar <br>
        <div class="subtitle">Neha Kakkar,Jubin Nautiyal </div>`,
        poster: "images/neha_img/11.jpeg",
    },
    {
        id: "49",
        songName: `Bheegi Bheegi <br>
        <div class="subtitle">Neha Kakkar </div>`,
        poster: "images/neha_img/12.jpeg",
    },
    {
        id: "50",
        songName: `Goa Beach <br>
        <div class="subtitle">Neha Kakkar Tony Kakkar </div>`,
        poster: "images/neha_img/13.jpeg",
    },
    {
        id: "51",
        songName: `Lamborghini<br>
        <div class="subtitle">Jai Mummy Di</div>`,
        poster: "images/neha_img/14.jpeg",
    },
    {
        id: "52",
        songName: `Yaad piya ki aane lagi<br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "images/neha_img/15.jpeg",
    },
    {
        id: "53",
        songName: `Ek Toh Kum Zindagani <br>
        <div class="subtitle">Marjaavaan</div>`,
        poster: "images/neha_img/16.jpeg",
    },
    {
        id: "54",
        songName: `	Dheeme Dheeme <br>
        <div class="subtitle">Pati Patni Aur Woh</div>`,
        poster: "images/neha_img/17.jpeg",
    },
    {
        id: "55",
        songName:`Hanjugam<br>
        <div class="subtitle">From Bhuj the Pride of India</div>`,
        poster: "images/jubin_img/1.jpeg",
    },
    {
        id: "56",
        songName:`Barsaat Ki Dhun <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/2.jpeg",
    },
    {
        id: "57",
        songName:`Bedardi Se Pyaar Ka<br>
        <div class="subtitle"> Jubin Nautiyal</div>`,
        poster: "images/jubin_img/3.jpeg",
    },
    {
        id: "58",
        songName:`Wafa Na Raas Aayee<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/4.jpeg",
    },
    {
        id: "59",
        songName:`Tujhe Bhoolna Toh Chaaha <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/5.jpeg",
    },
    {
        id: "60",
        songName:`Baarish<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/6.jpeg",
    },
    {
        id: "61",
        songName:`Lut Gaye<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/7.jpeg",
    },
    {
        id: "62",
        songName:`Dil Jisse Zinda Hain <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/8.jpeg",
    },
    {
        id:"63",
        songName:`Manike Yohani<br>
        <div class="subtitle">Jubin Nautiyal Yohani</div>`,
        poster: "images/jubin_img/9.jpeg",
    },
    {
        id: "64",
        songName:`Barsaat Ho Jaaye<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/10.jpeg",
    },
    {
        id: "65",
        songName:`Teri Galliyon Se<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/11.jpeg",
    },
    {
        id: "66",
        songName:`Mast Nazron Se <br>
        <div class="subtitle">Jubin Nautiyal </div>`,
        poster: "images/jubin_img/12.jpeg",
    },
    {
        id: "67",
        songName:`Dil Galti Kar Baitha Hai <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/13.jpeg",
    },
    {
        id: "68",
        songName:`Khushi Jab Bhi Teri<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/14.jpeg",
    },
    {
        id: "69",
        songName:`Raataan Lambiyan  <br>
        <div class="subtitle">Shershaah</div>`,
        poster: "images/jubin_img/15.jpeg",
    },
    {
        id: "70",
        songName:`Dil Lauta Do<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/16.jpeg",
    },
    {
        id: "71",
        songName:`Bewafa Tera Muskurana <br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "images/jubin_img/17.jpeg",
    },
    {
        id: "72",
        songName: `Ban Ja Rani<br>
        <div class="subtitle">Tumhari Sulu</div>`,
        poster: "images/guru_img/1.jpeg",
    },
    {
        id: "73",
        songName: `Dance Meri Rani <br>
        <div class="subtitle">Guru Randhawa, Zahrah S Khan</div>`,
        poster: "images/guru_img/2.jpeg",
    },
    {
        id: "74",
        songName: `Doob Gaye<br>
        <div class="subtitle">Guru Randhawa,B Praak</div>`,
        poster: "images/guru_img/3.jpeg",
    },
    {
        id: "75",
        songName: `High Rated Gabru<br>
        <div class="subtitle">Nawabzaade</div>`,
        poster: "images/guru_img/4.jpeg",
    },
    {
        id: "76",
        songName: `Ishare Tere<br>
        <div class="subtitle">Guru Randhawa, Dhvani Bhanushali</div>`,
        poster: "images/guru_img/5.jpeg",
    },
    {
        id: "77",
        songName: `Daaru Wargi <br>
        <div class="subtitle">Why Cheat India</div>`,
        poster: "images/guru_img/6.jpeg",
    },
    {
        id: "78",
        songName: `Baby Girl<br>
        <div class="subtitle">Guru Randhawa, Dhvani Bhanushali</div>`,
        poster: "images/guru_img/7.jpeg",
    },
    {
        id: "79",
        songName: `Lagdi Lahore Di<br>
        <div class="subtitle">Street Dancer 3</div>`,
        poster: "images/guru_img/8.jpeg",
    },
    {
        id: "80",
        songName: `Made In India<br>
        <div class="subtitle">GuruRandhwa</div>`,
        poster: "images/guru_img/9.jpeg",
    },
    {
        id: "81",
        songName: `Naach Meri Rani <br>
        <div class="subtitle">Guru Randhawa, Tanishk Bagchi, Nikhita Gandhi</div>`,
        poster: "images/guru_img/10.jpeg",
    },
    {
        id: "82",
        songName: `Patola <br>
        <div class="subtitle">Guru Randhawa</div>`,
        poster: "images/guru_img/11.jpeg",
    },
    {
        id: "83",
        songName: `Suit<br>
        <div class="subtitle">Guru Randhawa, Arjun</div>`,
        poster: "images/guru_img/12.jpeg",
    },
    {
        id: "84",
        songName: `Tera Ki Khayal<br>
        <div class="subtitle">Man Of The Moon</div>`,
        poster: "images/guru_img/13.jpeg",
    },
    {
        id: "85",
        songName: `Tera Saath Ho<br>
        <div class="subtitle">Tanishk Bagchi, Guru Randhawa, Zahrah S Khan</div>`,
        poster: "images/guru_img/14.jpeg",
    },
    {
        id: "86",
        songName: `Yaar Mod Do<br>
        <div class="subtitle">Guru Randhawa, Millind Gaba</div>`,
        poster: "images/guru_img/15.jpeg",
    },
    {
        id: "87",
        songName: `Maan Meri Jaan<br>
        <div class="subtitle">King</div>`,
        poster: "images/king_img/1.jpeg",
    },
    {
        id: "88",
        songName: `Tu Aake Dekhle <br>
        <div class="subtitle">The Carnival</div>`,
        poster: "images/king_img/2.jpeg",
    },
    {
        id: "89",
        songName: `Oops<br>
        <div class="subtitle">King, Zahrah S Khan</div>`,
        poster: "images/king_img/3.jpeg",
    },
    {
        id: "90",
        songName: `Na Ja Tu<br>
        <div class="subtitle">King</div>`,
        poster: "images/king_img/4.jpeg",
    },
    {
        id: "91",
        songName: `Ektarfa<br>
        <div class="subtitle">King</div>`,
        poster: "images/king_img/5.jpeg",
    },
    {
        id: "92",
        songName: `Doob Ja<br>
        <div class="subtitle">Salim-Sulaiman, Sunidhi Chauhan, King</div>`,
        poster: "images/king_img/6.jpeg",
    },
    {
        id: "93",
        songName: `Shaamein<br>
        <div class="subtitle">King</div>`,
        poster: "images/king_img/7.jpeg",
    },
    {
        id: "94",
        songName: `Dracula<br>
        <div class="subtitle">King</div>`,
        poster: "images/king_img/8.jpeg",
    },
    {
        id: "95",
        songName: `Casanova<br>
        <div class="subtitle">King</div>`,
        poster: "images/king_img/9.jpeg",
    },
    {
        id: "96",
        songName: `Me Me <br>
        <div class="subtitle">Champagne Talk-King</div>`,
        poster: "images/king_img/10.jpeg",
    },
    {
        id: "97",
        songName: `She Don't Give A<br>
        <div class="subtitle">Carnival</div>`,
        poster: "images/king_img/11.jpeg",
    },
    {
        id: "98",
        songName: `Baazi<br>
        <div class="subtitle">King</div>`,
        poster: "images/king_img/12.jpeg",
    },
    {
        id: "99",
        songName: `Father Saab<br>
        <div class="subtitle">Amit Bhadana , King </div>`,
        poster: "images/king_img/13.jpeg",
    },
    {
        id: "100",
        songName: `Dhoondein Sitaare<br>
        <div class="subtitle">Aastha Gill, King</div>`,
        poster: "images/king_img/14.jpeg",
    },
    {
        id: "101",
        songName: `Thoda Samjha Karo <br>
        <div class="subtitle">Carnival</div>`,
        poster: "images/king_img/15.jpeg",
    }
]

// Editing name and thumbnail of Music

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


//Search bar settings

let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const { id, songName, poster } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt=" ">
    <div class="content">
     ${songName}
    </div>
    `;

    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;
    
        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }
        if (input.value == 0) {
            search_results.style.display = "none";

        } else {
            search_results.style.display = " ";
        }
    }
})

// masterPlay button setting


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

// menu item background change and play button

const makeAllplays = () => {
    Array.from(document.getElementsByClassName(`playListPlay`)).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName(`songItem`)).forEach((el) => {
        el.style.background = 'rgba(48, 243, 243, .0)';
    })
}


// access song 


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `images/${index}.jpg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.mp3`;

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });
        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName(`songItem`))[index - 1].style.background = "#dd9116";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
    });
});

// controlling time bar

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

// volume scrollbar

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 70) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;

    music.volume = vol_a / 100;
});


// Left and right button


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName(`songItem`))[index - 1].style.background = "#dd9116";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

});

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName(`songItem`))[index - 1].style.background = "#dd9116";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

});






// Scrolling card left or right 

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});


let pop_song_left1 = document.getElementById('pop_song_left1');
let pop_song_right1 = document.getElementById('pop_song_right1');
pop_song1 = document.getElementsByClassName('pop_song1')[0];

pop_song_right1.addEventListener('click', () => {
    pop_song1.scrollLeft += 330;
});
pop_song_left1.addEventListener('click', () => {
    pop_song1.scrollLeft -= 330;
});



let pop_song_left2 = document.getElementById('pop_song_left2');
let pop_song_right2 = document.getElementById('pop_song_right2');
pop_song2 = document.getElementsByClassName('pop_song2')[0];

pop_song_right2.addEventListener('click', () => {
    pop_song2.scrollLeft += 330;
});
pop_song_left2.addEventListener('click', () => {
    pop_song2.scrollLeft -= 330;
});




let pop_song_left3 = document.getElementById('pop_song_left3');
let pop_song_right3 = document.getElementById('pop_song_right3');
pop_song3 = document.getElementsByClassName('pop_song3')[0];

pop_song_right3.addEventListener('click', () => {
    pop_song3.scrollLeft += 330;
});
pop_song_left3.addEventListener('click', () => {
    pop_song3.scrollLeft -= 330;
});

// shuffle


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = `repeat`;
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = `random`;
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = `next`;
            break;
    }
});





//    next music shiffle

const next_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName(`songItem`))[index - 1].style.background = "#dd9116";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
}

// repeate music shuffle

const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName(`songItem`))[index - 1].style.background = "#dd9116";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
}

//    random shuffle

const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });
    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName(`songItem`))[index - 1].style.background = "#dd9116";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
}

// music auto strt  considered next repeat and random shuffle button

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
});



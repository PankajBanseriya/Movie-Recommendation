const dropdown = document.getElementById("genres");
const searchbtn = document.getElementById("playBtn");
const movieInfo = document.querySelectorAll(".movieInfo");
const moviePoster = document.getElementById("moviePoster");
const movieText = document.getElementById("movieText");
const nextbtn = document.getElementById("likeOrDislikeBtns");

const moviePoster2 = document.getElementById("moviePoster2");
const movieText2 = document.getElementById("movieText2");

const moviePoster3 = document.getElementById("moviePoster3");
const movieText3 = document.getElementById("movieText3");

const moviePoster4 = document.getElementById("moviePoster4");
const movieText4 = document.getElementById("movieText4");

const moviePoster5 = document.getElementById("moviePoster5");
const movieText5 = document.getElementById("movieText5");

const moviePoster6 = document.getElementById("moviePoster6");
const movieText6 = document.getElementById("movieText6");

const moviePoster7 = document.getElementById("moviePoster7");
const movieText7 = document.getElementById("movieText7");

const moviePoster8 = document.getElementById("moviePoster8");
const movieText8 = document.getElementById("movieText8");

const moviePoster9 = document.getElementById("moviePoster9");
const movieText9 = document.getElementById("movieText9");


const request = new XMLHttpRequest();
request.open('GET', `https://api.themoviedb.org/3/genre/movie/list?api_key=bd34d0105dfc97e9d868378515a3d105`);
request.send();

request.addEventListener("load", () => {
    const data = JSON.parse(request.responseText);
    // console.log(data);
    data.genres.forEach((genres) => {
        const options = document.createElement("option")
        options.text = genres.name;
        options.value = genres.id;
        dropdown.add(options);
    });

});

searchbtn.addEventListener("click", () => {
    loadData();
    nextbtn.style.display = "flex";
    searchbtn.disabled = true;
})
dropdown.addEventListener("change", () => { 
    searchbtn.disabled = false;
 })

let randomIndex = 0;
function loadData() {
    
    movieInfo.forEach(element => {
        element.style.display = "flex";
    });

    const selectGenreId = dropdown.value;
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=bd34d0105dfc97e9d868378515a3d105&with_genres=${selectGenreId}`);
    request2.send();
    request2.addEventListener("load", () => {
        const MoviePage = JSON.parse(request2.responseText);
        // console.log(MoviePage);

        let Movies = MoviePage.results;
        // console.log(Movies);


        showdata();
        function showdata() {
            for (let i = 0; i < 9; i++) {
                if (randomIndex == Movies.length) {
                    randomIndex = 0;
                }

                let randomMovie = Movies[randomIndex];
                let movieTitle = randomMovie.original_title;
                let movieImage = randomMovie.poster_path;
                let movieOverview = randomMovie.overview;
                switch (i) {
                    case 0:
                        displayData1(movieTitle, movieImage, movieOverview);
                        break;
                    case 1:
                        displayData2(movieTitle, movieImage, movieOverview);
                        break;
                    case 2:
                        displayData3(movieTitle, movieImage, movieOverview);
                        break;
                    case 3:
                        displayData4(movieTitle, movieImage, movieOverview);
                        break;
                    case 4:
                        displayData5(movieTitle, movieImage, movieOverview);
                        break;
                    case 5:
                        displayData6(movieTitle, movieImage, movieOverview);
                        break;
                    case 6:
                        displayData7(movieTitle, movieImage, movieOverview);
                        break;
                    case 7:
                        displayData8(movieTitle, movieImage, movieOverview);
                        break;
                    case 8:
                        displayData9(movieTitle, movieImage, movieOverview);
                        break;

                    default:
                        break;
                }
                randomIndex++;
            }

        }
    });
}

function displayData1(movieTitle, movieImage, movieOverview) {
    movieText.innerHTML = `<h2>${movieTitle}</h2>
        <p>${movieOverview}</p>`
    moviePoster.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movieImage}" alt="">`
}

function displayData2(movieTitle, movieImage, movieOverview) {
    movieText2.innerHTML = `<h2>${movieTitle}</h2>
        <p>${movieOverview}</p>`
    moviePoster2.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movieImage}" alt="">`
}

function displayData3(movieTitle, movieImage, movieOverview) {
    movieText3.innerHTML = `<h2>${movieTitle}</h2>
        <p>${movieOverview}</p>`
    moviePoster3.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movieImage}" alt="">`
}

function displayData4(movieTitle, movieImage, movieOverview) {
    movieText4.innerHTML = `<h2>${movieTitle}</h2>
        <p>${movieOverview}</p>`
    moviePoster4.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movieImage}" alt="">`
}

function displayData5(movieTitle, movieImage, movieOverview) {
    movieText5.innerHTML = `<h2>${movieTitle}</h2>
        <p>${movieOverview}</p>`
    moviePoster5.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movieImage}" alt="">`
}

function displayData6(movieTitle, movieImage, movieOverview) {
    movieText6.innerHTML = `<h2>${movieTitle}</h2>
        <p>${movieOverview}</p>`
    moviePoster6.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movieImage}" alt="">`
}

function displayData7(movieTitle, movieImage, movieOverview) {
    movieText7.innerHTML = `<h2>${movieTitle}</h2>
        <p>${movieOverview}</p>`
    moviePoster7.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movieImage}" alt="">`
}

function displayData8(movieTitle, movieImage, movieOverview) {
    movieText8.innerHTML = `<h2>${movieTitle}</h2>
        <p>${movieOverview}</p>`
    moviePoster8.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movieImage}" alt="">`
}

function displayData9(movieTitle, movieImage, movieOverview) {
    movieText9.innerHTML = `<h2>${movieTitle}</h2>
        <p>${movieOverview}</p>`
    moviePoster9.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movieImage}" alt="">`
}
nextbtn.addEventListener("click", loadData)

searchbtn.addEventListener("mouseover", () => {
    searchbtn.classList.add('animate__animated', 'animate__tada');
})
searchbtn.addEventListener("mouseleave", () => {
    searchbtn.classList.remove('animate__animated', 'animate__tada');
})

nextbtn.addEventListener("mouseover", () => {
    nextbtn.classList.add('animate__animated', 'animate__tada');
})
nextbtn.addEventListener("mouseleave", () => {
    nextbtn.classList.remove('animate__animated', 'animate__tada');
})
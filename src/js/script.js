
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function main() {
    let numberOfFIlms = +prompt("сколько фильмов вы уже посмотрели?");
    while (numberOfFIlms == '' || numberOfFIlms == null || isNaN(numberOfFIlms)) {
        numberOfFIlms = +prompt("сколько фильмов вы уже посмотрели?");
    }
    personalMovieDB.count = numberOfFIlms;
    // addMovies(2);
    // detectPersonalLevel();
    writeYourGenres(3);
    showMyDb();

}
main(); 

function addMovies(movieCount) {
    for (let i = 0; i < movieCount; i++) {
        let movie = prompt("один из последних просмотренных фильмов?");
        if (movie.length < 5) continue;
        let grade = +prompt("на сколько оцените его?");
        personalMovieDB["movies"][movie] = grade;
    }
    
}

function detectPersonalLevel() {
    let movieCount = personalMovieDB.count;
    if (movieCount < 10) {
        console.log("просмотрено мало фильмов");
    } 
    else if (movieCount < 30) {
        console.log("вы классический зритель");
    } 
    else if (movieCount >= 30) {
        console.log("вы киноман");
    }
    else {
        console.log("пройзошла ошибка");
    }
}

function showMyDb() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB)
    }
}

function writeYourGenres(genresCount) {
    let genre;
    for (let i = 0; i < genresCount; i++) {
        genre = prompt(`ваш любимый жанр под номером ${i + 1}`);
        personalMovieDB.genres[i] = genre;
    }
}
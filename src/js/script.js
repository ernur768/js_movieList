
const numberOfFIlms = +prompt("сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFIlms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let movie = prompt("один из последних просмотренных фильмов?");
    let grade = +prompt("на сколько оцените его?");
    personalMovieDB["movies"][movie] = grade;
}

console.log(personalMovieDB);
"use strict"


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    setCount: function() {
        this.count = +prompt("сколько фильмов вы уже посмотрели?").trim();
        while (numberOfFIlms == '' || numberOfFIlms == null || isNaN(numberOfFIlms)) {
            this.count = +prompt("сколько фильмов вы уже посмотрели?");
        }
    },
    addMovies: function (movieCount) {
        for (let i = 0; i < movieCount; i++) {
            let movie = prompt("один из последних просмотренных фильмов?").trim();
            if (movie.length < 5) continue;
            let grade = +prompt("на сколько оцените его?");
            // personalMovieDB["movies"][movie] = grade;
            this.movies[movie] = grade;
        }
    },
    addGenres: function (genresCount) {
        let genre;
        for (let i = 0; i < genresCount; i++) {
            genre = prompt(`ваш любимый жанр под номером ${i + 1}`);
            if (genre == null || genre == '') {
                i--;
                continue;
            }
            this.genres[i] = genre;
        }

        this.genres.forEach((item, i) => {
            console.log(`любимый жанр #${i + 1} - это ${item}`);
        })
    },
    detectPersonalLevel: function () {
        // let movieCount = personalMovieDB.count;
        if (this.count < 10) {
            console.log("просмотрено мало фильмов");
        } 
        else if (this.count < 30) {
            console.log("вы классический зритель");
        } 
        else if (this.count >= 30) {
            console.log("вы киноман");
        }
        else {
            console.log("пройзошла ошибка");
        }
    },
    toggleVisibleMyDb: function() {
        this.private = !this.private;
    },
    showMyDb: function() {
        if (!this.private) {
            console.log(this);
        }
    }
};

function main() {
    personalMovieDB.addGenres(2);
}
main(); 

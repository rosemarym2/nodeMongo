const connection = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie, findMovie, filterMovie, indexMovie } = require("./utils");
const { ObjectId } = require ("bson");

const command = process.argv[2];

const app = async () =>{
    if (command === "add"){
        const newMovie = {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5],
            year: process.argv[6]
        };
        await connection(addMovie, newMovie);
    } else if (command === "list")  {
        await connection(listMovies);
    } else if (command === "update")  {
        const newUpdate = {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5],
            year: process.argv[6]
        };
        await connection(updateMovie, newUpdate);
    } else if (command === "delete")  {
        const newDelete = {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5],
            year: process.argv[6]
        };
        await connection(deleteMovie, newDelete);
    } else if (command === "find")  {
        const foundMovies = {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5],
            year: process.argv[6]
        };
        await connection(findMovie, foundMovies);
    } else if (command === "filter")  {
        const filteredMovies = {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5],
            year: process.argv[6]
        };
        await connection(filterMovie, filteredMovies);
    } else if (command === "index")  {
        const indexInfo = {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5],
            year: process.argv[6]
        };
        await connection(indexMovie, indexInfo);
    } else {
        console.log("Incorrect Input")
    }
};

app();
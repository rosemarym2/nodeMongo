
exports.addMovie = async (collection, dataObj) => {
    try{
        await collection.insertOne(dataObj)
    } catch (error){
        console.log(error)
    }
};

exports.listMovies = async (collection) =>{
    try {
        const listAll = await collection.find().toArray();
        console.log(listAll)
    } catch (error){
        console.log(error);
    }
};

exports.deleteMovie = async (collection, deleteObj)=> {
    try{
        const deleteMovie = await collection.deleteMany({title: "Spiderman" })
        console.log("Document Deleted", deleteMovie);
    } catch (error){
        console.log(error)
    }
};

exports.updateMovie = async (collection, updateObj)=> {
    try{
        const updateMovie = await collection.updateOne({title: "Spiderman" }, {$set: { actor: "Emma Stone", rating: "8/10" } })
        console.log("Document Updated Successfully", updateMovie);
    } catch (error){
        console.log(error)
    }
};

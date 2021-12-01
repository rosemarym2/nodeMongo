
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
        await collection.deleteMany(deleteObj)
        console.log("Document Deleted", deleteMovie);
    } catch (error){
        console.log(error)
    }
};

exports.updateMovie = async (collection, updateObj)=> {
    try{
        await collection.updateOne( {title: "Spiderman" }, {$set: { actor: "", rating: "" } })
        console.log("Document Updated Successfully", updateMovie);
    } catch (error){
        console.log(error)
    }
};

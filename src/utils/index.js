
exports.addMovie = async (collection, dataObj) => {
    try{
        const addMovie =await collection.insertOne(dataObj)
        console.log("Movie Successfully Added", addMovie);
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
        const deleteMovie = await collection.deleteMany(deleteObj)
        console.log("Document Deleted", deleteMovie);
    } catch (error){
        console.log(error)
    }
};

exports.updateMovie = async (collection, dataObj)=> {
    try{
        const updateMovie = await collection.updateOne({title: dataObj.title}, {$set: dataObj})
        console.log("Document Updated Successfully", updateMovie);
    } catch (error){
        console.log(error)
    }
};

exports.findMovie = async (collection, dataObj)=> {
    try{
        const findMovie = await collection.find({title: dataObj.title}).toArray();
        console.log("Found documents =>", findMovie);
    } catch (error){
        console.log(error)
    }
};

exports.filterMovie = async (collection)=> {
    try{
        const filteredDocs = await collection.find({rating: {$gt: "4/10"}}).toArray();
        console.log('Found documents filtered by rating above 4/10 =>', filteredDocs);
    } catch (error){
        console.log(error)
    }
};

exports.indexMovie = async (collection, dataObj)=> {
    try{
        const indexName = await collection.createIndex({"title": 1});
        console.log('index name =', indexName);
    } catch (error){
        console.log(error)
    }
};
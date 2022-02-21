const mongoose= require('mongoose');

main().catch(error=>console.log(error));

async function main(){
    await mongoose.connect('mongodb+srv://fantanodeadmin:uebkNF9YhQaEcCeD@cluster0.wreow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}


module.exports=mongoose;
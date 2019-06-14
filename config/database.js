if(process.env.NODE_ENV === 'production'){
   module.exports = {mongoURI: 'mongodb+srv://Vidjot:plhbse44@cluster0-at68o.mongodb.net/test'}
}else{
   module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
if(process.env.NODE_ENV === 'production'){
   module.exports = {mongoURI: 'mongodb://Vidjot:plhbse44@cluster0-at68o.mongodb.net/test?retryWrites=true&w=majority'}
}else{
   module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
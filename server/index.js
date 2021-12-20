// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//     res.send('<h1>Hello world</h1>');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });





const express = require('express')
const app = express()
const cors = require('cors');
const mongoose  = require('mongoose')
const io = require("socket.io")(5000, {
  });
  
bodyParser = require('body-parser');

app.set('view engine', 'ejs');

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

//middleware
//dotenv.config();

mongoose.connect('mongodb+srv://siva:siva@cluster0.8mvie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false},() => {
    console.log('conected to dp')
    });
    
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongoo")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

//require('./models/user')
//require('./models/post')

app.use(express.json())
app.use(require('./port/port'))
// app.use('./uploads',express.static('uploads'))
// app.use(require('./routes/post'))
// app.use(require('./routes/user'))



// if(process.env.NODE_ENV=="production"){
//     app.use(express.static('client/build'))
//     const path = require('path')
//     app.get("*",(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
//}

io.on("connection",socket=>{
    console.log('connected socket :')
});

app.listen(5001,(req,res)=>{
  console.log('Server up and running')

});


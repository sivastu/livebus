const express = require('express')
const router = express.Router()
const serve = express()
const bodyParser = require('body-parser');



router.get('/',(req,res)=>{
	res.status(200).json({ message: "here is your public resource" });
	
})

router.get('/port',(req,res)=>{
	// const corsOptions ={
	//    origin:'*', 
	//    credentials:true,            //access-control-allow-credentials:true
	//    optionSuccessStatus:200,
	// }
	console.log('connected')
	res.status(200).json({ message: "here is your public resource" });
	// app.use(cors(corsOptions))

	const apps =serve.listen(3006,()=>{
		console.log('Server up and running 3006')
	})
	serve.get('/one',(req,res)=>{
	res.status(200).json({ message: "here is nedkjnenefyour public resource" });
	
	})


	serve.get('/',(req,res)=>{
	res.status(200).json({ message: "public resource" });

	})
})


module.exports = router


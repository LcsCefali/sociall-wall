
import express from 'express';
import axios from 'axios';
const router = express.Router();
const app = require('express')();
var Facebook = require('facebook-node-sdk');

var facebook = new Facebook({ appID: 'appid', secret: 'secretid' });

router.get('/facebook', (req, res) => {

	let url = "http://graph.facebook.com/v3.3/me?&access_token=myaccesstoken";
	facebook.api(url, function(err, data){
    if(err){
        console.log(err);
       
    }
    else{
		res.json({
			statusCode: 200,
			status: "Success1",
			result: data,
			message:"fb data"
		})
        //Do some stuff with the data object
    }
});
});






export default router;



import express from 'express';
import axios from 'axios';
const router = express.Router();
const app = require('express')();
var Facebook = require('facebook-node-sdk');

var facebook = new Facebook({ appID: '457303481751595', secret: '8f9aef2855ae6cb3dedc82695e6a906c' });

router.get('/instagram', (req, res) => {
	axios.get('http://api.instagram.com/v1/users/self/media/recent/?access_token=5665661776.8aff6e2.6c400b0177364903a624173cfacb481b')
	.then((response) => {
			
		res.json({
			statusCode: 200,
			status: "Success1",
			result: response.data.data,
			message:"Data Updated"
		})
})
	.catch((err) => {
			err({
				statusCode: 500,
				status: "Failure",
				result: err,
				message:"Error"
			})
})
});

router.get('/facebook', (req, res) => {

	let url = "http://graph.facebook.com/v3.3/me?&access_token=EAAGf6kOVmCsBALDXj5ZAbhqe8qMHRO3ZBDANnb0q7gmWEjrjbefNuqH5TodkZC2AQLj8JsoQzfQZCCaLSNrS1xLk2QerFXPILHZBh6AK39e7UzYqAPNv0iw8KCRedhcLgI6nHAAnXCWXaRoSZBMz9NXgPmKy1I9WYh85nlTKSJAI2cXRZBurXVqUxDJvnfcrKjUgLhHbG5mgvrQKFlIs5VDVlKujxCP7KEZD";
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


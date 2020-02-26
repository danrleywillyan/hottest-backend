const axios = require('axios');
const Profile = require('../models/Profile');

module.exports= { //object creation
    async store(req, res, next) {
        try {
            const user = req.body;
            console.log(user);
            
    
            const userExists = await Profile.findOne({ emailId: user.emailId });

            const allProfiles = await Profile.showAll();
            console.log("allProfiles ? "+ allProfiles);
            

    
            if(userExists) {                
                return res.json(userExists);
            }
    
            const name = user.name;
            const emailId = user.emailId;
            const picture = user.picture;
            const male = user.male;
            
            const profile = await Profile.create({
                name: name,
                emailId: emailId,
                picture: picture,
                male: male,
            })
    
            // ingredients.push(ingredient);
            res.status(200).json( profile );
        } catch(error){
            console.log("error at profile create =>  " + error);
            next(error);
        }
    }


};
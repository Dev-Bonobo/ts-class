// to protect your back-end from gebrish input from users we use various tools to not let your back end server 


// frist is process managers where we use pm2 npm as a middleware which ensures that ur server will not down while sending gebrish inputs by user
// second option is to use library like ZOD as : 

import jwt from "jsonwebtoken";
import express from 'express';
import {z} from "zod" ;

let inputProps = z.object({
    title : z.string().min(1).max(20),
    description : z.string().min(1).max(30)
})

const router = express.router() ; 
router.post("/signup", (req, res)=> {
    const parsedInput = inputProps.safeParse(req.body);
    if(!parsedInput.success){
        return res.status(411).json({
            msg : "you have sent a wrong input"
        })
    }
    let title = parsedInput.data.title;
    let description = parsedInput.data.description
})

// since zod and ts seems to be similar as they both make types to execute 
// but the diffrence is TS checks for compile time error that is it checks for input validation types 
// while zod checks for run time error i.e. is checks for user's input of data 
import { RequestHandler } from "express";
import { Hiragana } from "../models/schema";
// import { Customer } from "../models/schema";
// import { genSaltSync, hashSync, compareSync } from "bcrypt";
// import Jwt from "jsonwebtoken";

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://japanese-alphabet.p.rapidapi.com/v1.0/language',
//   params: {
//     language: 'hiragana'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'c7b67df5ebmshb22efcea1dc978cp133419jsnb37670908247',
//     'X-RapidAPI-Host': 'japanese-alphabet.p.rapidapi.com'
//   }
// };

// const response = await axios.request(options);
// const result = response.data
// console.log(result.data[0].content);
// const iterate = result.data[0].content
// await new Hiragana({
//      content:iterate
//    }).save(); 

export const getHiraganaApi: RequestHandler = async (req, res, next) => {
  try {
    
     const hiraganaArray = await Hiragana.find().exec()
     console.log(hiraganaArray)
     
    return res.status(200).json({ msg: "Success !!", hiraganaArray });
  } catch (error) {
    console.log(error)
  }
};
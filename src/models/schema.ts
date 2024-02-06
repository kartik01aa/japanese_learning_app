import { Schema, model } from "mongoose";
// import {Driver, Customer} from "../../types"

// Schema
const schema = new Schema({
  content:{ type: Array, default: [] }, 
});

const Hiragana = model("Hiragana", schema);


export { Hiragana  };
import mongoose from "mongoose";



export const DBConnect = async()=>{
  if(mongoose.connections[0].readyState){
    return true;
  }
  const mongooKey =  process.env.MONGODB_URI as string
  await mongoose.connect(mongooKey)
  return true
}
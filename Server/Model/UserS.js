import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});


export default mongoose.model("User", userSchema);

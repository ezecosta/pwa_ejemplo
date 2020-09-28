//El user que accede al backoffice del sitio
const mongoose = require("../bin/mongodb");

const userAdminSchema = new mongoose.Schema({
  name:{
      type:String,
      required: true,
      trim:true
  },
  user:{
      type:String,
      unique:true,
      required:true
  },
  password:{
      type:String,
      required:true
  }
})
module.exports = mongoose.model("usersAdmin", userAdminSchema);

// Creamos el perfil del usuario y lo exportamos.
// import {WebApp} from 'meteor/webapp'
// const ImageKit = require ('imagekit')

// const ikAuth = new ImageKit({
//   Imagekit PrivateKey
// })

// WebApp.connectHandlers.use('/IKauth', (req, res, next) =>{
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   var hasil = ikAuth.getAuthenticationParameters()
//   res.end(JSON.stringify(hasil))
// })

// WebApp.connectHandlers.use('/Deleteauth', (req, res, next) =>{
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   ikUploadAuth.deleteFile(req.query.file_id, function(error, result) {
//     if(error) console.log(error);
//     else console.log(result);
//   })
//   res.end()
// })
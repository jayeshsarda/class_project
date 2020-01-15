const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors') // CORS ORIGIN REQUEST
const bodyParser = require('body-parser');
const sha1 = require('sha1');
const app = express();

// File Uploading

const multer = require('multer');
let DIR = './attach';
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, DIR)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
});
let upload = multer({storage: storage}).single('image');

// End Uploading

app.use("/images", express.static('attach'));
app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/ecommerce",{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true});
let adminModel = require('./db/adminRegister');
let categoryModel = require('./db/category');


app.post('/api/adminregister',(req, res)=>{

    let name = req.body.name;
    let phone = req.body.phone;
    let email = req.body.email;
    let password = sha1(req.body.password);

    let insert = new adminModel({'name':name, 'phone': phone, 'email': email, 'password': password});

    insert.save((err, data)=> {
        if(err){
            res.json({'err':1, 'msg': err});
        } else {
            res.json({'err':0, 'msg': 'Data Inserted'})
        }
    })
});

app.post('/api/adminlogin', (req, res)=> {
    let email = req.body.email;
    let password = sha1(req.body.password);

    adminModel.find({'email': email, 'password': password}, (err, data) => {
        if(err) {
            res.json({'err':1,'msg':'Error Occured'})
        } else if (data.length == 0) {
            res.json({'err':1,'msg':'Email or password is not correct'})
        } else {
            res.json({'err':0,'msg':'Login successfull','uid':email})
        }
    })
});

app.post('/api/addcategory', (req, res) => {
    upload(req, res, (err) => {
        if(err) {
            res.json({err:1, 'msg':'Uploading Error'});
        } else {
            let cname = req.body.cname;
            let file_name = req.file.filename;
            let description = req.body.description;
            let insert = new categoryModel({'cname' : cname, 'image': file_name, 'description': description});
            insert.save((err) =>{
                if(err) {
                    res.json({'err':1, 'msg': 'Already Exist'});
                } else {
                    res.json({'err':0, 'msg': 'Category Saved'});
                }
            })
        }
    })
})

app.get('/api/getCategory', (req, res)=>{
    categoryModel.find({},(err,data)=> {
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    })
})

app.post('/api/deleteCategory', (req, res) => {
    let cid = req.body.id;
    categoryModel.findByIdAndRemove({_id: cid}, (err, data) => {
        if(err) {
            res.json({'err':1,'msg':'Error Occured'});
        } else {
            res.json({'err':0,'msg':'Category Deleted'});
        }
    })
})

app.get('/api/getByIdCategory/:id', (req, res) => {

    let cid = req.params.id;
    categoryModel.findById({_id: cid},(err,data)=> {
        if(err){
            res.send(err);
        }
        else{
            res.send({'err':0, 'cdata': data});
        }
    })
})

app.post('/api/editCategory', (req, res) => {
    let cname = req.body.cname;
    let description = req.body.description;
    let cid = req.body.cid;

    categoryModel.updateOne({_id: cid},{$set:{'cname' : cname, 'description': description}}, (err, data) => {
        if(err) {
            res.json({'err':1, 'msg': err});
        } else {
            res.json({'err':0, 'msg': 'Category Updated'});
        }
    })
})

app.post('/api/editcatbyimage', (req, res) => {
    let file_name = req.file.filename;
    let cid = req.body.cid;

    categoryModel.updateOne({_id: cid},{$set:{'image': file_name}}, (err, data) => {
        if(err) {
            res.json({'err':1, 'msg': err});
        } else {
            res.json({'err':0, 'msg': 'Category Image Updated'});
        }
    })
})

app.listen(8000, ()=> {
    console.log('Server Started');
});



//defining applications necessities
const {
    response
} = require("express");
    var express = require("express");

//DEFINING APP SETTINGS
const app = express();

app.set('trust proxy', true);
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/images',express.static('public/images'));
app.use('*/vendor',express.static('public/vendor'));
app.use('*/scss',express.static('public/vendor'));


var mongo_winkle = require('mongo-winkle')

let mongo_uri = 'mongodb+srv://xxxxxxx'
let cluster = 'clusterName'
let collection = 'collectionName'

//when you go to localhost:1235, go to this route and it will call a function
app.get('/', async (req, res) => {
    //uncomment these out to use

    //login(req, res)
    //register(req, res)
})

//async login function
async function login(req, res) {
    let username = "testdummy@inderatech.com"
    let password = "password"

    //calling the mongo-winkle.login module, and passing arguments
    let results = await mongo_winkle.login(username, password, mongo_uri, cluster, collection)
    if (results === true) console.log("logged in, eh!")
}


//async register function
async function register(req, res) {

    //data is typically the data passed in from the request. 
    //ex:
    //let data = req.body
    //in this case, we define it to show you what it can be like!
    let data = {
        first_name: "jodn",
        last_name: "doe",
        role: "developer",
        phone_number: "1234567890",
        username: "john.doe@mongo-winkle.com",
        id: "xxx123xxxyyy123",
        location: "Paris, France",
        profile_photo: "profile_photo...",
        password: "plaintextpassword",
        admin: true
    }

    //calling the mongo-winkle.register module, and passing arguments
    let results = await mongo_winkle.register(mongo_uri, cluster, collection, data)
    if (results === true) console.log("registered, eh!")
}


//DEFINING PORT AND LISTEN ON PORT
const PORT = process.env.PORT || 1235;

app.listen(PORT, () => {
    console.log("PORT:", PORT);
})





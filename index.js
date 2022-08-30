let {MongoClient} = require("mongodb")
let uri = ''
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = async function(username, password, mongo_uri, cluster, collection) {
    
    let client = new MongoClient(mongo_uri)
    let database = client.db(cluster)
    let collection_name = database.collection(collection)

    if (!username || !password || !username && !password) {
        reject(false)
    } else {
    return new Promise((resolve, reject)=>{
        MongoClient.connect(mongo_uri, async function(err, db) {
                if (err) {
                    console.log(err);
                    reject(false)
                }
                
                collection_name.find({'username': username}).toArray(async function(e,doc){
                    if(doc.length === 0) {
                        resolve(false)
                        db.close();
                    } else {

                    let hashed_pw = ""
                    for (var i = 0; i < doc.length; i++) {
                        hashed_pw = doc[i].password
                    }

                    bcrypt.compare(password, hashed_pw, async function(err, result) {
                        if (result == true) {
                            resolve(true)
                        } else {
                            resolve(false)
                        }
                });
            }
            })
            })
        })
    }
 } 
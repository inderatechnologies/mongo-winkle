Welcome to ```Mongo Winkle!``` This package will help you easily create a login and registration system for your node.js app!

We use bcrypt hashing and mongodb! (hence the mongo name). 

To install this package, run:

```npm install mongo-winkle```

Then, view examples below about how to use this:

LOGIN
```let mongo_winkle = require('mongo-winkle')```

```let results = await mongo_winkle.login(username, password, mongo_uri, cluster, collection)```
```if (results == true) return true```

REGISTER
```let mongo_winkle = require('mongo-winkle')```

```let results = await mongo_winkle.register(mongo_uri, cluster, collection, data)```
```if (results == true) return true```

you need to pass 5 arguments to the module.

LOGIN
The ```username``` and ```password``` of the person trying to login.

The ```mongo_uri```, ```cluster```, and ```collection``` of your mongo ```cluster```.

REGISTER 
The ```mongo_uri```, ```cluster```, and ```collection``` of your mongo ```cluster```, and the ```data``` you want to insert into the collection.

In your mongo collection, we are looking for ```username``` to compare to the username you submit to the module.
If you want to change this, go into the ```node module``` and find ```'username': username``` and change it to whatever you want!

Then you're good to go. This 1 liner will help you easily create a login and register system in 1 line of code.
To see examples in action, visit https://github.com/inderatechnologies/mongo-winkle/

Note: 
    It is up to you to make this more secure. We made is secure using bcrypt hashing but it may not be up to your standards.
    We take no responsibility for anything resulting in this package failing
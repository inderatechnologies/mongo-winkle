To install this package, run:

```npm install mongo-winkle```

Then, view examples below about how to use this:

```let mongo_winkle = require('mongo-winkle')```

```let results = await mongo_winkle(username, password, mongo_uri, cluster, collection)```
```if (results == true) return true```

you need to pass 5 arguments to the api.

The ```username``` and ```password``` of the person trying to login.

The ```mongo_uri```, ```cluster```, and ```collection``` of your mongo ```cluster```.

In your mongo collection, we are looking for ```username``` to compare to the username you submit to the api.

If you want to change this, go into the ```node module``` and find ```'username': username``` and change it to whatever you want!

Then you're good to go. This 1 liner will help you easily create a login system in 1 line of code.

Note: 
    It is up to you to make this more secure. We made is secure using bcrypt hashing but it may not be up to your standards.
    We take no responsibility for anything resulting in this package failing
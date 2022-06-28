# 2022-sapient-react-node-graphql

# Start Date 15-Jun-2022


- Day 1 - Debugging Chrome, es6 
- Day 2, 3 - MongoDB 
- Day 4 - Node JS
- Day 5 - Express JS 
- Day 6 - Express JS + MongoDB - to create Micro Service Application 
- Day 7 - GraphQL, Auth (JWT) 
- Day 8 - TDD, external tools winston,multer 
- Day 9-14 - React js + Redux, Hooks, Saga 
- Day 15 - React, Deployment 


- Ankit - 5 years exp, works with java script, jquery, looking for sso with google, like firebase would be good, FCM. 

- Ayush - working since 2019, working xt core training, want to learn libraries

- Brahmanand - 4 years exp, 1 year worked in java-spring, currently working with angular, 2.5 years on angular 

- Dhananjay - 2 Years exp, UI Developer, working on angular, like to work with reactjs 

- Harsh Kumar - joined sapient 2021, xt core, like to work with reactjs 
Hemanth 

- Himanshu - 9 years exp, worked on PHP, working with angular + react, get more on react, mongodb 

- Hitesh - 1.5 years exp, XT core, willing to learn new things 
Irshad - 5 years, working with angular, know more about react, undersand 
mongodb, nodejs 

- Kumkumbala - 4 years exp, in front end, basic knowledge of reactJS 

- Manav - been 1 year with  PS , to become fullstack developer 

- Prit Ranjan - 3.4 years exp, front end developer, have worked with react know more about nodejs and graphql 

- RaviVarma - 5 years exp, fullstack developer, like to work on react 

- Rohit - from 2016 as front end developer, aug 2021 in sapient, working in angular, will to look for fullstack exp. 

- Sailesh - 2 years exp, working with angular, known basics of react, likes to know how things work behind the screen

- Santosh - 3.5 years exp, working on angular 2.5 years, willing to learn new things + node js 

- Sourabh - 5 years exp, had worked in devops now in angular, worked in ionic, looking for reactjs 

- Varki Sebi - 1.5 years exp, recently with PS, had worked with react, to become front end to full stack developer 

- Vikas Verma - 12 years exp, knows angular, worked on ionic, 



+ micro front end 






# Day 1 
Disadvantages of using console API
Overview of the Chrome Developer Tools
Debugging JS using the Chrome Developer Tools
Developer Tools in other browsers

Single-threaded nature of JavaScript
The Event Loop and event handling
Synchronous (blocking) and Asynchronous (non-blocking) methods


Block-level scoping and the use of let, const
    - const  
    - let 
    - var 
    - nothing 

    ```
        const myvar = "hello; 
        let myvar = "hello; 
        var myvar = "hello; 
        myvar = "hello; -> window.myvar = "hello; 
    ```
Template strings
Default Parameters
Object and Array Destructuring	
Rest and spread operators (includes object spread), making immutable changes, deep and shallow copies of objects
Arrow Functions
Classes, Class Inheritance
Modules
Promises
async…await



Kafka & how esb is used 

Cloud 
    - aws azure 
Containarization
    - docker 



- prefer not using log 
- instead we can use debugger 
    - browers (chrome)
    - code 




```

function doSomething() {
    console.log("One");
    console.log("two");

    fetch(
            "http://yoursite.com/application/uri/resource",
        (data) => {document.getElementById("mydiv").innerHTML = data})

    console.log("Four");
}
```


- es6 content 

```
    function myfunction(val) {this.val = val}
    // this is anonymous function + this cannot hold the referece of this 
    let myfunction = (val) => {this.val this does not work (x)}
```

- a function inside a function is called closure 

```
    -- named closured 
    function one() {
        // variables which are declared here are accessable to two () + 
        // since its a function its only loaded 
        function two() {}

        two(); 
    }
    let oneRef = one();


    -- 


    function one(val1) {
        return function(val2) {
            return val1 + val2; 
        }
    }
```


- callback 
- promise 
- error first approach 



# Day 2 

- Generators 
```
    let arr = [32,5,6,8,9,02,1]; 

    for(let i=0;i< arr.length; i++) {
        console.log(i)
    }

    --- 
    arr.forEach((val) => console.log(val)); 
    -- fibonacci series 
    let val = yeild currVal; 
    [currVal, nextVal] = [nextVal, nextVal + currVal]; 
```




- Topics 

- MongoDB basics
- RDBMS vs NoSql DBs
- Types of NoSQL DBs
- Pros and Cons of RDBMS and NoSQL DBs
- Document data model
- When to use a document database
- Introduction to MongoDB
- Features of MongoDB
- Installation and getting started
- Using Compass and Robo 3T
- Databases, collections, and documents
- Schema design in MongoDB
- Modelling relationships among collections
- Basic queries
- Introduction to the Mongo Shell
- MongoDB’s query language
- CRUD operations – Inserts, queries, updates, deletes
- Query Criteria and Selectors
- Query options
- Introduction to document updates
- Modify by replacement
- Modify by operator





export PATH=$PATH:$HOME/.local/bin:$PATH:YourMongoPath

- SQL -> DBMS, RDBMS, Normalization, Keys ....  - 800 Different databases - A C I D 
- NoSQL -> DB, un-Normalization, 

```
| Empid (pk) | empName | salary | designation| 
| 101 |    Himanshu | 11000 | SE | 
```

```
{
    _id:12 byte information 
    
}
```

- by default 
    - /data/db - linux, mac, 
    - c:\data\db - win 
- create a folder in desktop -> sapient-db 
- 27017 

> mongod --dbpath . 

> mongod --dbpath . --port 27017

> show dbs 

> use sap_db;  (if the db is not created the it will create)

> let emp={empName:'hitesh', empsal:1234}
> db.emps.insert(emp); 


 
> db.emps.insert({empName:'hitesh', empsal:1234}); 

> db.emps.insert({empName:'Rohit', empsal:2233}); 

> db.emps.insert({empName:'Madhulata', empsal:2233, email:"madhulatha@gmail.com"}); 

> show collections; -- to show all the collections in the DB 


> db.emps.find({});  - select * from emps; 

>  db.emps.find({selector , projection - 1 or 0 });

> db.emps.find({empName:'hitesh'})


> db.emps.find({empsal:{$gt:2000}})

>  mongoimport --host localhost --db sap_db --collection emps --file ./emps.json 

>  mongoexport --db sap_db --host localhost --collection emps --out=exp-emps.json

> db.emps.find({email:{$exists:false}})

-- find people who salary is more than 2000 and should not have email 

> db.emps.find(
        {
            empsal:{$gt:2000}, 
            email:{$exists:false}
        }, 
        {
            _id:0, empName:1, empsal:1 
        }
    ); 

```

{
    empid:101, 
    empname:"naveen", 
    email:"naveen@probits.in", 
    address: {
        hno:123, 
        street:"Stevens Creek Blvd", 
        ... 
    }, 
    family: {

    }, 
    project:{
        timesheet: []
    }
}
```

- to iterate records and copy to other collection 
- new collection new_emps should have only name and salary 
```

var cursor1=db.emps.find({}, {_id:0, empName:1, empsal:1});
while(cursor1.hasNext()) {
    let record = cursor1.next();
    db.new_emps.insert({empname:record.empName.toUpperCase(), salary:record.empsal}); 
}
```


- db.createCollection("collName", options)


- db.createCollection("capCol", {capped:true, autoIndexId:true, size:1000, max:5})

- db.emps.update({empName:"hitesh"}, {$set:{empName:"Hitesh Patil", email:"hitesh@ps.com"}})



# Day 3 

- to drop collection 
> db.capCol.drop();

- insert, find 
- db.emps.find({}, {}); 

- select * from emps where address = 'Delhi' or address = 'Bengaluru' ;
- select * from emps where address  in ('Delhi', 'bengaluru')
- select * from emps where address  in ('Delhi', 'bengaluru') or empsal > 2000; 
- select * from emps where address  in ('Delhi', 'bengaluru') and empsal > 2000; 


> db.emps.find({address:{$in:['Delhi', 'Bengaluru']}}); 

- and 
> db.emps.find({
        address:{$in:['Delhi', 'Bengaluru']}, 
        empsal:{$gt:3500}
        }); 


> db.emps.find({
        $and:[
                {address:{$in:['Delhi', 'Bengaluru']}}, 
                {empsal:{$gt:3500}}
        ]
        });         

- or 
> db.emps.find({
        $or:[
           
                {address:{$in:['Delhi', 'Bengaluru']}}, 
               { empsal:{$gt:3500}}
           
        ]}); 

- and  + or 
> db.emps.find({
    email : "hitesh@ps.com", 
        $or:[
           
                {address:{$in:['Delhi', 'Bengaluru']}}, 
               { empsal:{$gt:3500}}
           
        ]
    }); 

> db.emps.update({email : "hitesh@ps.com"}, {$set:{empsal:4000}});





Emplyee
Address
Insurance
Project
Family
PersonDetails
ProfessionalDetails
....

- embedded document 
```
    > db.embed.insert({
        customerId:101, 
        customerName:'Santosh', 
        address: {
            houseNo:1234, 
            street:'American Dream Way', 
            city:'Reston', 
            state:'VA'
        }, 
        contact:{
            email:'santosh@ps.com', 
            mobile:'+1456 789 7765'
        }
    })


      > db.embed.insert({
        customerId:102, 
        customerName:'Saurabh', 
        address: {
            houseNo:3213, 
            street:'Stevens Creek Blvd', 
            city:'Ashburn', 
            state:'VA'
        }, 
        contact:{
            email:'saurabh@ps.com', 
            mobile:'+1456 799 7765'
        }
    })
```

> db.embed.find({customerId:102})

> db.embed.find({'address.city':'Ashburn'});

- arrays 

```
    db.foods.insert({name:"Dosa", price:100, restaurant:"Sagar", reviews:[7,8,10,7]});
    db.foods.insert({name:"Idly", price:70, restaurant:"Sagar", reviews:[5,4,6]});
    db.foods.insert({name:"Poori", price:123, restaurant:"Sagar", reviews:[9,9,10]});
    db.foods.insert({name:"Poha", price:80, restaurant:"Sagar", reviews:[4,8]});
```
- exact match 
> db.foods.find({reviews:[5,4,6]});

> db.foods.find({reviews:[4,5,6]});

- find it anywhere 
> db.foods.find({reviews:8})

- find by index 
> db.foods.find({'reviews.0':7})

- review with condition 
> db.foods.find({reviews:{$elemMatch:{$gt:8, $lt:10}}});

> db.foods.find({})

> db.foods.aggregate({$unwind:"$reviews"}, {$match:{name:"Dosa"}}, { $count: "reviews"}); 
 
> db.emps.find().sort({empName:-1, address:1}).skip(2).limit(3);


- update (modify the records)

- db.emps.update({}, {country:'India'}); -> update emps set country;'india'; 

- db.emps.update({empName:'Rohit'}, {$set:{country:'India'}});  


- db.emps.update({empName:'Rohit'}, {$set:{country:'India'}}, {multi:true}); 

- db.emps.update({}, {$set:{country:'India'}}, {multi:true}); 

- if the record is found it updates else inserts 
- db.emps.update({empName:"Shiva"}, {$set:{country:'India', email:'shiva@ps.com'}}, {upsert:true}); 

- to use save instead of insert 

> db.emps.save({"_id" : ObjectId("62ac192507a8d61ad3945914"), empName:'Naveen', empsal:2256});

> db.emps.save({"_id" : 100, empName:'Naveen', empsal:2256});

- remove- remove(); 

- remove all the records 
> db.empd.remove({}); 

- removes with condition 
> db.emps.remove({empName:"Naveen"});


> db.some_mock_db.find({"gender" : "Female"}).explain("executionStats"); 

> db.some_mock_db.createIndex({gender:1}); 

- compound indexes 

> db.some_mock_db.createIndex({id:1, email:1}); 

> db.some_mock_db.createIndex({id:1, email:-1}); 

> db.some_mock_db.find({id:1, email:"ksendall0@amazon.co.uk"}).explain("executionStats"); 

- get those queries which are taking more than 2 millis 

> db.system.profile.find({millis:{$gt:1}}, 
{
	"keysExamined" : 1,
	"docsExamined" : 1,
    "command":1
}).pretty();


- profiling 
    - 0 - dont profile 
    - 1 - profile only if is more than msecs 
    - 2 - profile all the queries 




-- set profile level 2 (all) 
> db.setProfilingLevel(2);




```
{
	"queryPlanner" : {
		"plannerVersion" : 1,
		"namespace" : "sap_db.some_mock_db",
		"indexFilterSet" : false,
		"parsedQuery" : {
			"gender" : {
				"$eq" : "Female"
			}
		},
		"winningPlan" : {
			"stage" : "COLLSCAN",
			"filter" : {
				"gender" : {
					"$eq" : "Female"
				}
			},
			"direction" : "forward"
		},
		"rejectedPlans" : [ ]
	},
	"executionStats" : {
		"executionSuccess" : true,
		"nReturned" : 16345,
		"executionTimeMillis" : 33,
		"totalKeysExamined" : 0,
		"totalDocsExamined" : 35000,
		"executionStages" : {
			"stage" : "COLLSCAN",
			"filter" : {
				"gender" : {
					"$eq" : "Female"
				}
			},
			"nReturned" : 16345,
			"executionTimeMillisEstimate" : 0,
			"works" : 35002,
			"advanced" : 16345,
			"needTime" : 18656,
			"needYield" : 0,
			"saveState" : 273,
			"restoreState" : 273,
			"isEOF" : 1,
			"direction" : "forward",
			"docsExamined" : 35000
		}
	},
	"serverInfo" : {
		"host" : "Naveens-MacBook-Pro.local",
		"port" : 27017,
		"version" : "4.2.1",
		"gitVersion" : "edf6d45851c0b9ee15548f0f847df141764a317e"
	},
	"ok" : 1
}


size of index 

	"nindexes" : 2,
	"indexBuilds" : [ ],
	"totalIndexSize" : 507904,
	"indexSizes" : {
		"_id_" : 327680,
		"gender_1" : 180224
	},
	"scaleFactor" : 1,
	"ok" : 1

- data size 
	"ns" : "sap_db.some_mock_db",
	"size" : 4495225,
	"count" : 35000,
	"avgObjSize" : 128,
	"storageSize" : 2015232,
 
```



- unique key 

>  db.emps1.save({empName:"Rohit", empId:101}); 

>  db.emps1.createIndex({empId:1}, {unique:true}); 


- to drop index 

>  db.emps1.dropIndex({empId : 1});


```
    db.getCollectionNames().forEach(function(collection) {  
        indexes = db[collection].getIndexes();  
        print("Indexes for " + collection + ":");  
        printjson(indexes);
    });

```

- prototype project 
- team of 4 pepole -20 - 5 teams doing the project 


Team 1 - Ankit, Dhananjay, Prit, Rajitha, Sandeep
    - OTT 
Team 2 - Himanshu, Manav, Ramkumar, Sourabh, Rohit Wadhwani 
    - Ecommerce platform 
Team 3 - Ayush, Harsh, Hemanth, Irshad, Sailesh 
    - Travel application 
Team 4 - Aman, Brahmanand, Kumkumbala, Madhulatha, Varki 
    - e-courses (online courses)
Team 5 - Ravivarma, Rohit, Santosh, Vikas verma , hitesh
    - Library Management System 


1. Title of project  
2. to do write up of the modules 
    - Banking 
        - Customer 
        - Account 
        - Branch 
        - Bank 
        - Transaction 

    - Retail 
        - customer / user 
        - Products 
        - Category 
        - Shipment 
        - Cart 
3. representation of Data Model 
4. MongoDB commanda for CRUD, and any operations which you are looking for 
5. Naveen - create an organization - 




```
user collection 
{
    userId:1234, 
    email:'naveen@naveen.com', 
    .... 
    orders : [
        {
            order:'o1234', 
            order-items: [
                
            ]
        }, {}
    ]
}
```



<br >


|replica server | port number| 
|----|---| 
| rs1 | 27017 |  
| rs2 | 27018 |  
| rs3 | 27019 |  


```
> mongod --dbpath ./rs1 --replSet sap-repl --port 27017

> mongod --dbpath ./rs2 --replSet sap-repl --port 27018

> mongod --dbpath ./rs3 --replSet sap-repl --port 27019

> mongo --port 27017

> rs.status(); 

> config={
        _id:"sap-repl", 
        members:[
            { _id:0, host:"localhost:27017"},
            { _id:1, host:"localhost:27018"}, 
            { _id:2, host:"localhost:27019"}
        ]
    }

> rs.initiate(config); 

> rs.status(); 

-- some body is primary (27017,27018,27019)

> primary: > use repl_db; 

> primary: > db.emps.insert({empid:101, empname:'harry'})
.. you can put more records 

> mongo --port 27018 

Note : this will not work 
> show dbs; 

> rs.slaveOk();

-- works 
> show dbs; 

-- we want to shut down the primary server (27017), you should be in mongo shell of 27017 

> db.shutdownServer(); - will not work 

> use admin; - make sure 

> db.shutdownServer(); -  will work 

-- bring back stopped server 
> mongod --dbpath ./rs1 --replSet sap-repl --port 27017

now 27017 will be secondary 

> rs.slaveOk();

remember the secondary is only for reading 

for(var i=0; i<100000; i++) {
    db.dummy.insert({id:i}); 
    sleep(1);
}

```



# Day 4 

protocol 
    - HTTP 
        - 1.0 - statefull protocol 
        - 1.1 - stateless prototcol
        - 2.0 - pull requests 

- WebServer 
    - http 
        - tomcat 
        - jetty 
                - nodejs 
                    - build on top of JS 
                    - programming language called c / C++ 
                    - amalgamation between JS + C/c++ 
                    - you can invoke c code from JS - Native library 
                    - V8 enginee 
        - netty 
        - apache 
            - Browser / Mobile... 
- Application 
    - http 
    - raw 
    - ftp / smtp ... 
        - jboss 
        - glass fish
        - web logic 
        - web sphere 
        - IIS 


- Try out 
    - create or have a file with over 2gb, try to copy the content from source file to destination file 
        - readFile 
        - readStream

-rw-r--r--  1 naveenkumar  admin  316188 20 Jun 14:46 somefile.txt
-rw-r--r--  1 naveenkumar  admin  316198 20 Jun 14:52 somefile3.txt.gz


-rw-r--r--  1 naveenkumar  admin  4742820 20 Jun 14:53 somefile.txt
-rw-r--r--  1 naveenkumar  admin  4757781 20 Jun 14:53 somefile3.txt.gz

<a href="loginform.html">Login Form</a>

- os constants 

console.log(os.tmpdir());
console.log(os.type());
console.log(os.platform());
console.log(os.hostname());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(__dirname);


# Day 5


- The usage of cache memory at different levels 

- express js -> regexp, routes will work , middleware etc... 
- npm installin packages / updating / removing packages 
- nodemon 
- use a data base to store the data (inmemory / json file / mongodb)
- Restful services 
- node application invoking cpp 


```
    console.log('1'); 
    setTimeout(() => {
        console.log('2'); 
    }, 0)
    console.log('3'); 
```


# Day 6 
- connecting with Express JS + Integrate with MongoDB
- EJS 
- logging - Winston 
- Image updload with multer 

- Richarson Maturity Model
    - 0 - XML ( Swamp of POX)
    - 1 - use JSON but single URI 
        - http://localhost:3000/getemployee 
        - http://localhost:3000/saveemployee
        - http://localhost:3000/updateemployee 
    - 2 - use HTTP verbs 
        - GET - http://localhost:3000/employee 
        - GET - http://localhost:3000/employee/{employeeId}
        - POST - http://localhost:3000/employee 
        - DELETE - http://localhost:3000/employee 
        - OPTION - http://localhost:3000/employee 
        - PUT - http://localhost:3000/employee 
    - 3 - with HATEOAS - restful 
        - GET - http://localhost:3000/employee  - 200  - get all 
        - GET - http://localhost:3000/employee/{employeeId} - 200 
        - POST - http://localhost:3000/employee  - 201 
        - DELETE - http://localhost:3000/employee - 200 
        - OPTION - http://localhost:3000/employee - 200 
        - PUT - http://localhost:3000/employee - 200 
        + - when the resouce is asked then the related resources to be given back. 




# Day 7
- Auth - how to use user model with auth 
- JWT program to auth the user 
- https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.f9gSOnolW0uUbQsD3G7XCEHxxSqn29Ao3b1V_k5jscA
- GraphQL 
    GET /api/video 5ms 
    POST /api/video 5ms 
    GET /api/video/{videoId} - 3msn
    DELETE /api/video/{videoId} - 3msn
    POST /api/video/video/comments  - 10 ms
    GET /api/video/video/comments  - 10 ms
    PUT /api/video/video/comments  - 10 ms

    /api/video/related/videos - 2 secs

    - Query - will make only POST calls 
    ```
        query {
            visa_availble_countries{
                country 
                type 
                validity
            }
        }
    ```
    - Mutation 
    ```
        mutation {
            setVisaAvailableCounties (
                country:"india", 
                validity:"06/2030", 
                type:"Tourist"
            ){
                country
                validity
            }
        }
    ```
    - Observer 

    - SQL - select * from emp; - rest 
    - SQL - select * from emp where city='blr'; - graphql


```
allLifts(
    status: LiftStatus - OPENED, CLOSE, INFLIGHT
): [Lift!]!

allLifts(
    status: LiftStatus - OPENED, CLOSE, INFLIGHT
): [Lift!] 

allLifts(
    status: LiftStatus - OPENED, CLOSE, INFLIGHT
): [Lift]!

allLifts(
    status: LiftStatus - OPENED, CLOSE, INFLIGHT
): [Lift]

```
- Microsevice - API Gateway 



- https://snowtooth.moonhighway.com/ 
- Query 
```
    # Write your query or mutation here
        query{
        liftCount
        allLifts {
            name
            capacity
        }
        }
```
- passing arguments - enum 

```
    query{
        openLifts: liftCount(status:OPEN)
    closeLifts: liftCount(status:CLOSED)
    allLifts {
        liftName: name
        capacity
    }
    }
```

-- Pass query 

```

    query ($status: LiftStatus){
        returnLifts: liftCount(status:$status)
        allLifts {
            liftName: name
            capacity
        }
    }

    Under Query Variable 

    {
        "status": "HOLD"
    }
```

-  to get connected types
```

 query {
  allLifts {
    liftName: name, 
    capacity, 
    status
    trailAccess {
      name
      status
      accessedByLifts {
        name
      }
    }
  }
}

```

- get data from different models - not connected 
```
    query AllLifts {
    allLifts {
        liftName: name, 
        capacity, 
        status
        }
    }

    query AllTrails {
    allTrails {
        name
        status
    }
    }

```

- mutation - change status of trail 

```
query AllTrails {
    allTrails {
        id
        name
        status
    }
    }

    query Trail {
    Trail(id:"dance-fight") {
        name
        status
    }
    }

- mutation 
    mutation {
    setTrailStatus( id: "dance-fight", status:OPEN) {
        name
        status
    }
    }
```
- resolvers look like 
```
type Mutation {
    addProgrammer(date:String, dateOfProgrammer:String, domain:Domain)

}

```




# Day 8 

Team 1 - Ankit, Dhananjay, Prit, Rajitha, Sandeep - 
    - OTT 
    - Ankit - customer db 
    - dhananjay - categories 
    - prit - content 
    - rajitha - working on MS - reivew 
    - sandeep - plans  
    - team1-customer
    - team1-content

Team 2 - Himanshu, Manav, Ramkumar, Sourabh, Rohit Wadhwani 
    - Ecommerce platform 
    - divided the modules, admin product section + manage -sourabh 
    - user login + reg - himanshu 
    - product listing - rohit 
    - cart ops - ram kumar 
    - order creation  -manav 
    - creating the model file as of now 
    - need to work on MS 
    - team2-cart

Team 3 - Ayush, Harsh, Hemanth, Irshad, Sailesh 
    - Travel application 
    - works are sliced 
    - 5 ms - auth service sailesh 
    - Irshad - booking 
    ```{
            user:ID, 
            bookings: [
                {
                    booking : ID, 
                    source: String, 
                    destination:String, 
                    booking-date:Date, 
                    travel: {
                        start:Date, 
                        end:Date
                    }
                    amount:Number, 
                    people : [String] - optional 
                    
                }

            ]

        }
    ```
    - trips - harsh 
    - hemanth - reviews 
    - ayush - trip packages 

Team 4 - Aman, Brahmanand, Kumkumbala, Madhulatha, Varki 
    - e-courses (online courses)
    - decided the task 
    - 4 ms - auth service - madhulatha 
    - courses - aman 
    - payment - kumkum bala  
    - profile user profile - Brahmanand/varki 

Team 5 - Ravivarma, Rohit, Santosh, Vikas verma , hitesh
    - Library Management System 
    - 3 members 
    - auth service 
    - rohit - reservce / borrow  for book + maintain the no of books 
    - hitesh - search of book 
    - vikas - return book 
    - have to normalize the data model to know how book is borrowed + date user etc.. 

- 1 person from the team to represent 
- who will take which module 
- create the services necessary 
- Perform CRUD operations 


- TDD - Test Driven Developement 
- BDD - Behavioural Driven Development 
- DDD - Domain Driven Development 
- MDD - Model Driven Development 

- mocha - chai 
- jasmine 
- jest 
- testing library 


```
    a = 10; 
    b = 20; 

    a = 20; 
    b= 10; 

    if(a > b ) {
        return a; 
    }else {
        return b; 
    }
```

- common things to be handled - before / after, before all after all, 

```

    beforeEach(() => {// will be executed before each method for n number of times})
    afterEach(() => {// will be executed after each method for n number of times})

    beforeAll(()=>{// before all the methods only once})
    afterAll(()=>{// after all the methods only once})

    test("message", () => {
        add(n1, n2)
    })

    test("message", () => {
        sub(n1, n2)
    })

    test("message", () => {
        mul(n1, n2)
    })

    
```
- test with end point 
- mock test 


- work 
1. Create a the project 
    1.1 get all the dependencies including testing , jwt, bcrypt etc etc... 
    1.2 create a data model in the DB by invoking the endpoint (http)
2. push it to github 
3. make sure you have .gitignore 
4. pls send me for review + 1 person from other team 


```
    reels: {
        _id:String, 
        name:String, 
        length:Number, 
        category:{
            genre: [enum], 
            age : number, 
            audio-language: [enum], 
        }
    }
```

-- search based on category 
- http://localhost:3000/category/age{:age}
- http://localhost:3000/category/
- http://localhost:3000/category/language/{:language}
- http://localhost:3000/category/ - PUT
    {
        category:{
            genre: [enum], 
            age : number, 
            audio-language: [enum], 
        }
    }





# Day 9 

- Team 1 
    - CRUD operations are done 
    - project creation is done 
    - in repo - content has basic operation up 
    - reviews and customers repo is empty 
    - dhananjay - prit -  categories opertions + content will be in 1 MS
- Team 2 
    - user login and user list 
    - product-service is empty 

- Team 3 
    - auth is almost completed, and writing test cases 
    - booking repo is empty 

- Team 4 
    - CRUD Operation are done 
    - repos are created 
    - all MS has the busiess logic 

- Team 5 
    - 3 MS are created for auth, 
    - do book operations 
    - CRUD operations are done 
    

- need 
    1. The application should have micro service behaviour + api gateway 
    2. Password should not be kept directly in to the db + sensitive data too like CVV 
    3. Auth should be with JWT 
    4. Swagger Documentation 
    5. Business logic to be completed 
    6. all the requests to be in the file called request.http 




```
- fetch is part of java script 

    fetch(url, {options})
        .then(data => perform operations)
        .then(data => perform operations)
        .then(data => perform operations)
        .then(data => perform operations)
        .catch(err => perform operations); 

- axios 
    - + a very good candidate for multipart (images/ videos etc)
    - you need to install npm i axios 
    
```


- Angular - Framework 
- ReactJS  - Library 

- Method - may, maynot return the value when it has to return then it can return more than 1 value 
- Function - a function will return exactly ony one value 

```
    class Hello extends Component {
        render() {
            return 
                <fragment>
                    <p>Hi </p>
                    <h2> My Name is ReactJS</h2>
                </fragment>
        }
    }
```

- React Project can be create from scratch 






```

Success! Created reactjs-first-app at /Volumes/Kanchan/MyTrainings/sapient/2022-sapient-react-node-graphql/web-works/react-workspace/reactjs-first-app
Inside that directory, you can run several commands:

  npm start - 3000 
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd reactjs-first-app
  npm start

Happy hacking!

```


# Day 10 



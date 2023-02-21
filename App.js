// ********************************************************NODE COURSE*********************************************************************************.

//plain vanilla js

// const amount = 12;

// if(amount<10){
//     console.log("small number")
// }else{
//     console.log("larger number")
// }

// console.log(`hey its my first app!!`)

// global module

// // console.log(__dirname)
// setInterval(()=>{
//     console.log("hello world")

// },2000)

// module creating various files and using export exporting them in another and if we call a function node automatically wraps as a module

// const sayHi = (name) =>{
//     console.log(`hello there ${name}`)
// }

// var name1 = "john"
// var name2 = "rishi"

// sayHi(name1)
// sayHi(name2)

// require('./test')

//os module built in

// const os = require('os')
// const user = os.userInfo()

// console.log(user)

// const time = os.uptime()
//  console.log(time)

//  another way of this syntax

// console.log(`the system time is ${os.uptime()}`)

// const currentOs = {
//     name : os.type(),
//     release : os.release(),
//     totalmem: os.totalmem(),
//     freemem :os.freemem()
// }

// console.log(currentOs)

// path module built in

// const path = require('path')

// console.log(path.sep)

// //this joins the path
// const filePath = path.join('/content', '/subfolder','/test.txt')
// console.log(filePath);

// //this gives base path
// const base = path.basename(filepath)
// console.log(base)

// //this takes global value __dirname and gives absolute path
// const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt')
// console.log(absolute);

//synchronous way

// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./first.txt','utf-8')
// console.log(first)

// writeFileSync('./result.txt',`hello this is the result ${first}`)

// writeFileSync('./result.txt',`hello this is the result ${first}`,{flag: 'a'}) //to append

// asynchronous method

// const {readFile, watchFile} = require('fs')

// readFile('./first.txt','utf8',(err,result)=>{
//     if(err){
//         return;
//     }
//     console.log(result);
// })

// HTTP MODULE

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.write('welcome to our home page')
//     res.end()

// })

// server.listen(5000)

// const server = http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('welcome to our home page')
//     }
//     if(req.url==='/about'){
//         res.end('welcome to our about page')
//     }
//     res.end(`oops cant find`)
// })

// server.listen(5000)

//NPM MODULE
/* for local dependencies that means in a particular project
use
npm i <packageName>
for global anywhere in any projects
use
npm install -g <packageName>

package.json manifest files(stores imp info about project)
npm init (step by step )
mpm init -y(default)
*/

// const _ = require('lodash')

// const items = [1,[2,[3,[4]]]]
// const newitems = _.flattenDeep(items)
// console.log(newitems)
// console.log("hello people");

// we are not installing node modules so how we can run our program in another machine , thats where the magic happens the node will check the dependesies in package.json and if we type 'npm install' it will automatically download the packages

// first javascript runs the raw data the it runs the callback =settimeout etc

// example of eventloop**************8

// const {readFile} = require('fs')
// console.log("completed the first task")
// readFile('./first.txt','utf8',(err, result)=>{
//     if(err){
//         return
//     }
//     console.log(result);
//     console.log("done");

// })
// console.log("era pukla")

// asynchronous files get offloaded then sync ,the async callback is async eg settimeout(), request, listen, setinterval() (interval is recurring for every set time)

// console.log("hi");
// setTimeout(()=>{
//     console.log("2");

// },0)
// console.log("3");

// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     //blocking code in synchronous prog is thw way to block access to the user by setting out some timeout it can be for or nested for loop
//     res.end('home page');
//   }
//   if (req.url === '/about') {
//     for (let i = 0; i < 1000; i++) {
//       for (let j = 0; j < 1000; j++) {
//         console.log(`${i},${j}`);
//       }
//     }
//     res.end('about page');
//   }
//   res.end('error page');
// });

// server.listen(5000, () => {
//   console.log('server listening on 5000...');
// });

// promises .then and .catch

// const {readFile} = require('fs');
// // const path = require('path');
// const utils = require('util')

// const getText = (path)=>{
//     return new Promise((resolve, reject) => {
        
//         readFile(path,'utf8',(err, data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data);
//             }
//         });
//     })
    
// }
//     // await waits till the promise excutes and continues the code ===> sometimes put that in try and catch block
//     const start = async () => {
//       try {
//         const first = await getText("./first.txt");
//         console.log(first);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     start();

// getText('./first.txt').then((result)=>console.log(result)).catch((err)=>console.log(err));

// another way

// const {readFile,writeFile} = require('fs').promises
//.promises or below one are basically the same thing
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//   try {
//     const first = await readFile('./first.txt','utf8');
//     await writeFile('./second.txt',`this is awesome: ${first}`)
//     console.log(first);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

// EVENTS IN NODE

// const EventEmitter = require('events')
//custom event
// const customEmitter = new EventEmitter()
// on listens to the event
// and emit emits the events , executes
// on ==> emit follow this order

// customEmitter.on('response',(name,id)=>{
//     console.log(`data recieved ${name} and id ${id}`);
// })
// customEmitter.on('response',()=>{
//     console.log('some other logic');
// })

// customEmitter.emit('response','rishi',69)


// streams for larger data
// breaks the data into shunks and by default it breaks in 64 kb so we can change the buffer size by highwatermark

// const {createReadStream} = require('fs')
// const stream = createReadStream('./bigtext.txt',{highWaterMark:9000,encoding:'utf8'})

// stream.on('data',(result)=>{
//     console.log(result);
// })

// var http =require('http')
// var fs = require('fs')

// http
// .createServer(function (req,res){
//     // const text = fs.readFileSync('./bigtext.txt','utf8')
//     // res.end(text)
//     const fileStream = fs.createReadStream('./bigtext.txt','utf8')
//     fileStream.on('data',()=>{

//     })
//     fileStream.on('error',(err)=>{
//         res.end(fileStream)
//     })
// })
// .listen(5000)

// server http etc
// const http = require('http');
// const{readFileSync} = require('fs')
// const homepage = readFileSync('./navbar-app/index.html')
// const homeStyle = readFileSync('./navbar-app/styles.css')
// const homeImage = readFileSync('./navbar-app/logo.svg')
// const homeLogic = readFileSync('./navbar-app/browser-app.js')

// const server = http.createServer((req, res) => {
//     const url = req.url;
//   if (url === '/') {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.write(homepage);
//     res.end();
//   } else if (url === '/about') {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.write('<h1>about page</h1>');
//     res.end();
//   } else if (url === '/styles.css') {
//     res.writeHead(200, { 'content-type': 'text/css' });
//     res.write(homeStyle);
//     res.end();
//   } else if (url === '/logo.svg') {
//     res.writeHead(200, { 'content-type': 'image/svg+xml' });
//     res.write(homeImage);
//     res.end();
//   }else if (url === '/browser-app.js') {
//     res.writeHead(200, { 'content-type': 'text/js' });
//     res.write(homeLogic);
//     res.end();
//   }
  
  
//   else {
//     res.writeHead(404,{'status-text':'not dunda'}, { 'content-type': 'text/html' });
//     // res.write('<h1>page not found</h1>');
//     res.end();
//   }
// });

// server.listen(5000);

//express it has built in http response
// const express = require('express')

// const app = express()


// app.get('/',(req,res)=>{
//     res.status(200).send('home page')

// })
// app.get('/about',(req,res)=>{
//     res.status(200).send("about page")
// })

// app.all('*',(req,res)=>{
//     res.status(404).send()
// })

// app.listen(5000,()=>{
//     console.log('server listening');
// })

// app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

// const express = require('express')
// const app = express();

// const path = require('path');


// app.use(express.static('./public'))


// path to the directory folder what not
// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))

// })

// app.get('*',(req,res)=>{
//     res.status(404).send('not found')
// })

// app.listen(5000,()=>{
//     console.log("fuck you");
// })

// express.js can be used for both APi(json data) and server side rendering SSR(entire html)

// Api

// const express = require('express')

// const app = express()

// const {products} = require('./data') 

// app.get('/',(req,res)=>{
//     res.json(products)
// })

// app.listen(5000,()=>{
//     console.log("fuck you");

// })

// query is something we write after ? in url place its not url url stops at ? we use it for searching etc

// const express = require('express')
// const app = express()
// const { products } = require('./data')

// app.get('/', (req, res) => {
//   res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
// })
// app.get('/api/products', (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product
//     return { id, name, image }
//   })

//   res.json(newProducts)
// })
// app.get('/api/products/:productID', (req, res) => {
//   // console.log(req)
//   // console.log(req.params)
//   const { productID } = req.params

//   const singleProduct = products.find(
//     (product) => product.id === Number(productID)
//   )
//   if (!singleProduct) {
//     return res.status(404).send('Product Does Not Exist')
//   }

//   return res.json(singleProduct)
// })

// app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
//   console.log(req.params)
//   res.send('hello world')
// })

// app.get('/api/v1/query', (req, res) => {
//   // console.log(req.query)
//   const { search, limit } = req.query
//   let sortedProducts = [...products]

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search)
//     })
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit))
//   }
//   if (sortedProducts.length < 1) {
//     // res.status(200).send('no products matched your search');
//     return res.status(200).json({ sucess: true, data: [] })
//   }
//   res.status(200).json(sortedProducts)
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })

// we cant use two res statements in the same spot coz once the data is sent to the client side it doesnt send again


// middleware in express they are functions that execute during request to server request response subject
// const express = require('express')
// const app = express()

// // req = middleware => res


// const logger = (req,res,next)=>{

//     const method = req.method
//     const time = new Date().getFullYear()
//     const url = req.url
//     console.log(method,url,time)
//     // middleware uses next()parameter in order to send us to the next page and we can put anyting in middleware gor eg
//     // console.log('testing') 
//     next()  // passes to the home page
// }



// const express = require('express')
// const app = express()
// const logger = require('./logger')
// const author = require('./author')
// //  req => middleware => res
// app.use([logger, author])
// // api/home/about/products
// app.get('/', (req, res) => {
//   res.send('Home')
// })
// app.get('/about', (req, res) => {
//   res.send('About')
// })
// app.get('/api/products', (req, res) => {
//   res.send('Products')
// })
// app.get('/api/items', (req, res) => {
//   console.log(req.user)
//   res.send('Items')
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })



// app.get('/',logger,(req,res)=>{

//     res.send("home page")
// })

// app.get('/about',logger,(req,res)=>{
//     res.send("about page")
// })


// app.listen(5000,()=>{
//     console.log("hi");
// })


const express = require('express')
const app = express()

let{people} = require('./data')


//always follow the order req, res**********************************************************************************************88

// get means request of the data

//(static is sometimes middleware too)  eg of middleware is morgan thirs party middlweare for logging



/*

http methods are get put post delete 
for get server doesnt have to send the body along with it 
but for post we have to provide the body

*/


// app.use(express.static('./methods-public'))

// app.use(express.urlencoded({extended:false}))
// //urlencoded is a middleware which parses the incoming request with url & payload

// app.use(express.json())


// //server method form
// app.get('/api/people',(req,res)=>{
//     res.status(200).json({success:true,data:people})
// })

// // javascript method in js.html  axios(async) is used when the server gets the req http we are getting back object and we can filter that object
// // cant persist data coz no database

// app.post('/api/people',(req,res)=>{
//     const {name} = req.body
//     if(!name){
//         return res.status(400).json({success:false,msg:'provide value'})
//     }
//     res.status(201).json({success:true, person:name})
// })

// app.post('/login',(req,res)=>{
//     console.log(req.body)
//     const {name} = req.body;
//     if(name){
//         return res.status(200).send(`welcome ${name}`)
//     }
//     res.status(401).send('please send name')
// })


// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })

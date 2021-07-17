const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

const { ServiceBroker } = require("moleculer");

// Create a ServiceBroker
const broker = new ServiceBroker();
/*
var dict={};
broker.createService({
    name: "reg",
    actions: {
        add(ctx) {
            dict[1]=ctx.url;
            return 0;
        }
    }
});




// Define a service
broker.createService({
    name: "math",
    actions: {
        add(ctx) {
            return Number(ctx.params.a) + Number(ctx.params.b);
        }
    }
});




// Start the broker
broker.start()
    // Call the service
    .then(() => broker.call("math.add", { a: 5, b: 3 }))
    // Print the response
    .then(res => console.log("5 + 3 =", res))
    .catch(err => console.error(`Error occured! ${err.message}`));
*/

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/register',(req,res)=>{
    res.render('register')

});

app.get('/list',(req,res)=>{
    res.render('list')
});

app.get('/update',(req,res)=>{
    res.render('update')
});

app.get('/delete',(req,res)=>{
    res.render('delete')
});

app.get('/ip',(req,res)=>{
    res.send('ip i guess')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
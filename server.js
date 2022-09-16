const express = require("express");
const dotenv = require("dotenv").config();
const { Client } = require("@notionhq/client")
const port= 5000 || process.env.PORT;
const getBooks = require('./controllers/getBooks');


const app = express();

// app.use(expressLayouts)
app.set('view engine','ejs')

app.get('/', async (req,res) =>{
    try{
        const books = await getBooks()

        res.render('index',{books:books})

    }catch(err){
        console.log(err)
    }
})
app.listen(port,() => console.log(`Server is running on port ${port}`))


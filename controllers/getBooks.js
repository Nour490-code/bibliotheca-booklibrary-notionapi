const dotenv = require("dotenv").config();
const { Client } = require("@notionhq/client")


const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

module.exports = async function getBooks (){
    const databaseId = process.env.NOTION_DB_ID;
    const {results} = await notion.databases.query({
      database_id: databaseId,
    });

    const books = results.map((book) => {
        return{
            id: book.id,
            name: book.properties.Name.title[0].text.content,
            author: book.properties.Author.rich_text[0].text.content,
            code: book.properties.Code.rich_text[0].text.content,
            date: book.properties.Date.date.start,
            readTill: book.properties.Read.rich_text[0].text.content,
        }
    })
    return books
  }
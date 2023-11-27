const express = require("express"); 
const app = express(); 
const path = require("path");
const publicPath = path.join(__dirname, "public");
const globalConstants = require("./const/globalConstants")

app.set('view engine', 'ejs');
app.use(express.static(publicPath));

const mainRouter = require("./routes/mainRouter")

app.use("/", mainRouter)

app.use((req, res, next) => {
    res.status(404).render('notFound')
})

const PORT = globalConstants.PORT

app.listen(PORT, () => {
    return console.log(`Server has been created in port ${PORT}`)
})
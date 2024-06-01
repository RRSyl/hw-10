const express = require('express');
const port = 3000;
const router = require("./routes");
const path = require("path")

const app = express();
app.use(express.json());


app.use(express.urlencoded({extended:true}))
router.use("/uploads",express.static(path.join(__dirname,"/uploads")))
app.use(router)

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})




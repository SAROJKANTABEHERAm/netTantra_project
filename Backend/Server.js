const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userdb"
});

//connecct to the database
connection.connect(function (err) {
    if (err) throw err
    else console.log("connected to the database successfull");
})

app.get("/", function (req, res) {
    res.send("<h1> This is Backend Part ok</h1>");
})

app.post("/register", function (req, res) {
    useremail = req.body.useremail;
    password = req.body.password;

    var sql = "INSERT INTO `usertable` (`user`, `password`) VALUES ('" + useremail + "','" + password + "')"

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
})

app.post("/requestSend", function (req, res) {
    pickDate = req.body.pickDate
    topwear = req.body.topwear
    bottomwear = req.body.bottomwear
    clothtype = req.body.clothtype
    other = req.body.other
    contact = req.body.contact
    description = req.body.desc

    var sql = "INSERT INTO `request` (`pickupdate`,`topwear`,`bottomwear`,`woolencloth`,`other`,`contact`,`description`) VALUES ('" + pickDate + "', '" + topwear + "', '" + bottomwear + "', '" + clothtype + "', '" + other + "', '" + contact + "', '" + description + "')"

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted into requestTable");
    });

})

app.post("/userlogin", function (req, res) {

    var useremail = req.body.useremail;
    var password = req.body.password;

    console.log("req body " + req);

    connection.query("select * from usertable where user = ? and password = ?", [useremail, password], function (error, results, fields) {
        console.log("results " + results);
        if (results.length > 0) {
            // res.sendFile(__dirname + "../src/App.js");
            console.log("Login successfull");
        } else {
            console.log("error " + error);
        }
        res.end();
    })
})

const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
    auth: {
        user: 'makemidetesting00@gmail.com',
        pass: 'zrpicqoruxezkzef',
    },
    secure: true,
});

app.post('/text-mail', (req, res) => {
    const { to, subject, text } = req.body;
    const mailData = {
        from: 'makemidetesting00@gmail.com',  // sender address
        to: to,   // list of receivers
        subject: subject,
        text: text,
        html: '<b>Hey there! </b> <br> <p> This is out first message send with Nodemailer </p>'
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            return console.log(err)
        res.status(200).send({ message: "Mail Send", message_id: info.messageId });
    });
})


app.post('/laundry_request', (req, res) => {
    const { pickupdate, topwear, bottomwear, needs, clothtype, othertype, contact, description } = req.body;

    console.log(req.body);

})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
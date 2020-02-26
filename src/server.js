var express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
var app = express()

const port = 4000;

const router = express.Router()

const routes = require('./routes');

const Profile = require('./models/Profile');
const ProfileController = require('./controllers/ProfileController');

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
})

mongoose.connect('mongodb+srv://ninja:Ninj4@cluster0-y3qpm.mongodb.net/hottest?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(bodyParser.json())
// app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(routes);

var ingredients = [
    {
        "id": "234kjw",
        "text": "Eggs"
    },
    {
        "id": "as82w",
        "text": "Milk"
    },
    {
        "id": "234sk1",
        "text": "Bacon"
    },
    {
        "id": "ppo3j3",
        "text": "Frog Legs"
    }
];

app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

app.get('/', (req, res) => res.send('Hello World!'))



app.get('/ingredients', function(req, res) {
    console.log("GET From SERVER");
    res.send(ingredients);
})

app.post('/ingredients', function(req, res) {
    var ingredient = req.body;
    console.log(req.body);
    ingredients.push(ingredient);
    res.status(200).send("Successfully posted ingredient");
})

// app.listen(4000)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
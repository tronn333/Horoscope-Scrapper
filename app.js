const express = require('express')
const logger = require('morgan')
const app = express()
const indexRouter = require('./routes/index')
const path = require('path')

app.set('view engine','hbs')
app.use(logger('dev'))
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', indexRouter)


app.listen(
  6969,
  () => {
    console.log(`Server port 6969`);
    mongoose.connect('mongodb://localhost:27017/assesment', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }, () => {
      console.log('Base');
    });
  }
);
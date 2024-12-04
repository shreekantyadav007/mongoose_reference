const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/routes')

const app = express()

app.use(cors())
app.use(express.json())

const MONGODB_URI =
  "mongodb+srv://officePc:Ewsl7PZcOLC4zFyT@cluster0.wn4j5.mongodb.net/Blog";

mongoose.connect(MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err))

app.use('/api',routes)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    });


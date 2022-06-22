import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/employee-routes';

// variable declaration
const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sap_db', { useNewUrlParser: true });


// configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

routes(app);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})

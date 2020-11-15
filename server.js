import express from 'express';
import 'babel-polyfill';
import cors from 'cors';
import config from './config';
import usersRoute from './app/routes/user';

const app = express();

// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Add middleware for parsing JSON and urlencoded data and populating `req.body`
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', usersRoute);


app.listen(config.port).on('listening', () => {
  console.log(`🚀 are live on ${config.port}`);
});


export default app;

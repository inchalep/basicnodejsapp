const express = require('express');
const Routes = require('./routes');

const App = express();
const port = 8000;
// App.use('/', (req, res) => {
//   res.json({ message: 'Welcome to mysql node js demo app' });
// });

App.use('/', Routes.userRoute);

App.listen(port, (eror) => {
  console.log('Connected');
});

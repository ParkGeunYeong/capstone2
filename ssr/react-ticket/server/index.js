const express = require('express');
const app = express();
const render = require('./render/index');

app.use(express.static(__dirname+'/../build'));
app.get('*', async (req, res, next) => {
    try {
      var page = await render.renderPage(req);
      console.log(page);
      return res.send(page);
    } catch(err) {
      next(err); // error
    }
  }
);
  
  app.listen(3001, function () {
    console.log('listening on port 3001!');
  });
  
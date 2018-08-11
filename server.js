let express = require('express');

let app = express();

app.use(express.static('build'));
app.get('*',function (req, res) {
    res.redirect('/');
});

app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});

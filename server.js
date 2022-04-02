const app = require('./app.js');
const port = 5555;




app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});

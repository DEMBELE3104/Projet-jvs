const express = require('express'); 
const app = express(); 
const port = 3000;

app.listen(port, () => { console.log(`Listening on http://localhost:${port}`)
});

app.get('/', (req, res) => { res.send('Hello World');
});

app.use(express.static('public'));
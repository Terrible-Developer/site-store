const express = require('express');

const app = express();

const history = require('connect-history-api-fallback');

app.use(history());
app.use(express.static('dist'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`testing, running on port ${process.env.PORT || 3000}`);
});

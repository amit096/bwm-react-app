const express = require('express');;
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.json({ success: true });
})

app.listen(PORT, () => {
    console.log(`node is running at port ${PORT}`)
});
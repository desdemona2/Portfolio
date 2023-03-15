const express = require('express');
const path = require('path');

const app = express();
// Path to static files (javascript or css)
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/public/images', express.static(path.join(__dirname, 'public', 'images')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

const PORT = process.env.PORT || 5400;
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});

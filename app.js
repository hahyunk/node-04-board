/* node_modules */
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

/*modules */
const { pool } = require('./modules/mysql_conn')
const boardRouter = require('./routes/board');
const galleryRouter = require('./routes/gallery');
/* server */
app.listen(process.env.PORT, () => {
		console.log(`http://127.0.0.1:${process.env.PORT}`);
});
/* Initialize */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.locals.pretty = true;

/* middleware ===여기서부터는 request가 지나가는곳*/
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* routers */
app.use('/', express.static(path.join(__dirname, './public')));

app.use('/board', boardRouter);
app.use('/gallery', galleryRouter);

/*예외처리  */
app.use((req, res, next) => {
		const err = new Error();

})
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const {decodeToken} = require("./middlewares")
const productRoute = require("./app/product/router");
const categoryRoute = require("./app/category/router");
const tagRoute = require("./app/tag/router");
const authRoute = require("./app/auth/router");
const deliveryAddressRoute = require("./app/deliveryAddress/router");
const cartRoute = require("./app/cart/router");
const orderRoute = require("./app/order/router");
const invoiceRoute = require("./app/invoice/router");
const landingRoute = require("./app/landing/router")
const galleryRoute = require ("./app/gellery/router")
const hasilRoute = require ("./app/hasil/router")
const keunggulanRoute = require ("./app/keunggulan/router")
const testimoniRoute = require ("./app/testimoni/router")
const datadaftarRoute = require ("./app/dataDaftar/router")
const dataulasanRoute = require ("./app/dataUlasan/router")
const bimbelpendidikanRoute = require ("./app/bimbel-pendidikan/router")
const privatmahasiswaRoute = require ("./app/privat-mahasiswa/router")
const agamaislamRoute = require ("./app/agama-islam/router")
const privatKomRoute = require ("./app/privat-kom/router")
const privatMusikRoute = require ("./app/privat-musik/router")
const privatUtbkRoute = require ("./app/privat-utbk/router")
const privatBipaRoute = require ("./app/privat-bipa/router")
const snbtRoute = require ("./app/kesulitan-snbt/router")


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(decodeToken());


app.use("/api", cartRoute)
app.use("/auth", authRoute)
app.use("/api", productRoute)
app.use("/api", categoryRoute)
app.use("/api", tagRoute)
app.use("/api", deliveryAddressRoute)
app.use("/api", orderRoute)
app.use("/api", invoiceRoute);
app.use("/api", landingRoute)
app.use("/api", galleryRoute)
app.use("/api", hasilRoute)
app.use("/api", keunggulanRoute)
app.use("/api", testimoniRoute)
app.use("/api", datadaftarRoute)
app.use("/api", dataulasanRoute)
app.use("/api", bimbelpendidikanRoute)
app.use("/api", privatmahasiswaRoute)
app.use("/api", agamaislamRoute)
app.use("/api", privatKomRoute)
app.use("/api", privatMusikRoute)
app.use("/api", privatUtbkRoute)
app.use("/api", privatBipaRoute)
app.use("/api", snbtRoute)

//home
app.use("/", function(req, res) {
  res.render("index", {
    title: "Kadek API Service (Error Page)"
  })
})

// running
// app.listen(process.env.PORT || 8000, () => console.log("Server: http://localhost:8000"))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
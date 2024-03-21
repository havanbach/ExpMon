const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sinhvienRoute = require('./routes/sinhvienRoute');

const app = express();//tạo đói tượng mới
//kết nối mongodb
mongoose.connect('mongodb+srv://bachhvph30898:havanbach0112@cluster0.j658u1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("kết nối thành công với server");
}).catch((err)=>{
    console.error(err);
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
//sử dụng Route
app.use('/',sinhvienRoute);
//gọi đến file ejs
app.set('view engine','ejs');
//tạo port
const PORT = process.env.PORT || 5000;
//chạy server
app.listen(PORT,()=>{
    console.log("Server đang chạy ở cổng 5000");
})
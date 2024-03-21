//import thư viện

const express = require('express');
const mailer = require('nodemailer');
const app = express();//tạo đối tượng server
//tạo transporter
let transporter = mailer.createTransport({
    service:'gmail',
    auth:{
        user:'beckneee@gmail.com',
        pass:'woln fafq wmfh nwqh'
    }
});
//gửi email
let mailOption = {
    from:'beckneee@gmail.com',
    to:'bachhvph30898@fpt.edu.vn',
    subject:'test email',
    text:'Đây là mail test'
};
//gửi email
transporter.sendMail(mailOption,(erro,info)=>{
    if (erro) {
        console.error(erro);
    }
    else{
        console.log('Thành công: '+info.messageId);
    }
});
//Khởi động máy chủ
app.listen(3004,()=>{
    console.log('Server đang chạy ở cổng 3004');
})


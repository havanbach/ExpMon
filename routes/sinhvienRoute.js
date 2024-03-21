const express = require('express');
const router = express.Router();
const sinhvien = require('../models/sinhvienModel');
//get(select)
//http://localhost:5000/
router.get('/',async(req,res)=>{
    try {
        const sinhviens = await sinhvien.find();//lấy về toàn bộ sinh viên có trong bảng
        res.render('sinhviens', { sinhviens: sinhviens }); // Truyền mảng sinhviens vào tệp mẫu
        console.log(sinhviens);
    } catch (error) {
        console.error(error);
        res.json({error : error});
    }
});
//post (new sinhvien)
//http://localhost:5000/sinhvien
router.post('/',async(req,res)=>{
    try {
        const {id,name} = req.body;//lấy dữ liệu người dùng nhập từ React Native
        const sinhvien1 = new sinhvien({id,name});//tạo đói tuonwjng mới với dữ liệu user nhập
        await sinhvien1.save();//lưu vào bảng dữ liệu
        res.json(sinhvien1);//trả về kết quả
        console.log(sinhvien1);
    } catch (error) {
        console.error(error);
        res.json({error : error}) ;
    }
});
//put (update)
//http://localhost:5000/sinhvien/:_id
router.put('/:_id',async(req,res)=>{
    try {
        const {id,name} = req.body;//lấy dữ liệu người dùng nhập từ React Native
        const updatesinhvien = await sinhvien.findByIdAndUpdate(_id,{id,name},{new:true});
        res.json(updatesinhvien);
        console.log(updatesinhvien);
    } catch (error) {
        console.error(error);
        res.json({error : error}) ;
    }
});
//delete(xóa)
//http://localhost:5000/sinhvien/:_id
router.delete('/:_id',async(req,res)=>{
    try {
        const deletesinhvien = await sinhvien.findByIdAndDelete(_id);
        res.json(deletesinhvien);
        console.log(deletesinhvien);
    } catch (error) {
        console.error(error);
        res.json({error : error});
    }
});
module.exports = router;
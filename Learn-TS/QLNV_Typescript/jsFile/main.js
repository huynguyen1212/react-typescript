"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var NhanVien_1 = require("./NhanVien");
var DanhSachNhanVien_1 = require("./DanhSachNhanVien");
var dsnv = new DanhSachNhanVien_1.DanhSachNhanVien();
function ThemNhanVien() {
    //Lấy dữ liệu người dùng nhập vào
    var manv = parseInt(document.getElementById("manv").value);
    var hoten = document.getElementById("hoten").value;
    var luongcb = parseInt(document.getElementById("luongcb").value);
    var loainv = 1;
    var rdbLoaiNhanVien = document.getElementsByClassName("loainv");
    // for thường
    // for(let i = 0; i < rdbLoaiNhanVien.length; i++) {
    //     let rdbCheck = rdbLoaiNhanVien[i];
    //     if (rdbCheck.checked) {
    //         loainv = rdbCheck.value;
    //     }
    // }
    //for of
    for (var _i = 0, rdbLoaiNhanVien_1 = rdbLoaiNhanVien; _i < rdbLoaiNhanVien_1.length; _i++) {
        var rdbCheck = rdbLoaiNhanVien_1[_i];
        if (rdbCheck.checked) {
            loainv = rdbCheck.value;
        }
    }
    //Khởi tạo đối tường nhân viên
    var nhanvien = new NhanVien_1.NhanVien(manv, hoten, luongcb, loainv);
    //Thêm nhân viên vào danh sách nhân viên
    dsnv.ThemNhanVien(nhanvien);
    //Cập nhập danh sách sinh viên
    CapNhapDanhSachNhanVien();
}
//Thêm sự kiện cho nút button
(_a = document.getElementById("btnThemNhanVien")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ThemNhanVien);
function CapNhapDanhSachNhanVien() {
    //dom đến tbodydsNhanVien
    var tblDanhSachNhanVien = document.getElementById("tbodyDanhSachSinhVien");
    //Clear
    tblDanhSachNhanVien.innerHTML = "";
    for (var _i = 0, _a = dsnv.DanhSachNhanVien; _i < _a.length; _i++) {
        var nv = _a[_i];
        //tao td
        var tdMaNV = TaoTD("MaNV", nv.MaNV);
        var tdHoTen = TaoTD("HoTen", nv.HoTen);
        var tdLuongCB = TaoTD("LuongCB", nv.LuongCB);
        var tdLoaiNV = TaoTD("LoaiNV", nv.LayTenLoaiNhanVien());
        var tdTongLuong = TaoTD("TongLuong", nv.TinhLuongNV());
        //tạo tr
        var trNhanVien = document.createElement("tr");
        trNhanVien.appendChild(tdMaNV);
        trNhanVien.appendChild(tdHoTen);
        trNhanVien.appendChild(tdLuongCB);
        trNhanVien.appendChild(tdLoaiNV);
        trNhanVien.appendChild(tdTongLuong);
        tblDanhSachNhanVien.appendChild(trNhanVien);
    }
}
function TaoTD(className, value) {
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
}
//# sourceMappingURL=main.js.map
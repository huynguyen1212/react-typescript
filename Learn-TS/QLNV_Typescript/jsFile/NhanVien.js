"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NhanVien = void 0;
var NhanVien = /** @class */ (function () {
    //Hàm khởi tạo
    function NhanVien(manv, hoten, luongcb, loainv) {
        this.MaNV = manv;
        this.HoTen = hoten;
        this.LuongCB = luongcb;
        this.LoaiNV = loainv;
    }
    NhanVien.prototype.TinhLuongNV = function () {
        var tongLuong = 0;
        switch (this.LoaiNV) {
            case 1:
                {
                    tongLuong = this.LuongCB;
                }
                ;
                break;
            case 2:
                {
                    tongLuong = this.LuongCB * 1.5;
                }
                ;
                break;
            case 3:
                {
                    tongLuong = this.LuongCB * 3;
                }
                ;
                break;
            default:
                {
                    tongLuong = this.LuongCB;
                }
                ;
                break;
        }
        return tongLuong;
    };
    NhanVien.prototype.LayTenLoaiNhanVien = function () {
        switch (this.LoaiNV) {
            case 1:
                {
                    return "Nhân viên thường";
                }
                ;
            case 2:
                {
                    return "Quản Lí";
                }
                ;
            case 3:
                {
                    return "Sếp";
                }
                ;
            default:
                {
                    return "Nhân viên thường";
                }
                ;
        }
    };
    return NhanVien;
}());
exports.NhanVien = NhanVien;
//# sourceMappingURL=NhanVien.js.map
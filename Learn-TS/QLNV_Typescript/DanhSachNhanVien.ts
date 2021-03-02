import { NhanVien } from "./NhanVien";

export class DanhSachNhanVien {
    public DanhSachNhanVien: Array<NhanVien> = [];
    constructor() {

    }
    //thêm nhân viên
    public ThemNhanVien(NhanVienThem: NhanVien) {
        this.DanhSachNhanVien.push(NhanVienThem);
    }
}
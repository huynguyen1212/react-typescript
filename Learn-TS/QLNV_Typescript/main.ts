import { NhanVien } from "./NhanVien";
import { DanhSachNhanVien } from "./DanhSachNhanVien";

let dsnv = new DanhSachNhanVien();

function ThemNhanVien() {
    //Lấy dữ liệu người dùng nhập vào
    let manv: number = parseInt((<HTMLInputElement>document.getElementById("manv")).value);
    let hoten: string = (<HTMLInputElement>document.getElementById("hoten")).value;
    let luongcb: number = parseInt((<HTMLInputElement>document.getElementById("luongcb")).value);
    let loainv: number = 1;
    let rdbLoaiNhanVien: any = document.getElementsByName("loainv");

    // for thường
    // for(let i = 0; i < rdbLoaiNhanVien.length; i++) {
    //     let rdbCheck = rdbLoaiNhanVien[i];
    //     if (rdbCheck.checked) {
    //         loainv = rdbCheck.value;
    //     }
    // }

    //for of
    for (let rdbCheck of rdbLoaiNhanVien) {
        if (rdbCheck.checked) {
            loainv = parseInt(rdbCheck.value);
        }
    }

    //Khởi tạo đối tường nhân viên
    let nhanvien = new NhanVien(manv, hoten, luongcb, loainv);
    //Thêm nhân viên vào danh sách nhân viên
    dsnv.ThemNhanVien(nhanvien);
    //Cập nhập danh sách sinh viên
    CapNhapDanhSachNhanVien();
}

//Thêm sự kiện cho nút button
document.getElementById("btnThemNhanVien")?.addEventListener("click", ThemNhanVien);

function CapNhapDanhSachNhanVien() {
    //dom đến tbodydsNhanVien
    let tblDanhSachNhanVien: any = document.getElementById("tbodyDanhSachSinhVien");
    //Clear
    tblDanhSachNhanVien.innerHTML = "";
    for (let nv of dsnv.DanhSachNhanVien) {
        //tao td
        let tdMaNV: any = TaoTD("MaNV", nv.MaNV);
        let tdHoTen: any = TaoTD("HoTen", nv.HoTen);
        let tdLuongCB: any = TaoTD("LuongCB", nv.LuongCB);
        let tdLoaiNV: any = TaoTD("LoaiNV", nv.LayTenLoaiNhanVien());
        let tdTongLuong: any = TaoTD("TongLuong", nv.TinhLuongNV());

        //tạo tr
        let trNhanVien = document.createElement("tr");
        trNhanVien.appendChild(tdMaNV);
        trNhanVien.appendChild(tdHoTen);
        trNhanVien.appendChild(tdLuongCB);
        trNhanVien.appendChild(tdLoaiNV);
        trNhanVien.appendChild(tdTongLuong);

        tblDanhSachNhanVien.appendChild(trNhanVien);
    }
}

function TaoTD(className: any, value: any) {
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
}
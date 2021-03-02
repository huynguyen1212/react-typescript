export class NhanVien {
  public MaNV: number;
  public HoTen: string;
  public LuongCB: number;
  public LoaiNV: number;

  //Hàm khởi tạo
  constructor(manv: number, hoten: string, luongcb: number, loainv: number) {
    this.MaNV = manv;
    this.HoTen = hoten;
    this.LuongCB = luongcb;
    this.LoaiNV = loainv;
  }

  public TinhLuongNV(): number {
    let tongLuong: number = 0;
    switch (this.LoaiNV) {
      case 1: { tongLuong = this.LuongCB }; break;
      case 2: { tongLuong = this.LuongCB * 1.5 }; break;
      case 3: { tongLuong = this.LuongCB * 3 }; break;
      default: { tongLuong = this.LuongCB }; break;
    }
    return tongLuong;
  }

  public LayTenLoaiNhanVien(): string {
    switch (this.LoaiNV) {
      case 1: { return "Nhân viên thường" };
      case 2: { return "Quản Lí" };
      case 3: {return "Sếp" };
      default: { return "Nhân viên thường" };
    }
  }
}

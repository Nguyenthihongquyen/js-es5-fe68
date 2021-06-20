function SinhVien(
  _ma,
  _ten,
  _email,
  _matKhau,
  _ngaySinh,
  _khoaHoc,
  _dToan,
  _dLy,
  _dHoa
) {
  this.ma = _ma;
  this.ten = _ten;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngaySinh = _ngaySinh;
  this.khoaHoc = _khoaHoc;
  this.diemToan = _dToan;
  this.diemLy = _dLy;
  this.diemHoa = _dHoa;

  this.tinhDTB = function () {
    return (
      (parseFloat(this.diemToan) +
        parseFloat(this.diemLy) +
        parseFloat(this.diemHoa)) /
      3
    );
  };
}
//khởi tạo 1 đối tượng sinh viên từ đối tượng SinhVien

var sv1 = new SinhVien(
  "sv1",
  "Quyen",
  "Q@gmail.com",
  "mk1234",
  "06/10",
  "FE68",
  4,
  5,
  6
); //sv1 được gọi là 1 cái instant (thể hiện của lớp đối tượng SinhVien)
console.log(sv1);
var sv2 = new SinhVien();

console.log(sv2);

//Cách hoạt động gồm 4 bước
//- tạo ra 1 object rỗng (empty object)
//-gọi func SinhVien và đồng thời gán object rỗng được tạo ở bước 1 vào biến this
//- trỏ object rỗng (bước 1) đến object prototype trong construct func (SinhVien)
//- return về object rỗng được tạo ra ở bước 1

var _sinhVien = function (ma, ten, lop) {
  var emptyObject = {};
  var _this = emptyObject;

  _this.ma = ma;
  _this.ten = ten;
  _this.lop = lop;

  return emptyObject;
};
var sv3 = _sinhVien("1", "Tay", "2");
console.log(sv3);
/*  -regular function là func nằm bên ngoài (thuộc global object <ở browser chính là window object>) 1
    -'new' 

*/

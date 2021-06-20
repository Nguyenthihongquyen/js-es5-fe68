var getEle = function (id) {
  return document.getElementById(id);
};

var hienThiThongTin = function () {
  //lay thong tin nguoi dung nhap
  /*debugger;*/

  var _maSV = getEle("txtMaSV").value;

  var _tenSV = getEle("txtTenSV").value;
  var _hoanCanh = getEle("loaiSV").value;
  var _diemToan = getEle("txtDiemToan").value;
  var _diemVan = getEle("txtDiemVan").value;
  console.log(_maSV);
  /* 
khởi tạo đối tượng sinh viên
*/
  var sinhVien = {
    maSV: _maSV, //hoặc có thể viết như này nếu đặt giống nhau maSV,
    tenSV: _tenSV,
    hoanCanh: _hoanCanh,
    diemToan: _diemToan,
    diemVan: _diemVan,

    tinhDTB() {
      console.log(this);
      return (Number(this.diemToan) + Number(this.diemVan)) / 2;
      /* return (number(sinhVien.diemToan)+number(sinhVien.diemVan))/2; */
    },
    xepLoai(dtb) {
      var loai = "";
      if (dtb >= 8 && dtb <= 10) {
        loai = "Gioi";
      } else if (dtb < 8 && dtb >= 6.5) {
        loai = "kha";
      } else if (dtb >= 5 && dtb < 6.5) {
        loai = "Trung Binh";
      } else {
        loai = "yeu";
      }
      return loai;
    },
    //func làm phương thức của object thì cần dùng con trỏ this để trỏ tới thuộc tính trong object này
  };

  //hien thi thong tin
  var dtb = sinhVien.tinhDTB();

  getEle("spanTenSV").innerHTML = sinhVien.tenSV;
  getEle("spanMaSV").innerHTML = sinhVien.maSV;
  getEle("spanLoaiSV").innerHTML = sinhVien.hoanCanh;
  getEle("spanDTB").innerHTML = dtb;
  getEle("spanXepLoai").innerHTML = sinhVien.xepLoai(dtb);
}; //Giữ phím alt và trỏ chuột tới để gõ đồng bộ

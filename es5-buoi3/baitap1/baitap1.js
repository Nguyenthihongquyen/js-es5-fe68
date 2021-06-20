var getEle = function (id) {
  return document.getElementById(id);
};

var tinhDTB = function (dToan, dVan) {
  return (parseFloat(dToan) + parseFloat(dVan)) / 2;
};
var xepLoai = function (dtb) {
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
};
var hienThiThongTin = function () {
  //lay thong tin nguoi dung nhap
  /*debugger;*/

  var maSV = getEle("txtMaSV").value;

  var tenSV = getEle("txtTenSV").value;
  var hoanCanh = getEle("loaiSV").value;
  var diemToan = getEle("txtDiemToan").value;
  var diemVan = getEle("txtDiemVan").value;
  console.log(maSV);

  //hien thi thong tin
  var dtb = tinhDTB(diemToan, diemVan);

  getEle("spanTenSV").innerHTML = tenSV;
  getEle("spanMaSV").innerHTML = maSV;
  getEle("spanLoaiSV").innerHTML = hoanCanh;
  getEle("spanDTB").innerHTML = dtb;
  getEle("spanXepLoai").innerHTML = xepLoai(dtb);
};

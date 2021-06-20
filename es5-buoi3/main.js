var person = {
  //khai báo object
  /* có 2 thành phần: properites (thuộc tính) và methods (Phương thức), ko bắt buộc có cả 2 */
  //key: value,
  //--thuộc tính của đối tượng person
  name: "Tay",
  age: 18,
  class: "FE68",
  //--Phương thức của đt person
  greeting: function () {
    console.log("hello!");
  },
  //cách viết tắt note1
};

//--Truy xuất thuộc tính của đối tượng
//cách1
console.log(person.name);
console.log(person.greeting()); //nó ra undefined vì ko có return
//cach 2
var _age = "age";
console.log(person["age"]);
console.log(person[_age]);
//thay doi gia tri thuoc tinh
person.name = "dong";
person["name"] = "nam";
console.log(person);
//thêm thuộc tính mới vào object, nó sẽ có kèm 1 bước kiểm tra nếu có rồi thì sẽ update
person.height = 170;
console.log(person);
person.name = "bac";
console.log(person);
//Xoá thuộc tính trong object
delete person.height;

// //hoac
delete person["class"];
console.log(person);

//_______
var employee = {
  id: "1234",
  fullName: "Nguyen T H Q",
  email: "hongquyen@gmail,com",
  tinhLuong: function () {},
  tinhTongSoGioLam: function () {},

  tinhTongNgayNghi() {
    console.log("shorthand method");
  }, //note1
};

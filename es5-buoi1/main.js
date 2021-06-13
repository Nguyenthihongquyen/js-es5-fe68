//alert("hello world!"); // code bên dưới ko đc thực thi, chỉ chạy khi bấm tắt thông báo
console.log("hello world");

//bien và kiểu dữ liệu
//object và nguyên thuỷ- primitive (string,number, boolen, undefined, null, của es6 có thêm bigint, symbol)

var fullName = "QuyenQuyen";
console.log(typeof fullName); // ra kiểu dữ liệu của biến
var age = 18;
console.log(age); //số trong console có màu tím khác với tất cả khi built
age = "18";
console.log(typeof age);
var isStudent = true;
console.log(typeof isStudent);
var height;
console.log(typeof height);
var weight = null;
console.log(typeof weight);

//hằng số constant: lưu những giá trị không bao giờ thay đổi -> ko thể gán lại giá trị mới cho nó. Bắt buộc phải gán giá trị ngay lúc khởi tạo biến

const PI = 3.14;
console.log(PI);

/* câu điều kiện */
//if
//if else
//else if
//switch case

/*var isGirl = false;
if (isGirl) {
  console.log("u can accept this page!");
} else {
  alert("FBI warning!!");
}*/

/*var trafficLight = "red";
if (trafficLight == "green") {
  console.log("u can go!");
} else if (trafficLight == "yellow") {
  console.log("u must go slow!");
} else if (trafficLight == "red") {
  console.log("stop!");
} else {
  console.log("no power");
}*/

console.log(3 !== "3");
/* case ko tự động dừng được khi gặp điều kiện đúng mà nó chạy tiếp đến hết. cần thêm lệnh break cho nó */

var number = 1;
switch (number) {
  case 2:
    console.log("number is 2");
    break;
  case 1:
    console.log("number is 1");
  case 4:
    console.log("ké 1");
  case 5:
    console.log(
      "ké 1 lần nữa"
    ); /* đôi khi lệnh break dùng để chạy nhiều giá trị, chỉ ngắt khi cần chứ họ ko lập trình break sẵn */
    break;
  case 3:
    console.log("number is 3");
    break;
  default:
    console.log("ko xac dinh");
}

/* (Logical Operator: so sánh và) */
var A = true;
var B = false;
var C = false;
console.log(A || B || C);
/*  biểu thức điều kiện */

var A = 4;
var B = -3;
var result = A && B;
console.log(result);

// người ta hay lợi dụng thay thể cho câu if, hay dùng ở react
var isGirl = false;
var result = isGirl ?? "null";
console.log(result);

/*var result = isGirl && "hey Girl!";
console.log(result);*/

/* 3 loại Hàm trong js: declaration function, expresssion func, arrow func
//ko tham số ko giá trị trả về
// có ko
// có có
*/

function sayHi() {
  console.log("hi there!");
}
sayHi();

function sayHelloToSomeone(name) {
  console.log(name);
  console.log("Hello " + name);
}
sayHelloToSomeone("Quyen");

function calculatorGPA(score1, score2, score3) {
  var gpa = (score1 + score2 + score3) / 3;
  return gpa;
}
var _gpa = calculatorGPA(10, 6, 8);
console.log(_gpa);

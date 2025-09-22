// /*Hãy viết chương trình nhập vào một chuỗi s. 
// Nếu chuỗi s có độ dài >= 8, in ra màn hình console “Chuỗi này ok”. 
// Ngược lại, in ra “Ngắn quá, dài thêm tí nữa”.

// Hãy viết chương trình nhập vào một số a. 
// Nếu a >= 18, in ra màn hình console “Đủ 18 thì quẩy tiếp”. 
// Nếu a >= 16, in ra “Đợi thêm ít năm nữa”. Ngược lại, in ra “Còn quá nà trẻ”.*/


// /*const s = "Hello World";

// if(s.length >= 8) {
//     console.log('chuỗi này ok')
// } else ('Ngắn quá, dài thêm tí nữa')*/


// /*const a = 19;

// if(a >= 18) {
//     console.log('Đủ 18 thì quẩy tiếp');
// } else if (a >= 16) {
//     console.log('Còn quá nà trẻ');
// }*/




// /*Hãy tính tổng các số từ 1 đến 50.
// Hãy tính tổng các số chẵn từ -10 đến 50.
// Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// Hãy dùng while để in ra dãy số từ 1 đến 200.
// Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.
// Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x, giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.*/

// /*for(let i = 1; i <= 50; i++){
//     console.log(i);
// }*/

// /*for(let i = -10; i <= 50; i+=2){
//     console.log(i)
// }*/

// /*for(let i = -100; i <= 100; i++){
//     if(i % 9 === 0) console.log(i)
// }*/

// /*let i = 0;

// while (i < 200) {
//     console.log(i + 1);
//     i++;
// }*/



// /* const array = [1, 2, 3, 4, 5]
// array.unshift(0); //thêm 1 phần tử ở đầu mảng
// array.push(6); //thêm 1 phần tử ở cuối mảng
// array.shift(); //xóa 1 phần tử ở đầu mảng
// array.pop(); //xóa 1 phần tử ở cuối mảng

// console.log(array);
//  */


// /* Cho mảng sau: numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
// Tìm phần tử nhỏ nhất / lớn nhất trong mảng.
// Tính tổng các phần tử trong mảng.
// Tính trung bình cộng các phần tử trong mảng.
// Tìm phần tử đầu tiên chia hết cho 3 trong mảng.
// Tìm các phần tử là số nguyên tố trong mảng.
//  */

// // const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];

// // let min = numbers [0]
// // let max = numbers [0]

// // for(i = 0; i < numbers.length; i++) {
// //     if (numbers[i] < min) min = numbers [i];
// //     if (numbers[i] > max) max = numbers [i];
// // }

// // console.log("Min", min);
// // console.log("Max", max);

// // const students = [
// //     {
// //         id: '4i1z5sh6',
// //         name: 'Nguyễn Thị ch8',
// //         gender: 'nữ',
// //         age: 33,
// //         diemToan: 5,
// //         diemVan: 6,
// //         diemAnh: 7,
// //         languages: [ 'VI', 'JP', 'EN' ]
// //     },
// //     {
// //         id: 'k53hszmh',
// //         name: 'Nguyễn Văn fdm',
// //         gender: 'nam',
// //         age: 31,
// //         diemToan: 7,
// //         diemVan: 0,
// //         diemAnh: 6,
// //         languages: [ 'KR', 'FR', 'EN', 'JP' ]
// //     },
// //     {
// //         id: '3r4pwhyx',
// //         name: 'Nguyễn Văn 0qc',
// //         gender: 'nam',
// //         age: 27,
// //         diemToan: 4,
// //         diemVan: 1,
// //         diemAnh: 7,
// //         languages: [ 'JP', 'VI' ]
// //     },
// //     {
// //         id: 'o0dpqlb1',
// //         name: 'Nguyễn Thị per',
// //         gender: 'nữ',
// //         age: 28,
// //         diemToan: 7,
// //         diemVan: 9,
// //         diemAnh: 7,
// //         languages: [ 'KR', 'JP', 'VI', 'EN', 'FR' ]
// //     },
// //     {
// //         id: '7jyc57pv',
// //         name: 'Nguyễn Thị 6pp',
// //         gender: 'nữ',
// //         age: 34,
// //         diemToan: 8,
// //         diemVan: 3,
// //         diemAnh: 9,
// //         languages: [ 'VI', 'JP', 'EN', 'FR' ]
// //     },
// //     {
// //         id: 'ywrb40pr',
// //         name: 'Nguyễn Thị p3a',
// //         gender: 'nữ',
// //         age: 21,
// //         diemToan: 2,
// //         diemVan: 0,
// //         diemAnh: 6,
// //         languages: [ 'JP', 'EN' ]
// //     },
// //     {
// //         id: '7rjczx3r',
// //         name: 'Nguyễn Văn yku',
// //         gender: 'nam',
// //         age: 27,
// //         diemToan: 3,
// //         diemVan: 3,
// //         diemAnh: 1,
// //         languages: [ 'KR', 'CN', 'FR', 'EN', 'JP' ]
// //     },
// //     {
// //         id: '39uo7a8m',
// //         name: 'Nguyễn Văn nnj',
// //         gender: 'nam',
// //         age: 31,
// //         diemToan: 10,
// //         diemVan: 5,
// //         diemAnh: 6,
// //         languages: [ 'VI', 'JP', 'EN' ]
// //     },
// //     {
// //         id: '5g6bdkcn',
// //         name: 'Nguyễn Văn s7s',
// //         gender: 'nam',
// //         age: 35,
// //         diemToan: 4,
// //         diemVan: 9,
// //         diemAnh: 3,
// //         languages: [ 'VI', 'JP', 'EN', 'KR', 'CN' ]
// //     },
// //     {
// //         id: 'y80dazrj',
// //         name: 'Nguyễn Văn m8k',
// //         gender: 'nam',
// //         age: 21,
// //         diemToan: 10,
// //         diemVan: 5,
// //         diemAnh: 9,
// //         languages: [ 'FR', 'JP' ]
// //     },
// // ]

// //1. danh sách các học viên theo template 'Họ tên - Tuổi - Giới tính - học lực(TBC 3 môn TVA)
// // function StudentsList(student) {
// //     console.log(student.name,"-",student.gender,"-",student.age,"-",((student.diemToan + student.diemAnh + student.diemVan) / 3).toFixed(2));
// // }

// //     for (let i = 0; i < students.length; i++) {
// //         StudentsList(students[i]);
// //     }

// //2. in ra màn hình sinh viên nam có học lực >6.0. Tìm ra người điểm cao nhất, người điểm thấp nhất trong danh sách tìm được

// //3. thống kê có bao nhiêu học sinh nữ biết 2 thứ tiếng. Sắp xếp học lực theo thứ tự giảm dần của các sinh viên nữ đó
// //4. in ra thống kê trong list các ngôn ngữ vd: VI: 2 sinh viên, EN: 3 sinh viên,...


// // Quizzes
// // 1. Khai báo 1 đối tượng để mô tả bản thân bao gồm: tên, tuổi, địa chỉ, giới tính, sở thích (nhiều sở thích), chiều cao, cân nặng, tình trạng hôn nhân, số điện thoại.
// // let me = 
// //     {
// //         fullname: "Duong Tran Que Anh",
// //         age: 26,
// //         address: "Hanoi",
// //         gender: "Female",
// //         hobby: ["nghe nhac", "ngu", "game"],
// //         height: 157,
// //         weight: 60,
// //         is_married: false,
// //         phonenumber: "0123456789"
// //     };
// // // // 2. Khai báo 1 đối tượng là bạn trai/bạn gái của bạn: tên, tuổi, sự tốt bụng (1 - 10), nhà giàu (boolean).
// // let boyfriend =
// //     {
// //         fullname: "Nguyen Van A",
// //         age: 26,
// //         kindness: "5",
// //         isRich: true,
// //     };
// // // 3. Viết chương trình kiểm tra nếu tuổi của bạn và bạn gái (trai) đều lớn hơn 20, in ra màn hình “Tầm này cưới được rồi”. Ngược lại, in ra “Chờ thêm chút nữa”
// //     if (me.age > 20 && boyfriend.age > 20) {
// //         console.log("Tầm này cưới được rồi")
// //     } else {console.log("Chờ thêm chút nữa")};

// // Quizzes
// // 1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.
// function helloworld(name) {
//     console.log("Hello World," + name)
//  }
// helloworld("Que Anh")
// // 2. Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2 .
// function sum(a,b) {
//     return ((a + b) ** 2);
// }
// console.log(sum(2, 3));
// // 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.
// function inputa() {
//     let a;
//     do {
//         a = Number(prompt("number > 0"));
//     } while (a <= 0);
//     return a;
// }
// console.log(inputa());
// // Quizzes
// // 1. Khai báo 1 function nhận vào chuỗi slogan. Cứ sau mỗi 5 giây, in ra slogan đó kèm biến đếm counter bắt đầu từ 1.

// // 2. Hãy sử dụng phương thức map để biến đổi 1 mảng texts bao gồm các chuỗi thành 1 mảng textsLength có các phần tử là chiều dài tương ứng của từng chuỗi trong mảng texts.
 
 
// // Thực hành
// // 1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.
// // 2. Khai báo 1 function với đầu vào là 3 số a, b, c. Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.
// // 3. Khai báo 1 function với đầu vào là day, month, year. Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
// // 4. Cho bộ dữ liệu về users như sau: data.js
// // -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// // -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// // -Đếm số lượng user có age > 50.
// // -Đếm số lượng user đã kết hôn và chưa kết hôn.
// // -Đếm số lượng user theo từng ngành nghề tương ứng.
// //     Output:
// //     {
// //         "Dentist": 5,
// //         "Developer": 13,
// //         "Doctor": 6,
// //         "Farmer": 8,
// //         "Project Manager": 5,
// //         "Teacher": 9,
// //         "Worker" : 4
// //     }
 
// // 5. Xây dựng chương trình quản lý kho hàng như sau:
// // -Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
// // -Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.
// // ```jsx
 
// // const storage = {
// //     name: 'Fake Storage',
// //     address: 'HN',
// //     owner: 'Dung Tien',
// //     items: [
// //         {
// //             id: 1, name: 'Product 1', category: 'Furniture', pricce: 20
// //         },
// //         {
// //             id: 2, name: 'Product 2', category: 'Device', pricce: 110
// //         },
// //         {
// //             id: 3, name: 'Product 3', category: 'Cloth', pricce: 2
// //         },
// //     ]
// // }
// // jsx```
// // *Xây dựng chương trình tương tác với kho hàng. Nhập vào action là yêu cầu ứng với các thao tác:
// //     Action 1 -> Ý nghĩa: Sửa thông tin kho hàng
// //     Action 2 -> Ý nghĩa: Tạo mặt hàng trong kho
// //     Action 3 -> Ý nghĩa: Tìm kiếm mặt hàng
// //     Action 4 -> Ý nghĩa: Xóa mặt hàng
// // -Sau khi thực hiện xong mỗi thao tác, nhập lại action để thực hiện các thao tác khác.
// // -Mô tả chi tiết
// // +action = 1 → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
// // +action = 2 → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại. 
// // +action = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
// // +action = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.

// let users = [
//     {
//         id: 1,
//         first_name: "Kenton",
//         last_name: "Samples",
//         email: "ksamples0@washingtonpost.com",
//         gender: "Male",
//         age: 35,
//         job: "Worker",
//         country: "UK",
//         is_married: false,
//     },
//     {
//         id: 2,
//         first_name: "Marc",
//         last_name: "Jurries",
//         email: "mjurries1@flavors.me",
//         gender: "Female",
//         age: 54,
//         job: "Teacher",
//         country: "Vietnam",
//         is_married: false,
//     },
//     {
//         id: 3,
//         first_name: "Bruis",
//         last_name: "McBeath",
//         email: "bmcbeath2@cam.ac.uk",
//         gender: "Female",
//         age: 59,
//         job: "Developer",
//         country: "UK",
//         is_married: false,
//     },
//     {
//         id: 4,
//         first_name: "Kennett",
//         last_name: "Lammert",
//         email: "klammert3@sun.com",
//         gender: "Female",
//         age: 22,
//         job: "Dentist",
//         country: "Vietnam",
//         is_married: false,
//     },
//     {
//         id: 5,
//         first_name: "Feodora",
//         last_name: "Clemot",
//         email: "fclemot4@craigslist.org",
//         gender: "Female",
//         age: 46,
//         job: "Dentist",
//         country: "Vietnam",
//         is_married: false,
//     },
//     {
//         id: 6,
//         first_name: "Betta",
//         last_name: "Bittlestone",
//         email: "bbittlestone5@digg.com",
//         gender: "Female",
//         age: 15,
//         job: "Project Manager",
//         country: "Russia",
//         is_married: false,
//     },
//     {
//         id: 7,
//         first_name: "Tedda",
//         last_name: "Surfleet",
//         email: "tsurfleet6@shutterfly.com",
//         gender: "Male",
//         age: 19,
//         job: "Farmer",
//         country: "US",
//         is_married: true,
//     },
//     {
//         id: 8,
//         first_name: "Alva",
//         last_name: "Cathcart",
//         email: "acathcart7@twitter.com",
//         gender: "Female",
//         age: 28,
//         job: "Developer",
//         country: "Vietnam",
//         is_married: true,
//     },
//     {
//         id: 9,
//         first_name: "Francesca",
//         last_name: "Sprionghall",
//         email: "fsprionghall8@tumblr.com",
//         gender: "Female",
//         age: 32,
//         job: "Farmer",
//         country: "Vietnam",
//         is_married: false,
//     },
//     {
//         id: 10,
//         first_name: "Stanfield",
//         last_name: "Huc",
//         email: "shuc9@amazon.co.jp",
//         gender: "Genderfluid",
//         age: 60,
//         job: "Doctor",
//         country: "US",
//         is_married: false,
//     },
//     {
//         id: 11,
//         first_name: "Drugi",
//         last_name: "Hatliff",
//         email: "dhatliffa@php.net",
//         gender: "Female",
//         age: 42,
//         job: "Project Manager",
//         country: "Vietnam",
//         is_married: false,
//     },
//     {
//         id: 12,
//         first_name: "Farica",
//         last_name: "Rutley",
//         email: "frutleyb@moonfruit.com",
//         gender: "Female",
//         age: 28,
//         job: "Developer",
//         country: "Vietnam",
//         is_married: false,
//     },
//     {
//         id: 13,
//         first_name: "Ania",
//         last_name: "Perllman",
//         email: "aperllmanc@virginia.edu",
//         gender: "Female",
//         age: 57,
//         job: "Project Manager",
//         country: "UK",
//         is_married: false,
//     },
//     {
//         id: 14,
//         first_name: "Dallas",
//         last_name: "Hans",
//         email: "dhansd@photobucket.com",
//         gender: "Female",
//         age: 53,
//         job: "Farmer",
//         country: "UK",
//         is_married: true,
//     },
//     {
//         id: 15,
//         first_name: "Lissie",
//     },
// ]

// Sử dụng DOM để thay đổi nội dung của tất cả li.favorite-list-item thành “I love this thing”. 
// Sử dụng DOM để thay đổi màu chữ của các li.favorite-list-item thành màu đỏ. 
// let items = document.querySelectorAll(".favorite-list-item");

// for (let i = 0; i < items.length; i++) {
//     items[i].textContent = "I love this thing";
//     items[i].style.color = "red";
// }

// Nhập vào 1 đoạn text từ bàn phím. Thêm vào ul#favorite-list một li có nội dung là text vừa nhập vào.
// function addItem() {
//     let text = document.getElementById("inputText").value;
//     if (text.trim() === "") return;

//     let li = document.createElement("li");
//     li.textContent = text;
//     li.className = "favorite-list-item";
//     document.getElementById("favorite-list").appendChild(li);
// }

//  action: khi bấm add thì sẽ thêm cái nội dung trong ô input xuống dưới , cứ như thế sẽ tạo thành 1 list.
// và rồi khi f5 lại thì đảm rằng toàn bộ các dữ liệu đc thêm bởi nút add sẽ còn nguyên mà không bị mất đi.
// TH mất đi khi nào ( khi mà người dùng click nút xoá từng item or xoá toàn bộ item)

// const STORAGE = "list";
// let list = loadFromStorage(); 

// document.getElementById("addBtn").addEventListener("click", handleAdd);
// document.getElementById("clearBtn").addEventListener("click", handleClearAll);

// function handleAdd() {
//     const input = document.getElementById("input");
//     const text = input.value.trim();
//     if (text.trim() === "") return;
//      //add & save to storage
//     list.push(text);
//     saveToStorage(list);
//     render();
// }

// //Delete from storage
// function handleDelete(index) {
//     list.splice(index, 1);
//     saveToStorage(list);
//     render();
// }

// //Clear All
// function handleClearAll() {
//     list = [];
//     saveToStorage(list);
//     render();
// }

// //list
// function render() {
//     const ul = document.getElementById("list");
//     for (let i = 0; i < list.length; i++) {
//         const li = document.createElement("li");

//         const span = document.createElement("span");
//         span.className = "text";
//         span.textContent = list[i];

//         const delBTN = document.createElement("button");
//         delBTN.className = "del";
//         delBTN.textContent = "Delete";
//         delBTN.addEventListener("click",function() {
//             handleDelete[i];
//         });
//         li.appendChild(span);
//         li.appendChild(delBTN);
//         ul.appendChild(li);
//     }
// }

// //save to storage
// function saveToStorage() {
//     localStorage.setItem("list",JSON.stringify(list));
// }

// //load from storage
// function loadFromStorage() {
//     localStorage.getItem("list",JSON.parse(STORAGE));
// }


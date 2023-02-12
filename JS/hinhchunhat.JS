/**
 * Khối 1: input chiều dài , chiều rộng
 * 
 * Khối 2: b1 : lấy giá trị từ form khi user click
 *              + tạo hàm tính trung bình
 *              + gán hàm vào sự kiện click 
 *         b2 : trong hàm 
 *              + lấy giá trị từ form
 *              + lập công thức đổi tiền   
 *              chuvi = 2 * (chieudai + chieurong);
 *              dientich = chieudai * chieurong;
 *              + hiển thị kết quả lên UI
 *    
 * Khối 3:output chu vi , diện tích hcn
 *   
 */

function calculate() {
    var chieudai = document.getElementById("chieudai").value;
    var chieurong = document.getElementById("chieurong").value;
    var chuvi = 2 * (chieudai + chieurong);
    var dientich = chieudai * chieurong;
    document.getElementById("chuvi").innerHTML = chuvi;
    document.getElementById("dientich").innerHTML = dientich;
  }
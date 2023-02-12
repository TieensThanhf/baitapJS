/**
 * Khối 1: input 5 số thực 
 * 
 * Khối 2: b1 : lấy giá trị từ form khi user click
 *              + tạo hàm tính trung bình
 *              + gán hàm vào sự kiện click 
 *         b2 : trong hàm 
 *              + lấy giá trị từ form
 *              + lập công thức tính trung bình 
 *              + trungbinh = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5)) / 5;
 *              + hiển thị kết quả lên UI
 *    
 * Khối 3:output trung bình cộng 5 số 
 *   
 */
function trungbinh(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    var trungbinh = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5)) / 5;
    document.getElementById("result").innerHTML = "trung bình cộng của 5 số là: " + trungbinh;
}
document.getElementById("tinhTB").onclick = trungbinh;
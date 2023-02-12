/**
 * Khối 1: input 2 số 
 * 
 * Khối 2: b1 : lấy giá trị từ form khi user click
 *              + tạo hàm tính trung bình
 *              + gán hàm vào sự kiện click 
 *         b2 : trong hàm 
 *              + lấy giá trị từ form
 *              + lập công thức tính tổng  
 *              sohangdonvi = num % 10;
 *              sohangchuc = Math.floor(num / 10);
 *              tong2so = sohangdonvi + sohangchuc;
 * 
 *              + hiển thị kết quả lên UI
 *    
 * Khối 3:output tổng 2 số 
 *   
 */
function tinhtong2chuso() {
    var num = document.getElementById("num").value;
    var sohangdonvi = num % 10;
    var sohangchuc = Math.floor(num / 10);
    var tong2so = sohangdonvi + sohangchuc;


    document.getElementById("result").innerHTML = "Tổng 2 chữ số của " + num + " là: " + tong2so;
}
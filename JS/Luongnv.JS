/**
 * Khối 1: input ngày đi làm
 * 
 * Khối 2: b1 : lấy giá trị từ form khi user click
 *              + tạo hàm tính trung bình
 *              + gán hàm vào sự kiện click 
 *         b2 : trong hàm 
 *              + lấy giá trị từ form
 *              + lập công thức đổi tiền   
 *              luong = luongmoingay * songaydilam
 *              + hiển thị kết quả lên UI
 *    
 * Khối 3:tiền lương 
 *   
 */

function tienluong() {
    var luongmoingay = 100000;
    var songaydilam = document.getElementById("songaydilam").value;
    var luong = luongmoingay * songaydilam;
    document.getElementById("salary").value = luong;
}
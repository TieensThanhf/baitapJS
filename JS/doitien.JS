/**
 * Khối 1: input số tiền USD 
 * 
 * Khối 2: b1 : lấy giá trị từ form khi user click
 *              + tạo hàm tính trung bình
 *              + gán hàm vào sự kiện click 
 *         b2 : trong hàm 
 *              + lấy giá trị từ form
 *              + lập công thức đổi tiền   
 *              sotienVND = sotienUSD * tigia;
 * 
 *              + hiển thị kết quả lên UI
 *    
 * Khối 3:output số tiền sau khi đổi từ usd sang vnd 
 *   
 */


function chuyendoitien() {
    var tigia = 23500; 
    var sotienUSD = parseFloat(document.getElementById("sotienUSD").value);
    var sotienVND = sotienUSD * tigia;
    document.getElementById("sotienVND").value = sotienVND.toLocaleString() + "đ";
  }
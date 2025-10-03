
const hoTen = document.querySelectorAll(".hoten");
const ngaySinh = document.querySelectorAll(".ngaysinh");
const ngheNghiep = document.querySelectorAll(".nghenghiep");
const mucTieu = document.querySelectorAll(".muctieu");
const buoiHoc = document.querySelectorAll(".buoihoc");
function doiMau(nodeList, color) {
  nodeList.forEach(el => {
    el.style.color = color;
  });
}
doiMau(hoTen, "blue");
doiMau(ngaySinh, "green");
doiMau(ngheNghiep, "red");
doiMau(mucTieu, "purple");
doiMau(buoiHoc, "orange");

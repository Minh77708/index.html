function taiTaiLieu(isFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFail) {
        reject("Tải thất bại!");
      } else {
        resolve("Tải thành công!");
      }
    }, 2000);
  });
}


taiTaiLieu(false)
  .then(msg => console.log(msg))  
  .catch(err => console.error(err));

taiTaiLieu(true)
  .then(msg => console.log(msg))
  .catch(err => console.error(err));  

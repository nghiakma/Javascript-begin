function validate() {
  // Lấy các giá trị từ form
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm_password").value;

  // Kiểm tra tên đăng nhập không có dấu cách, ký tự đặc biệt. Tên đăng nhập chỉ có chữ và số
  const username_regex = /^[a-zA-Z0-9]+$/;
  if (!username_regex.test(username)) {
    alert("Tên đăng nhập không hợp lệ!");
    return false;
  }

  // Kiểm tra điện thoại: 10 số
  const phone_regex = /^\d{10}$/;
  if (!phone_regex.test(phone)) {
    alert("Số điện thoại không hợp lệ!");
    return false;
  }

  // Kiểm tra email theo chuẩn định dạng email
  const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email_regex.test(email)) {
    alert("Email không hợp lệ!");
    return false;
  }

  // Kiểm tra mật khẩu và nhập lại mật khẩu phải trùng nhau
  if (password !== confirm_password) {
    alert("Mật khẩu không trùng khớp!");
    return false;
  }

  // Nếu tất cả điều kiện đều hợp lệ, đăng ký thành công
  alert("Đăng ký thành công!");
  return true;
}
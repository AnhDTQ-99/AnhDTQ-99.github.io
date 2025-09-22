
const emailEl = $('email');
const passEl  = $('password');
const emailHelp = $('emailHelp');
const passHelp  = $('passHelp');
const alertBox  = $('alertBox');

function showAlert(type, msg){
    alertBox.innerHTML = `<div class="alert alert-${type}" role="alert">${msg}</div>`;
}
function clearFieldErrors(){
    emailHelp.textContent = '';
    passHelp.textContent = '';
}
function setFieldError(elHelp, msg){ elHelp.textContent = msg; }

$('btnLogin').addEventListener('click', ()=>{
    clearFieldErrors(); showAlert('secondary', ''); alertBox.innerHTML = '';

    const email = emailEl.value.trim();
    const pass  = passEl.value.trim();

    if(!email || !pass){
        showAlert('danger', 'Hãy nhập đầy đủ thông tin');
        if(!email) setFieldError(emailHelp, 'Vui lòng nhập email');
        if(!pass)  setFieldError(passHelp,  'Vui lòng nhập mật khẩu');
        return;
    }
    if(!isEmail(email)){
        showAlert('danger', 'Hãy nhập đầy đủ thông tin');
        setFieldError(emailHelp, 'Email không hợp lệ');
        return;
    }

    const users = loadUsers();
    const user = users.find(u => u.email.toLowerCase()===email.toLowerCase() && u.password===pass);

    if(user){
        setCurrentUser(user);
        showAlert('success', `Xin chào ${fullName(user)} — đang chuyển đến trang chính...`);
        setTimeout(()=>{ location.href = 'index.html'; }, 600);
    }else{
        showAlert('danger', 'Thông tin tài khoản không chính xác');
    }
});

// Enter submit
[emailEl, passEl].forEach(el => el.addEventListener('keydown', e=>{
    if(e.key === 'Enter') $('btnLogin').click();
}));

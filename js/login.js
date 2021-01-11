const login = document.getElementById('input_text');
const password = document.getElementById("input_password");
const form = document.getElementById("form");
const error = document.querySelector(".error_msg")
const btn = document.getElementById("login_btn")
var input_fields = document.querySelectorAll(".input");

input_fields.forEach(function(input_item){
	input_item.addEventListener("input", function(){
		if(input_item.value.length > 3){
			login_btn.disabled = false;
			login_btn.className = "btn enabled"
		}
	})
})
form.addEventListener("submit", (e) => {
    if (login.value.length <= 3 || password.value.length <= 3){
        e.preventDefault();
        error.style.display = "inline-block";
        login.style.border = "1px solid #f74040";
        password.style.border = "1px solid #f74040";
    }
})
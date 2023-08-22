let daysValue = document.querySelector("#days");
let monthsValue = document.querySelector("#months");
let yearsValue = document.querySelector("#years");
let d = document.querySelector("#date");
let m = document.querySelector("#month");
let y = document.querySelector("#year");
let btn = document.querySelector("#btnDiv");
let e1 = document.querySelector("#error1");
let e2 = document.querySelector("#error2");
let e3 = document.querySelector("#error3");
let error = document.getElementsByClassName("error");
let span = document.getElementsByClassName("tspan");
let input = document.getElementsByClassName("input");
let span1 = document.querySelector(".tspan1");
let span2 = document.querySelector(".tspan2");
let span3 = document.querySelector(".tspan3");
let presentYear = moment().year();

yearsValue.innerHTML = "- -";
monthsValue.innerHTML = "- -";
daysValue.innerHTML = "- -";

function validation() {
	if(y.value === "") {
		span3.style.color = "red";
		y.style.border = "0.2vh solid red";
		e3.innerHTML = "This field is required";
	}
	if(m.value === "") {
		span2.style.color = "red";
		m.style.border = "0.2vh solid red";
		e2.innerHTML = "This field is required";
	}
	if(d.value === "") {
		span1.style.color = "red";
		d.style.border = "0.2vh solid red";
		e1.innerHTML = "This field is required";
	}
	if(d.value > 31 || isNaN(d.value) || d.value.substr(1) == "." || parseInt(d.value) === 0 || d.value < 0) {
		span1.style.color = "red";
		d.style.border = "0.2vh solid red";
		e1.innerHTML = "Please enter a valid date";
		span2.style.color = "red";
		m.style.border = "0.2vh solid red";
		span3.style.color = "red";
		y.style.border = "0.2vh solid red";
	}
	if(isNaN(m.value) || m.value.substr(1) == "." || m.value > 12 || parseInt(m.value) === 0 || m.value < 0) {
		span2.style.color = "red";
		m.style.border = "0.2vh solid red";
		e2.innerHTML = "Please enter a valid month";
	}
	if(parseInt(y.value) === 0 || y.value < 0 || isNaN(y.value)) {
		span3.style.color = "red";
		y.style.border = "0.2vh solid red";
		e3.innerHTML = "Please enter valid year";
	}
	if(y.value > moment().year()) {
		span3.style.color = "red";
		y.style.border = "0.2vh solid red";
		e3.innerHTML = "Must be in past";
	}
	if(y.value.length > 2 && y.value.length < 4) {
		span3.style.color = "red";
		y.style.border = "0.2vh solid red";
		e3.innerHTML = "Year Format (<b>YYYY</b>)";
	}
	if(m.value == 2 && d.value > 29 && d.value < 32) {
		m.style.border = "0.2vh solid red";
		e2.innerHTML = "<b>February</b>";
		span2.style.color = "red";
		e1.innerHTML = "Please enter a valid date";
		span1.style.color = "red";
		d.style.border = "0.2vh solid red";
	}
	if(m.value == 4 && d.value > 30 && d.value < 32) {
		m.style.border = "0.2vh solid red";
		e2.innerHTML = "<b>April</b>";
		span2.style.color = "red";
		e1.innerHTML = "Please enter a valid date";
		span1.style.color = "red";
		d.style.border = "0.2vh solid red";
	}
	if(m.value == 6 && d.value > 30 && d.value < 32) {
		m.style.border = "0.2vh solid red";
		e2.innerHTML = "<b>June</b>";
		span2.style.color = "red";
		e1.innerHTML = "Please enter a valid date";
		span1.style.color = "red";
		d.style.border = "0.2vh solid red";
	}
	if(m.value == 9 && d.value > 30 && d.value < 32) {
		m.style.border = "0.2vh solid red";
		e2.innerHTML = "<b>September</b>";
		span2.style.color = "red";
		e1.innerHTML = "Please enter a valid date";
		span1.style.color = "red";
		d.style.border = "0.2vh solid red";	
	}
	if(m.value == 11 && d.value > 30 && d.value < 32) {
		m.style.border = "0.2vh solid red";
		e2.innerHTML = "<b>November</b>";
		span2.style.color = "red";
		e1.innerHTML = "Please enter a valid date";
		span1.style.color = "red";
		d.style.border = "0.2vh solid red";		
	}
}
function clearValidation() {
	if(y.value !== "") {
		span3.style.color = "hsl(0, 1%, 44%)";
		y.style.border = "0.2vh solid hsl(0, 0%, 86%)";
		e3.innerHTML = "";
	}
	if(m.value !== "") {
		span2.style.color = "hsl(0, 1%, 44%)";
		m.style.border = "0.2vh solid hsl(0, 0%, 86%)";
		e2.innerHTML = "";
	}
	if(d.value !== "") {
		span1.style.color = "hsl(0, 1%, 44%)";
		d.style.border = "0.2vh solid hsl(0, 0%, 86%)";
		e1.innerHTML = "";
	}
}
y.addEventListener("input", clearValidation);
m.addEventListener("input", clearValidation);
d.addEventListener("input", clearValidation);
btn.addEventListener("click", validation);
btn.addEventListener("click", () => {
	if(d.value === "" || d.value > 31 || isNaN(d.value) || d.value.substr(1) == "." || d.value == 0 || d.value < 0 || m.value === "" || isNaN(m.value) || m.value.substr(1) == "." || m.value > 12 || m.value == 0 || m.value < 0 || y.value === "" || y.value == 0 || y.value < 0 || isNaN(y.value) || y.value.length < 4 || y.value > moment().year()) {
		return false;
	}
	else {
		function calc() {
			const startDate = new Date();
			const endDate = new Date(`${y.value}-${m.value}-${d.value}`);
			let yearsDiff = Math.abs(moment.duration(endDate - startDate).years());
			let monthsDiff = Math.abs(moment.duration(endDate - startDate).months());
			let daysDiff = Math.abs(moment.duration(endDate - startDate).days());
			yearsValue.innerHTML = yearsDiff;
			monthsValue.innerHTML = monthsDiff;
			daysValue.innerHTML = daysDiff;
			function animateValue(obj, start, end, duration) {
				let startTimestamp = null;
				const step = (timestamp) => {
					if (!startTimestamp) startTimestamp = timestamp;
					const progress = Math.min((timestamp - startTimestamp) / duration, 1);
					obj.innerHTML = Math.floor(progress * (end - start) + start);
					if(isNaN(yearsDiff || monthsDiff || daysDiff)) {
						yearsValue.innerHTML = "- -";
						monthsValue.innerHTML = "- -";
						daysValue.innerHTML = "- -";
					}
					if (progress < 1) {
						window.requestAnimationFrame(step);
					}
				};
				window.requestAnimationFrame(step);
			}
			const obj1 = document.getElementById("years");
			animateValue(obj1, 0, yearsDiff, 500);
			const obj2 = document.getElementById("months");
			animateValue(obj2, 0, monthsDiff, 500);
			const obj3 = document.getElementById("days");
			animateValue(obj3, 0, daysDiff, 500);
		}
		calc();
	}
});

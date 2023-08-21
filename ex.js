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

btn.addEventListener("click", (e) => {
	if(!(isNaN(y.value || m.value || d.value)) && (y.value || m.value || d.value) !== "") {
		const startDate = new Date();
		const endDate = new Date(`${y.value}-${m.value}-${d.value}`);
		let yearsDiff = Math.abs(moment.duration(endDate - startDate).years());
		let monthsDiff = Math.abs(moment.duration(endDate - startDate).months());
		let daysDiff = Math.abs(moment.duration(endDate - startDate).days());
		yearsValue.innerHTML = yearsDiff;
		monthsValue.innerHTML = monthsDiff;
		daysValue.innerHTML = daysDiff;
		let counts1 = setInterval(updated1, 25);
		let upto1 = 0;
		function updated1() {
			let count1 = yearsValue;
			count1.innerHTML = ++upto1;
			if (upto1 === yearsDiff || upto1 > yearsDiff || y.value < 0 || y.value == 0 || y.value > presentYear || y.value.length < 4 || m.value == 0 || m.value < 0 || d.value == 0 || d.value < 0 || y.value == presentYear || isNaN(m.value) || isNaN(d.value) || d.value > 31 || m.value > 12) {
				clearInterval(counts1);
			}
			if(upto1 > yearsDiff || y.value < 0 || y.value == 0 || y.value > presentYear || y.value.length < 4 || m.value == 0 || m.value < 0 || d.value == 0 || d.value < 0 || y.value == presentYear || isNaN(m.value) || isNaN(d.value) || d.value > 31 || m.value > 12) {
				yearsValue.innerHTML = "- -";
				monthsValue.innerHTML = "- -";
				daysValue.innerHTML = "- -";
			}
			if(m.value == 2 && d.value > 28 || m.value == 4 && d.value > 30 || m.value == 6 && d.value > 30 || m.value == 9 && d.value > 30 || m.value == 11 && d.value > 30) {
				clearInterval(counts1);
				yearsValue.innerHTML = "- -";
				monthsValue.innerHTML = "- -";
				daysValue.innerHTML = "- -";
				m.style.border = "0.2vh solid red";
				d.style.border = "0.2vh solid red";
				y.style.border = "0.2vh solid red";
				span1.style.color = "red";
				span2.style.color = "red";
				span3.style.color = "red";
				e1.innerHTML = "Please enter valid Day";
			}
			if(m.value == 2 && d.value > 28) {
				e2.innerHTML = "February";
			}
			if(m.value == 4 && d.value > 30) {
				e2.innerHTML = "April";
			}
			if(m.value == 6 && d.value > 30) {
				e2.innerHTML = "June";
			}
			if(m.value == 9 && d.value > 30) {
				e2.innerHTML = "September";
			}
			if(m.value == 11 && d.value > 30) {
				e2.innerHTML = "November";
			}
		}
		let counts2 = setInterval(updated2, 50);
		let upto2 = 0;
		function updated2() {
			let count2 = monthsValue;
			count2.innerHTML = ++upto2;
			if (upto2 === monthsDiff || upto2 > monthsDiff || y.value < 0 || y.value == 0 || y.value > presentYear || y.value.length < 4 || m.value == 0 || m.value < 0 || d.value == 0 || d.value < 0 || y.value == presentYear || isNaN(m.value) || isNaN(d.value) || d.value > 31 || m.value > 12) {
				clearInterval(counts2);
			}
			if(upto2 > monthsDiff || y.value < 0 || y.value == 0 || y.value > presentYear || y.value.length < 4 || m.value == 0 || m.value < 0 || d.value == 0 || d.value < 0 || y.value == presentYear || isNaN(m.value) || isNaN(d.value) || d.value > 31 || m.value > 12) {
				yearsValue.innerHTML = "- -";
				monthsValue.innerHTML = "- -";
				daysValue.innerHTML = "- -";
			}
			if(m.value == 2 && d.value > 28 || m.value == 4 && d.value > 30 || m.value == 6 && d.value > 30 || m.value == 9 && d.value > 30 || m.value == 11 && d.value > 30) {
				clearInterval(counts2);
				yearsValue.innerHTML = "- -";
				monthsValue.innerHTML = "- -";
				daysValue.innerHTML = "- -";
			}
		}
		let counts3 = setInterval(updated3, 25);
		let upto3 = 0;
		function updated3() {
			let count3 = daysValue;
			count3.innerHTML = ++upto3;
			if (upto3 === daysDiff || upto3 > daysDiff || y.value < 0 || y.value == 0 || y.value > presentYear || y.value.length < 4 || m.value == 0 || m.value < 0 || d.value == 0 || d.value < 0 || y.value == presentYear || isNaN(m.value) || isNaN(d.value) || d.value > 31 || m.value > 12) {
				clearInterval(counts3);
			}
			if(upto3 > daysDiff || y.value < 0 || y.value == 0 || y.value > presentYear || y.value.length < 4 || m.value == 0 || m.value < 0 || d.value == 0 || d.value < 0 || y.value == presentYear || isNaN(m.value) || isNaN(d.value) || d.value > 31 || m.value > 12) {
				yearsValue.innerHTML = "- -";
				monthsValue.innerHTML = "- -";
				daysValue.innerHTML = "- -";
			}
			if(m.value == 2 && d.value > 28 || m.value == 4 && d.value > 30 || m.value == 6 && d.value > 30 || m.value == 9 && d.value > 30 || m.value == 11 && d.value > 30) {
				clearInterval(counts3);
				yearsValue.innerHTML = "- -";
				monthsValue.innerHTML = "- -";
				daysValue.innerHTML = "- -";
			}
		}
	}
	if(isNaN(y.value)) {
		e3.innerHTML = "Please enter digits";
		yearsValue.innerHTML = "- -";
		monthsValue.innerHTML = "- -";
		daysValue.innerHTML = "- -";
	}
	if(isNaN(m.value)) {
		e2.innerHTML = "Please enter digits";
		yearsValue.innerHTML = "- -";
		monthsValue.innerHTML = "- -";
		daysValue.innerHTML = "- -";
	}
	if(isNaN(d.value)) {
		e1.innerHTML = "Please enter digits";
		yearsValue.innerHTML = "- -";
		monthsValue.innerHTML = "- -";
		daysValue.innerHTML = "- -";
	}
	if(m.value < 0) {
		e2.innerHTML = "Please enter valid Month";
		monthsValue.innerHTML = "- -";
		yearsValue.innerHTML = "- -";
		daysValue.innerHTML = "- -";
	}
	if(d.value < 0) {
		e1.innerHTML = "Please enter valid Day";
		monthsValue.innerHTML = "- -";
		yearsValue.innerHTML = "- -";
		daysValue.innerHTML = "- -";
	}
	if(m.value > 12 || m.value == 0) {
		e2.innerHTML = "Must be a valid month";
		monthsValue.innerHTML = "- -";
		yearsValue.innerHTML = "- -";
		daysValue.innerHTML = "- -";
		span1.style.color = "red";
		span2.style.color = "red";
		span3.style.color = "red";
		d.style.border = "0.2vh solid red";
		m.style.border = "0.2vh solid red";
		y.style.border = "0.2vh solid red";
	}
	if(d.value > 31 || d.value == 0) {
		e1.innerHTML = "Must be a valid day";
		daysValue.innerHTML = "- -";
		monthsValue.innerHTML = "- -";
		yearsValue.innerHTML = "- -";
		span1.style.color = "red";
		span2.style.color = "red";
		span3.style.color = "red";
		d.style.border = "0.2vh solid red";
		m.style.border = "0.2vh solid red";
		y.style.border = "0.2vh solid red";
	}
	if(m.value > 0 && m.value <= 12) {
		e2.innerHTML = "";
		span2.style.color = "hsl(0, 1%, 44%)";
		m.style.border = "0.2vh solid hsl(0, 0%, 86%)";
	}
	if(y.value <= presentYear) {
		e3.innerHTML = "";
		span3.style.color = "hsl(0, 1%, 44%)";
		y.style.border = "0.2vh solid hsl(0, 0%, 86%)";	
	}
	if(d.value > 0 && d.value <= 31) {
		e1.innerHTML = "";
		span1.style.color = "hsl(0, 1%, 44%)";
		d.style.border = "0.2vh solid hsl(0, 0%, 86%)";
	}
	if(y.value.length < 4) {
		yearsValue.innerHTML = "- -";
		monthsValue.innerHTML = "- -";
		daysValue.innerHTML = "- -";
	}
	if(y.value == presentYear || y.value > presentYear || y.value == 0) {
		e3.innerHTML = "Must be in past";
		yearsValue.innerHTML = "- -";
		monthsValue.innerHTML = "- -";
		daysValue.innerHTML = "- -";
		span3.style.color = "red";
		y.style.border = "0.2vh solid red";
	}
	if(y.value < 0) {
		e3.innerHTML = "Please enter valid Year";
		monthsValue.innerHTML = "- -";
		yearsValue.innerHTML = "- -";
		daysValue.innerHTML = "- -";
	}
	if((y.value || m.value || d.value) === "") {
		e.preventDefault();
		for(let i = 0; i < error.length; i++) {
			if((y.value || m.value || d.value) === "") {
				error[i].innerHTML = "This field is required";
			}
		}
		for(let j = 0; j < span.length; j++) {
			if((y.value || m.value || d.value) === "") {
				span[j].style.color = "red";
			}
		}
		for(let q = 0; q < input.length; q++) {
			if((y.value || m.value || d.value) === "") {
				input[q].style.border = "0.2vh solid red";
			}
		}
	}
	if(y.value === "") {
		e3.innerHTML = "This field is required";
		y.style.border = "0.2vh solid red";
		span3.style.color = "red";
	}
	if(m.value === "") {
		e2.innerHTML = "This field is required";
		m.style.border = "0.2vh solid red";
		span2.style.color = "red";
	}
	if(d.value === "") {
		e1.innerHTML = "This field is required";
		d.style.border = "0.2vh solid red";
		span1.style.color = "red";
	}
});
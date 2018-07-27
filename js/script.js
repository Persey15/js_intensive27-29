function myFirstApp(name, age) {

	alert('Привет, меня зовут ' + name + ' и это моя первая программа');

	function showSkills() {
		let skills = ['html', 'css', 'javascript', 'python'];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я владею " + skills[i] + "<br>");
		}
	}	
	showSkills();
    console.log('ert');
	function checkAge() {
		if (age > 18) {
				alert("Добро пожаловать!");
		} else {
			alert("Вход запрещен!");
		}
	}
	checkAge();
	function calcPow(num) {
		alert(num + " в квадрате = " + num*num);
	}
	calcPow(4);
}

myFirstApp("Vlad", 36);
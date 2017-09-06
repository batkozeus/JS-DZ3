// Task 1

var n1 = [99, 33, 'Hello'];

function masOut () {
	var p = document.getElementById('new');
	var str = '';
	for (var i = 0; i<n1.length; i++) {
		str += i + ' --- ' + n1[i] + '<br>';
	}
	p.innerHTML = str;
}

masOut ();

// Task 2

document.getElementById('p2').onclick = masOut2;
function masOut2 () {
	var p2 = document.getElementById('new2');
	var i1 = document.getElementById('i1').value;
	var i2 = document.getElementById('i2').value;
	p2.innerHTML += +i1 + ' --- ' + i2 + '<br>';
}

// Task 3

document.getElementById('p3').onclick = masOut3;
function masOut3() {
	n1.pop();
	masOut ();
}

// Task 4

document.getElementById('p4').onclick = masOut4;
function masOut4() {
	n1.shift();
	masOut ();
}

// Task 5

document.getElementById('p5').onclick = masOut5;
function masOut5() {
	var i5 = document.getElementById('i5').value;
	n1.push(i5);
	masOut ();
}

// Task 6

document.getElementById('p6').onclick = masOut6;
function masOut6() {
	var i6 = document.getElementById('i6').value;
	n1.unshift(i6);
	masOut ();
}
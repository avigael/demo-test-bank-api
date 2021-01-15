let hasLoadedFriendsAndFamilyData = false;

function askQuestion() {
	// makes questionArea visible
	document.getElementById("questionArea").style.visibility = "visible";
}

function submitQuestion() {
	// prints text area to console
	console.log(document.getElementById("questionField").value);
}

function addPizzazz() {
	// changes saying of the day's color, weight, and font
	var quote = document.getElementsByName("sayingOfTheDay")[0];
	quote.style.color = "blue";
	quote.style.fontFamily = "Arial";
	quote.style.fontWeight = "bold";
}

function saveBalance() {
	// replaces balance with input
	document.getElementById("balance").innerHTML = document.getElementById(
		"balanceInput"
	).value;
}

function printBalance() {
	// prints balance
	console.log(
		"You have " +
		document.getElementById("balance").innerHTML +
		" in your account!"
	);
}

function alertBalance() {
	// displays an alert depending on the balance
	var balance = document.getElementById("balance").innerHTML;
	if (balance < 0) {
		alert(":(");
	} else if (balance >= 0 && balance <= 100) {
		alert(":)");
	} else {
		alert(":D");
	}
}

function loadFriendsAndFamilyData() {
	if (hasLoadedFriendsAndFamilyData) {
		return;
	} else {
		hasLoadedFriendsAndFamilyData = true;
	}

	let friendsAndFamilyAccounts = [
		{
			name: "Jane McCain",
			balance: 7262.71,
		},
		{
			name: "Bill Phil",
			balance: 9830.02,
		},
		{
			name: "Tod Cod",
			balance: 0.03,
		},
		{
			name: "Karen Marin",
			balance: 72681.01,
		},
	];

	// displays accounts of friends and family
	var table = document.getElementById("friendsAndFamilyBalances");
	// iterates through friendsAndFamilyAccounts
	for (let i = 0; i < 4; i++) {
		var row = table.insertRow(i + 1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = friendsAndFamilyAccounts[i].name;
		cell2.innerHTML = friendsAndFamilyAccounts[i].balance;
		// if balance under 1 then color changed to red
		if (friendsAndFamilyAccounts[i].balance < 1) {
			cell1.style.color = "red";
			cell2.style.color = "red";
		}
	}
}

function addPersonalTransactionRows() {
	var table = document.getElementById("personalTransactions");
	document.getElementById("loading").style.display = "inline-block";
	fetch("https://avigael-test-bank-api.herokuapp.com/api?amount=4")
		.then((response) => response.json())
		.then((data) => {
			document.getElementById("loading").style.display = "none";
			for (let i = 0; i < 4; i++) {
				var row = table.insertRow(i + 1);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);
				cell1.innerHTML = data[i].date;
				cell2.innerHTML = data[i].company;
				cell3.innerHTML = data[i].amount;
			}
		});
}

function clearPersonalTransactionRows() {
	// we figure out the number of rows in our count variable
	var table = document.getElementById("personalTransactions");
	var count = table.getElementsByTagName("tr").length;
	// we delete each row excluding the header
	for (var i = count - 1; i > 0; i--) {
		table.deleteRow(i);
	}
}

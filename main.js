function getName(){
	var fname = document.querySelector('#fn').value;
	var o = convertUpper(fname);
	document.querySelector('#o').innerHTML = generate(o);
	document.querySelector('#nin').style.display = "block";
}
function convertUpper(word){
	return word.toUpperCase();
}

function generate(firstName){
	var newName = ' ';

	for(index = 0; index < firstName.length; index++){


	var firstLFN = firstName.charAt(index);

	if(firstLFN == 'A') newName = newName + 'ka';
	if(firstLFN == 'B') newName = newName + 'zu';
	if(firstLFN == 'C') newName = newName + 'mi';
	if(firstLFN == 'D') newName = newName + 'te';
	if(firstLFN == 'E') newName = newName + 'ku';
	if(firstLFN == 'F') newName = newName + 'lu';
	if(firstLFN == 'G') newName = newName + 'ji';
	if(firstLFN == 'H') newName = newName + 'ri';
	if(firstLFN == 'I') newName = newName + 'ki';
	if(firstLFN == 'J') newName = newName + 'zu';
	if(firstLFN == 'K') newName = newName + 'me';
	if(firstLFN == 'L') newName = newName + 'ta';
	if(firstLFN == 'M') newName = newName + 'rin';
	if(firstLFN == 'N') newName = newName + 'to';
	if(firstLFN == 'O') newName = newName + 'mo';
	if(firstLFN == 'P') newName = newName + 'no';
	if(firstLFN == 'Q') newName = newName + 'ke';
	if(firstLFN == 'R') newName = newName + 'shi';
	if(firstLFN == 'S') newName = newName + 'ari';
	if(firstLFN == 'T') newName = newName + 'chi';
	if(firstLFN == 'U') newName = newName + 'do';
	if(firstLFN == 'U') newName = newName + 'ru';
	if(firstLFN == 'W') newName = newName + 'mei';
	if(firstLFN == 'X') newName = newName + 'na';
	if(firstLFN == 'Y') newName = newName + 'fu';
	if(firstLFN == 'Z') newName = newName + 'zi';
}
	return newName
}
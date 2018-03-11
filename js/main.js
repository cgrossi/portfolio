function insert_year(){
	// Update the copyright year as the current year
	
	const span = document.getElementById('year');
	const date = new Date();
	const curr = date.getFullYear().toString();
	span.innerHTML = curr
}


function main(){
	// Primary - called on page load

	insert_year();
}


main();

let dead = document.getElementById('dead').textContent;
let lost = document.getElementById('lost').textContent;
getHole = index => document.getElementById(`hole${index}`);
for ( holeIndex = 1; holeIndex < 10; holeIndex++ ) {
	let hole = getHole(holeIndex);
	hole.addEventListener( 'click', function() {
    if (hole.classList.contains( 'hole_has-mole')){
        dead++;
        document.getElementById('dead').textContent = dead;
    } else {
        lost++;
        document.getElementById('lost').textContent = lost;
    }
    if (dead == 10) {
        alert ('Победа');
        dead = 0;
        lost = 0;
        document.getElementById('dead').textContent = 0;
        document.getElementById('lost').textContent = 0;
    }
    if (lost == 5) {
        alert ('Проигрыш');
        dead = 0;
        lost = 0;
        document.getElementById('dead').textContent = 0;
        document.getElementById('lost').textContent = 0;
    }
	});
}
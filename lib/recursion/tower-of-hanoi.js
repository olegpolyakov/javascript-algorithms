function moveTower(n, src, dest, temp) {
    if (n === 0) return;

    moveTower(n - 1, src, temp, dest);
    moveDisk(src, dest);
    moveTower(n - 1, temp, dest, src);
}

function moveDisk(src, dest) {
    console.log(`${src} -> ${dest}`);
}

moveTower(3, 1, 2, 3);
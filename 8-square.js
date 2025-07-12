const args1 = process.argv[2];
Number(args1);
if (isNaN(args1)) {
    console.log('Missing size');
}
else{
    const size = Number(args1);
    for (let i = 0; i < size; i++) {
        console.log('X'.repeat(size));
    }
}
const args = process.argv[2];
Number(args);
if (isNaN(args)){
    console.log('Missing number of occurrences');
}
else{
    // to pint it in nwe line
    console.log('C is fun\n'.repeat(Number(args)));
    
}
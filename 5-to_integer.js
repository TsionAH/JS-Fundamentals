const myNumber = process.argv[2];
Number(myNumber);
if(isNaN(myNumber)){
    console.log('Not a number');
}
else{
    console.log(`My number: ${myNumber}`);
}
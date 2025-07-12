const args = process.argv[2];
Number(args);
if (isNaN(args)){
    console.log('Missing number of occurrences');
}
else{
for (let i = 0; i < Number(args); i++){
    console.log('C is fun');
    
    
}}

const argument = process.argv.slice(2);
if(args.length === 0 ){
    console.log('No argument');
}
else if(argument.length === 1){
    console.log('Argument found');
}
else{
    console.log('Arguments found');
}
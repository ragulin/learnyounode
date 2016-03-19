console.log(process.argv.splice(2).reduce(function(total, i) { return total + parseInt(i)}, 0));

const args = process.argv;

if (args.length == 2)
    console.log("No argument");
else if (args.length > 2)
    console.log("Argument found")
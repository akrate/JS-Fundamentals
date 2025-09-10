const arg = process.argv.slice(2);

if (isNaN(arg[0]))
    console.log("Missing number of occurrences")
else
{
    num = parseInt(arg[0]);
    while (num > 0)
    {
        console.log("C is fun");
        num--;
    }
}
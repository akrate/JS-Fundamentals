function add(a, b)
{
    return (a + b);
}
const arg = process.argv.slice(2);
if (!isNaN(arg[0]) && !isNaN(arg[1]))
{
    const sum = add(parseInt(arg[0]),parseInt(arg[1]));
    console.log(sum);
}
else
{
    console.log("NaN");
}
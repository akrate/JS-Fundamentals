const arg = process.argv.slice(2);
if (!isNaN(arg[0]))
{
    num = parseInt(arg[0],10);
    if (num > 0)
    {
        i = 0;
        while (i < num)
        {
            console.log('x'.repeat(num));
            i++;
        }
    }
}else{
    console.log("Missing size");
}
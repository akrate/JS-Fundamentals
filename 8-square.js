const arg = process.argv.slice(2);
const input = arg[0];

if (!isNaN(input)) {
    const num = parseInt(input, 10);
    if (num > 0) {
        let i = 0;
        while (i < num) {
            console.log('X'.repeat(num));
            i++;
        }
    }
} else {
    console.log('Missing size');
}

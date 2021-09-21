const args = process.argv.slice(2);
if(args.length) {
  for (let i = 0; i < args.length; i++) {
    let number = Number(args[i]);
    if (isNaN(number) || number <= 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, args[i] * 1000)
  }
}
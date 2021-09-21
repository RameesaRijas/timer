const args = process.argv.slice(2);
if(args.length) {
  for (const number of args) {
    if (number <= 0 && typeof number !== "number") {
      return false;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000)
  }
} 
const parseArgs = () => {
    const args = process.argv.slice(2);
    let str = '';

    for (let i = 0; i < args.length; i += 2) {
        str += (i === args.length - 2)
            ? `${args[i].split('').slice(2).join('')} is ${args[i + 1]}`
            : `${args[i].split('').slice(2).join('')} is ${args[i + 1]}, `
    }

    console.log(str);
};

parseArgs();
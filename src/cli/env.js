const parseEnv = () => {
    const keys = Object.keys(process.env);
    const values = Object.values(process.env);
    const strArr = [];

    for (let i = 0; i < keys.length; i++) {
        strArr.push(`RSS_${keys[i]}=${values[i]}; `);
    }

    console.log(strArr.join(''));
};

parseEnv();
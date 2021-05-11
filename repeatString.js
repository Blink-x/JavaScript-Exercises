function repeatString (string, cycleNum)
{
    let output = '';
    if (cycleNum <  0) {
     output = 'ERROR';
    }
    for (i = 0; i < cycleNum; i++) 
    {
    output += string;
    }
    console.log(output);
    return output;
};

repeatString('hey', 3);

module.exports = repeatString
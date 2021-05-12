const removeFromArray = function(args, ...remove)
{   let arrayChange = [...args];
    for (i = 0; i < args.length; i++)
        {
            if (arrayChange.includes(remove[i]))
             {
                arrayChange.splice(arrayChange.indexOf(remove[i]), 1);
             }
        }
        return arrayChange;
}

console.log(removeFromArray ([1, 2, 3, 4], 1, 2 , 3));

module.exports = removeFromArray
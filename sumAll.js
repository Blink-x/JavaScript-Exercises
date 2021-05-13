
function sumAll (a, b) 
{

    let totalSum = a + b;
    
        if (isNaN(a) || isNaN(b) || a < 0 || b < 0)
        {
            console.log("ERROR");
        }

        else if ( a < b) 
        {
            for (i = a + 1; i > a && i < b; i++)
                {
                totalSum += i; 
                console.log(totalSum);
                }
        }
    
        else if ( a > b) 
        { 
            for (i = b + 1; i > b && i < a; i++)
    	        {
      	        totalSum += i;
                console.log(totalSum);
                }
        }

    return totalSum;
}

sumAll();

module.exports = sumAll
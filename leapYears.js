function leapYears (year) 
{
		if (year % 4 == 0) 
            {
    	        if ( year % 400 == 0 && year % 100 == 0 ) 
      	            {
                        console.log(year + " IS a leap year");
                        return true;	
                    }
            }
        else 
      	    {
            console.log(year + " is NOT a leap year");
            return false;
            }
}

module.exports = leapYears
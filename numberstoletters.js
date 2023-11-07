function convertNumber(number) 
{

    //Check if the number entered is a valid numebr 
    if (number > 999 || number < 0 || isNaN(number) ) {
        return "Enter a valid number between 0-999"
    }

    //array containing units

    var unitstoletter = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','ten',]
    
    //array containing tens

    var tenstoletter = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    
    //extract the units,tens and hundreds from the given


    var units = number % 10,tens = (number % 100 - units) / 10,hundreds = ((number % 1000 )- number % 100) / 100

    var unitsout,tensout,hundredsout

    if (number === 0) {
        return 'Zero'
    }else
    {
        //treatment of the units 
        
       unitsout = tens > 1 ? ' ' + unitstoletter[units] : unitstoletter[units]
        // unitsout = unitstoletter[units]
        //treatment of the tens
       if(tens === 1)
       {
        tensout = unitstoletter[units + 10]
        unitsout = ''
       }
       else     
       {
        tensout = tenstoletter[tens]
       }

       //treatment of the hundreds
       hundredsout = unitstoletter[hundreds]



        return tensout + unitsout
    }


}

var userentry
    while (userentry = prompt("Enter the number to convert to letter between 0-999 :")) {
        alert(convertNumber(parseInt(userentry,10)))
        
}

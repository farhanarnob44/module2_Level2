{
    // type assertion 

    let anything : any;

    anything = "Next Level Web Development" ;

    anything = 222;

    (anything as string).


    const kgTogram  = (value: string | number) : string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value)
            return convertedValue
        }
       else if(typeof value === "number"){
        return value*1000;
        }
    }
    const result1 = kgTogram(1000) as number


    // as use korle typescript amdr k chokh bondho kore bissas kore 

    type CustomError = {
        message : string
    }



    try {

    }
    catch(error){
        console.log((error as CustomError).message)
    }





}
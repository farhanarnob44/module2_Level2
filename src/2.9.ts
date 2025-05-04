{
    // conditional typesss 


    type a1 =number
    type b1 = string

    type x = a1 extends null ? true : false


    // nested conditional 

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any


    type Sheikh = {
        bike : String;
        car : String;
        ship : string;
    }

    // keyof operator use kore sheikh likhle  sheikh er key gula access hbe and union hye jabe 



    // check korbe 

    type CheckVehicle <T> = T extends keyof Sheikh ? true : false 

    type HasBike = CheckVehicle <"car">

}
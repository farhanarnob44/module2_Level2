{
    // interface 


    type User1 = {
        name : string;
        age: number ;
    };

    type UserWithRole1 = User1 & {role : string}


    const user2 : UserWithRole1 = {
        name : "fathan",
        age : 22 ,
        role : "agent"
    }


    interface UserWithRole2 extends User2 {
        role : string
    }
    interface User2 {
        name : string;
        age: number ;
    }

    const user1 : UserWithRole2 = {
        name : "fathan",
        age : 22 ,
        role : "joy"
    }



    // interface k barate chaile extends word use krte hbe 


    // type alais chara array k ts er madhome represent kora 



    type Roll = number [];

    interface Roll2 {
        [ index : number ] : number
    }

    const rollNumber1 : Roll = [1,2,3]


    // type alias and interface for function 

    type Add1 = (num1 : number , num2 : number) => number
    interface Add2 {
        (num1 : number , num2 : number) : number
    } 

    const add : Add2 = (num1 , num2 )  =>
         num1+num2

}
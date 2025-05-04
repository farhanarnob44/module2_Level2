{
    // utility typess 

    //pick type 

    type Person = {
        name: string;
        age: number;
        email? : string;
        contactNo:number;
    }
    type NameAge = Pick<Person, "name" | "age">




    // pick er oposite omit type 

    type ContactInfo = Omit<Person, "name">



    // sob gula property require korar type holo require type 

    type PersonRequired = Required<Person>


    // partial type 

    type PersonPartia = Partial<Person>


    // readonly type

    type personReadOnly = Readonly<Person>


    const person1 : personReadOnly = {
        name :"mr. farhan",
        age: 200,
        contactNo: 231313
    }
    person1.name= "efyua"



    // record 

    // type MyObj = {
    //     a: string,
    //     b: string
    // }

    type MyObj = Record <string , string>
    const obj1 : MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "khsdvf"
    }

    // object er key always string hbeee ********

}
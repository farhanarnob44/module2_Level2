{
    // constrains using key of 

    type Vehicle = {
        bike :string;
        car : string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"   //manually

    // same jinis ekta operator diye korte chaile keyof operator use korte hbe

    type Owner2 = keyof Vehicle

    const person1 : Owner = "car"

    const user = {
        name : "Mr. farhan",
        age: 26,
        address: "Dinajpur"
    }

    // user ['name'] ei kaj ta ekta function er madhome korte chaile




    const getPropertyValue = <X, Y extends keyof X >(obj : X, key : Y) => {
        return obj[key];
    }


    const user1 = {
        name : "Mr. farhan",
        age: 26,
        address: "Dinajpur"
    };

    const car = {
        model : "Toyota 200",
        year: 100
    }
    const result1 = getPropertyValue(car, 'model')







}
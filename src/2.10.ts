{
    //mapping ba mapped types

    const arayOfNumbers : Number [] = [1,4,5];


    const arrOfStrings : string[] = arayOfNumbers.map((number) => {
        return number.toString();
    })
    // console.log(arrOfStrings)

    type AreaNumber = {
        height: number;
        width: number;
    }

    type height =AreaNumber["height"]
    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    type AreaString <T>= {
        [ key in keyof T] : T[key];
    }

    const area1 : AreaString <{height: string; width : number}>={
        height: "100",
        width: 20
    }

    // mapped types lekhar jnne index signature 


}
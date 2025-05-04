{
    // create promise 


    type Todo = {
        id: number,
        userID : number,
        title : string,
        completed : boolean
    }


    const getTodo = async () : Promise<Todo> => {
        const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        // console.log(data)
        return data;
    }

    

    const createPromise = () : Promise <string> => {
        return new Promise ((resolve , reject) =>{
            const data : string = "something"
            if(data) {
                resolve(data)
            }
            else{
                reject ('failed to load data')
            }
        })
    }



    // calling create promise function 

    const showData = async() => {
        const data = await createPromise();
        return (data);
    }
    showData();
}








// ts-node-dev --respawn --transpile-only server.ts
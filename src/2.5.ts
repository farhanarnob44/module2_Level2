{
  // function with generics

  const createArray = (param: string) => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<{ id: number; name: string }>({
    id: 222,
    name: "ukayewgfuyg",
  });


  const createArrayWithTuple = <T,Q> (param1:T, param2:Q):[T,Q] => {
    return [param1, param2];
  };



  const res10 = createArrayWithTuple<string,string>("Joy Bangla","Bangladesh");
  const resGeneric1 = createArrayWithGeneric<{ id: number; name: string }>({
    id: 222,
    name: "ukayewgfuyg",
  });


  const addCouseToStudent  =<T> (student : T) => {
    const course = 'Next level Web development';
    return {
        ...student, course
      }
  }


  const student1 = addCouseToStudent  ({name: 'Mr X', email: "MrX@gmail.com" , devType : 'NLWD'})
  const student2 = addCouseToStudent  ({name: 'Mr y', email: "Mry@gmail.com" , devType : 'NLWD'})
  


//   ei jinis ta important silooo 

}

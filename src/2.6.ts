{
  // constraints in typescript

  const addCouseToStudent = <T extends {    id: number;
    name: string;
    email: string;}>(student: T) => {
    const course = "Next level Web development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCouseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222103440,
    name: "Mr X",
    email: "MrX@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCouseToStudent <{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 22103437,
    name: "Mr y",
    email: "Mry@gmail.com",
    devType: "NLWD",
  });
  const student3 = addCouseToStudent ({
    id : 22103440,
    name : "jaegfkuw",
    email : "hbsekfb"
  });
}

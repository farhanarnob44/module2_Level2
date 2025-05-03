{
  // introduction to generics

  type GenericArray<T> = Array<T>;

  // const rollNumbers : number [] = [3,6,8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];
  const mentors: Array<string> = ["mr.x", "mr. hasina", "mr. khaleda"];
  const boolArray: Array<boolean> = [true, false, true];

  const add = (x: number, y: number) => x + y;

  add(30, 20);

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "farhan",
      age: 10,
    },
    {
      name: "arnob",
      age: 10,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "farhan", email: "ahjsbd@gmail.com" },
  ];
}

import { useState } from "react";

type User = {
    name: string,
    age: number
}

type Todo = {
    id: number,
    text: string
}

const Example = () => {
  const [ text, setText ] = useState("hello");
  useState(0);

  const [ animals, setAnimals ] = useState<string[]>(["dog", "cat"]);
  const [ users, setUsers ] = useState<User[]>([{name: 'Tom', age: 22}]);
  const [ todos, setTodods] = useState<Todo[]>([ {id: 0, text: "Homework"}])
};

export default Example;

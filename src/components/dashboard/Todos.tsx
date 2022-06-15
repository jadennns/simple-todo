import { truncateString } from "lib/utils/truncate";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Todo } from "typings";

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("/api/@me/todos")
      .then((res) => res.json())
      .then(setTodos);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {todos.map((todo, index) => (
        <Link href={"/dashboard/" + todo.id} key={index + 1}>
          <div className=" mx-auto rounded-xl w-[20rem] h-[400px] bg-gradient-to-r p-[5px] from-indigo-500 via-purple-500 to-pink-500 trans-grow cursor-pointer">
            <div className="flex flex-col justify-between h-full bg-main-1 rounded-lg p-4">
              <div className="flex flex-col justify-center space-y-1 text-white">
                <img
                  src={todo.thumbnail}
                  alt="Logo"
                  className="h-52 mb-5 rounded-lg"
                />
                <h1 className="text-xl font-extrabold mb-4">{todo.name}</h1>
                <p className="text-base text-gray-300  font-medium mb-6 ">
                  {truncateString(todo.description, 65)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

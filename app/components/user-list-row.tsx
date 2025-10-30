import { Button } from "./button";

interface UserListRowProps {
  data: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
}

export function UserListRow({ data }: UserListRowProps) {
  function viewDetails(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault;
  }
  return (
    <tr>
      {" "}
      <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {data.name}
      </td>{" "}
      <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {data.username}
      </td>{" "}
      <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {data.email}
      </td>{" "}
      <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <Button buttonText={"Details"} onClick={viewDetails} />
      </td>{" "}
    </tr>
  );
}

import { useState } from "react";
import { Button } from "~/components/button";
import { UserListRow } from "~/components/user-list-row";

const fakeUserList = [
  {
    id: 1,
    name: "john smith",
    username: "asdf",
    email: "what@ever.com",
  },
  {
    id: 2,
    name: "jane smith",
    username: "sdad",
    email: "what@ever.com",
  },
  {
    id: 3,
    name: "john paul",
    username: "asgfsdgsddf",
    email: "what@ever.com",
  },
  {
    id: 4,
    name: "ane paul",
    username: "dfgdfh",
    email: "what@ever.com",
  },
];

const tableHeadClass =
  "w-1/2 border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200";

export default function Userlist() {
  const [userList, setUserList] = useState(fakeUserList);

  return (
    <div className="px-4 py-8 sm:px-8 not-prose rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
      <table className="w-full border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">
        {" "}
        <thead className="bg-gray-50 dark:bg-gray-700">
          {" "}
          <tr>
            {" "}
            <th className={tableHeadClass}>Name</th>{" "}
            <th className={tableHeadClass}>Username</th>{" "}
            <th className={tableHeadClass}>Email</th>{" "}
            <th className={tableHeadClass}>Actions</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {userList.map((data) => {
            return <UserListRow data={data} />;
          })}{" "}
        </tbody>
      </table>
    </div>
  );
}

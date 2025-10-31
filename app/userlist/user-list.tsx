import { useEffect, useState } from "react";
import { UserListRow } from "~/components/user-list-row";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { User } from "~/store/reducers";

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
  const [userList, setUserList] = useState<User[]>([]);
  const dispatch = useAppDispatch();
  const usersData = useAppSelector((state) => state.users);

  useEffect(() => {
    console.log("FETCH USERS ON PAGE LOAD");
    dispatch({
      type: "FETCH_USERS",
      payload: {
        query: "",
      },
    });
  }, []);

  useEffect(() => {
    console.log("SET USERS");
    console.log(usersData.isLoading, "CHECK ISLOADING");
    setUserList(usersData.users);
  }, [usersData, setUserList]);

  return (
    <div className="px-4 sm:px-8 not-prose rounded-lg bg-white dark:bg-gray-950/50">
      <table className="w-full border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">
        {" "}
        <thead className="bg-gray-50 dark:bg-gray-700">
          {" "}
          <tr>
            {" "}
            <th className={tableHeadClass}>
              {userList.length === 0 ? (
                <div className="h-2 rounded bg-gray-200 px-2 dark:bg-gray-700"></div>
              ) : (
                <></>
              )}
            </th>{" "}
            <th className={tableHeadClass}>
              {userList.length === 0 ? (
                <div className="h-2 rounded bg-gray-200 max-w-30 md:max-w-50  px-2 dark:bg-gray-700"></div>
              ) : (
                "Name"
              )}
            </th>{" "}
            <th className={tableHeadClass}>
              {userList.length === 0 ? (
                <div className="h-2 rounded bg-gray-200 max-w-30 md:max-w-50  px-2 dark:bg-gray-700"></div>
              ) : (
                "Username"
              )}
            </th>{" "}
            <th className={tableHeadClass}>
              {userList.length === 0 ? (
                <div className="h-2 rounded bg-gray-200 max-w-30 md:max-w-50  px-2 dark:bg-gray-700"></div>
              ) : (
                "Actions"
              )}
            </th>{" "}
          </tr>{" "}
        </thead>{" "}
        {userList.length === 0 ? (
          <tbody>
            {fakeUserList.map((data) => {
              return <UserListRow data={data} isMock />;
            })}
          </tbody>
        ) : (
          <tbody>
            {userList.map((data) => {
              return <UserListRow data={data} />;
            })}{" "}
          </tbody>
        )}
      </table>
    </div>
  );
}

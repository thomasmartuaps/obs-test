import { useEffect, useState } from "react";
import { useAppSelector } from "~/store/hooks";
import type { User } from "~/store/reducers";
import { Button } from "./button";

interface UserDetailsFormProps {
  id?: number;
}

export function UserDetailsForm({ id }: UserDetailsFormProps) {
  const [user, setUser] = useState<User | null>(null);
  const usersData = useAppSelector((state) => state.users);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const labels = Array.from(e.target.labels || []);
    if (user) {
      setUser({
        ...user,
        [labels?.[0].innerText]: e.target.value ?? "",
      });
    }
  }

  useEffect(() => {
    const currentUser = usersData.users.find((val) => val.id === id);
    setUser(
      currentUser ?? {
        id: Math.max(...usersData.users.map((val) => val.id)) + 1,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      }
    );
  }, [id, setUser, usersData]);

  function onChangeForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.target, "HI");
  }

  return (
    <form onChange={onChangeForm}>
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white">Profile</h2>

          <p className="mt-1 text-sm/6 text-gray-400">
            {id
              ? "View and edit user profile and information."
              : "Add new user information"}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-white"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="janesmith"
                    defaultValue={user?.username}
                    onChange={handleInputChange}
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4 mt-4">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-white"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    type="name"
                    name="email"
                    placeholder="Jane"
                    defaultValue={user?.name}
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4 mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4 mt-4">
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-medium text-white"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    type="phone"
                    name="phone"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4 mt-4">
                <label
                  htmlFor="website"
                  className="block text-sm/6 font-medium text-white"
                >
                  Website
                </label>
                <div className="mt-2">
                  <input
                    id="website"
                    type="text"
                    name="website"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

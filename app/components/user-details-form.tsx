import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "~/store/hooks";
import type { User } from "~/store/reducers";
import { Button } from "./button";

interface UserDetailsFormProps {
  id?: number;
  handleSubmitUser: (user: User) => void;
}

export function UserDetailsForm({
  id,
  handleSubmitUser,
}: UserDetailsFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const usersData = useAppSelector((state) => state.users);
  const newId = Math.max(...usersData.users.map((val) => val.id)) + 1;
  const [user, setUser] = useState<User>({
    id: newId,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    img: `https://picsum.photos/id/${newId}/100/150.jpg`,
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (user) {
      setUser({
        ...user,
        [e.target.name]: e.target.value ?? "",
      });
    }
  }

  function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    handleSubmitUser(user);
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  useEffect(() => {
    const currentUser = usersData.users.find((val) => val.id === id);
    if (currentUser) {
      setUser(currentUser);
    }
  }, [id, setUser, usersData]);

  /*   function onChangeForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.target, "HI");
  } */

  return (
    <form ref={formRef} /* onChange={onChangeForm} */>
      <div className="space-y-12">
        <div className="border-b border-white/10 mb-4 pb-4">
          {/* <h2 className="text-base/7 font-semibold text-white">Profile</h2>

          <p className="mt-1 text-sm/6 text-gray-400">
            {id
              ? "View and edit user profile and information."
              : "Add new user information"}
          </p> */}

          <div className="mt-4 grid grid-cols-1 gap-x-4 sm:gap-x-8 gap-y-4 sm:grid-cols-4 ">
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
                    name="name"
                    placeholder="Jane"
                    defaultValue={user?.name}
                    onChange={handleInputChange}
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
                    defaultValue={user?.email}
                    onChange={handleInputChange}
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
                    defaultValue={user?.phone}
                    onChange={handleInputChange}
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
                    defaultValue={user?.website}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
              <div className="sm:col-span-4 mt-4 ">
                <h2 className="text-base/7 font-semibold mb-4 text-white">
                  Profile Photo
                </h2>
                <img className={"max-md:max-w-20"} src={user?.img} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <Button buttonText={"Save"} color={"indigo"} onClick={onSubmit} />
        </div>
      </div>
    </form>
  );
}

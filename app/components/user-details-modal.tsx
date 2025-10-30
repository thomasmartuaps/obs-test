import { Button } from "./button";
import { UserDetailsForm } from "./user-details-form";

interface UserDetailsModalProps {
  id?: number;
  handleClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface UserDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export function UserDetailsModal({ id, handleClose }: UserDetailsModalProps) {
  function viewDetails(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault;
  }
  return (
    <div className="max-w-screen w-full space-y-6 " role="dialog">
      <div
        className=" px-4 py-8 my-auto mx-auto sm:px-8 not-prose rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50"
        role="document"
      >
        <div className="w-full border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">
          <div className="border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200 flex flex-col md:flex-row space-x-0 md:space-x-2 bg-gray-50 dark:bg-gray-700">
            <h5 className="modal-title">
              {id ? "User Details" : "Add New User"}
            </h5>
          </div>
          <div className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <UserDetailsForm id={id} />
          </div>
          <div className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400 space-x-6">
            <Button buttonText={"Save"} onClick={viewDetails} />
            {id ? <Button buttonText={"Delete"} onClick={viewDetails} /> : null}
            <Button buttonText={"Close"} onClick={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

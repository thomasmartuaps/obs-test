import { useRef, useState } from "react";
import { Button } from "./button";
import { UserDetailsForm } from "./user-details-form";
import type { User } from "~/store/reducers";
import { useAppDispatch } from "~/store/hooks";
import { Modal } from "@mui/material";

interface UserDetailsModalProps {
  id?: number;
  handleClose: () => void;
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
  const dispatch = useAppDispatch();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  function handleSubmitEdit(user: User) {
    console.log("SUBMITTING");
    console.log(user, "BEFORE SUBMIT");
    if (id === user.id) {
      dispatch({
        type: "EDIT_USER",
        payload: {
          user,
        },
      });
    } else {
      console.log("ADD NEW USER");
      dispatch({
        type: "ADD_USER",
        payload: {
          user,
        },
      });
    }
    handleClose();
  }
  function confirmDelete() {
    setDeleteModalOpen(true);
  }
  function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch({
      type: "DELETE_USER",
      payload: {
        id,
      },
    });
    setDeleteModalOpen(false);
    handleClose();
  }
  function cancelDelete() {
    setDeleteModalOpen(false);
  }
  return (
    <div className="max-w-screen w-full space-y-6 " role="dialog">
      <div
        className="max-h-800 px-4 py-8 my-auto mx-auto sm:px-8 md:px-12 lg:px-36 sm:py-8 not-prose rounded-lg"
        role="document"
      >
        <div className="w-full border-collapse border border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800">
          <div className="border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200 flex flex-col md:flex-row space-x-0 md:space-x-2 bg-gray-50 dark:bg-gray-700">
            <h5 className="modal-title">
              {id ? "User Details" : "Add New User"}
            </h5>
          </div>
          <div className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <UserDetailsForm id={id} handleSubmitUser={handleSubmitEdit} />
          </div>
          <div className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400 space-x-6">
            {id ? (
              <Button
                buttonText={"Delete"}
                color="red"
                onClick={confirmDelete}
              />
            ) : null}
            <Button buttonText={"Close"} onClick={handleClose} />
          </div>
        </div>
        <Modal
          open={deleteModalOpen}
          onClose={cancelDelete}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <div className="flex items-center justify-center">
            <div className="my-75 sm:my-50 mx-auto sm:px-8 md:px-12 lg:px-36 sm:py-8 not-prose rounded-lg ">
              <div className="border border-gray-300 p-4 text-left font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200 flex flex-col md:flex-row space-x-0 md:space-x-2 bg-gray-50 dark:bg-gray-700">
                <h5 className="modal-title">
                  Are you sure you want to delete this user?
                </h5>
              </div>
              <div className="w-half space-x-6 px-4 py-8 border border-gray-300 p-4 border-gray-400 bg-white text-sm dark:border-gray-500 dark:bg-gray-800 text-gray-500 dark:border-gray-700 dark:text-gray-400 border-b border-white/10 mb-4 pb-4">
                <Button buttonText={"Yes"} color="red" onClick={handleDelete} />
                <Button
                  buttonText={"No"}
                  color="indigo"
                  onClick={cancelDelete}
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

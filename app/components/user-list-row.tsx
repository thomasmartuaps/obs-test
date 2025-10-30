import { useState } from "react";
import { Button } from "./button";
import { Modal } from "@mui/material";
import { UserDetailsModal } from "./user-details-modal";

interface UserListRowProps {
  data: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
}

export function UserListRow({ data }: UserListRowProps) {
  const [modalOpen, setModalOpen] = useState(false);
  function viewDetails(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault;
    setModalOpen(true);
  }
  function handleClose() {
    setModalOpen(false);
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
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <UserDetailsModal id={data.id} handleClose={handleClose} />
      </Modal>
    </tr>
  );
}

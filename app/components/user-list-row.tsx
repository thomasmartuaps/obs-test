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
    img?: string;
  };
  isMock?: boolean;
}

export function UserListRow({ data, isMock }: UserListRowProps) {
  const [modalOpen, setModalOpen] = useState(false);
  function viewDetails(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault;
    setModalOpen(true);
  }
  function handleClose() {
    setModalOpen(false);
  }
  return (
    <tr className={isMock ? "animate-pulse" : ""}>
      {" "}
      <td className="border border-gray-300 min-w-20 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {isMock ? (
          <div className="h-2 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        ) : (
          <img className={"max-w-15"} src={data?.img} />
        )}
      </td>{" "}
      <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {isMock ? (
          <div className="h-2 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        ) : (
          data.name
        )}
      </td>{" "}
      <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {isMock ? (
          <div className="h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
        ) : (
          data.username
        )}
      </td>{" "}
      <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {isMock ? (
          <div className="h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
        ) : (
          data.email
        )}
      </td>{" "}
      <td className="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        {isMock ? (
          <div className="h-2 rounded bg-gray-200 dark:bg-gray-700"></div>
        ) : (
          <Button buttonText={"Details"} onClick={viewDetails} />
        )}
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

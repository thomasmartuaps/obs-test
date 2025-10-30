import Userlist from "~/userlist/user-list";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Button } from "~/components/button";
import { UserDetailsModal } from "~/components/user-details-modal";
import { Modal } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "~/store/hooks";

export function Welcome() {
  const [modalOpen, setModalOpen] = useState(false);
  const usersData = useAppSelector((state) => state.users);

  function showAddModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault;
    setModalOpen(true);
  }
  function handleClose() {
    setModalOpen(false);
  }
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>

        <div className="max-w-2xl w-full px-4">
          <Userlist />
        </div>
        <div className="max-w-2xl mb-6 w-full px-4 ">
          <Button
            buttonText={"Add User"}
            onClick={showAddModal}
            isLoading={usersData.isLoading}
          />
          <Modal
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
          >
            <UserDetailsModal handleClose={handleClose} />
          </Modal>
        </div>
      </div>
    </main>
  );
}

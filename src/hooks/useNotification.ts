
import { useState } from "react";

export function useNotification() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const showNotification = (message: string) => {
    setModalMessage(message);
    setShowModal(true);
    setTimeout(() => setShowModal(false), 1000); // Hide after 2 seconds
  };

  return { showModal, modalMessage, showNotification };
}

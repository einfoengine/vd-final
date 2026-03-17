"use client";

import { MeetingModal } from "@/components/common/MeetingModal";
import { AuditModal } from "@/components/common/AuditModal";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  openMeetingModal: () => void;
  closeMeetingModal: () => void;
  isMeetingModalOpen: boolean;
  openAuditModal: () => void;
  closeAuditModal: () => void;
  isAuditModalOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const openMeetingModal = () => setIsMeetingModalOpen(true);
  const closeMeetingModal = () => setIsMeetingModalOpen(false);

  const openAuditModal = () => setIsAuditModalOpen(true);
  const closeAuditModal = () => setIsAuditModalOpen(false);

  return (
    <ModalContext.Provider
      value={{ 
        openMeetingModal, 
        closeMeetingModal, 
        isMeetingModalOpen,
        openAuditModal,
        closeAuditModal,
        isAuditModalOpen
      }}
    >
      {children}
      <MeetingModal
        isOpen={isMeetingModalOpen}
        onClose={closeMeetingModal}
      />
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={closeAuditModal}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

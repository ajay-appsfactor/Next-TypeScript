"use client";

import React from "react";
import { useModal } from "@/hooks/useModal";
import Modal from "@/ui/modal";

const Page = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <div className="p-6">
            <button
                onClick={openModal}
                className="border border-gray-300 px-4 py-3 cursor-pointer rounded-full bg-white hover:bg-gray-50 hover:text-gray-800"
            >
                Open Modal
            </button>

            <Modal isOpen={isOpen} onClose={closeModal} title="My Modal">
                <p>This is a simple modal using Tailwind CSS!</p>
                <button
                    onClick={closeModal}
                    className="border border-gray-300 px-3 py-2 cursor-pointer rounded-md mt-4 bg-white hover:bg-gray-50"
                >
                    Close
                </button>
            </Modal>
        </div>
    );
};

export default Page;

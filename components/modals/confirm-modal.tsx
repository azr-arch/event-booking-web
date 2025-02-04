"use client";

import { useConfirmModal } from "@/hooks/use-confirm-modal";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { useEffect, useState } from "react";

interface ConfirmModalProps {
    title: string;
    description?: string;
    onConfirm: () => void;
}

export const ConfirmModal = ({ title, description, onConfirm }: ConfirmModalProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const { isOpen, onClose } = useConfirmModal();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={onClose} variant={"outline"}>
                        Cancel
                    </Button>
                    <Button onClick={onConfirm} variant={"default"}>
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

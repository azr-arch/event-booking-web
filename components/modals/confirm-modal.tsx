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
}

export const ConfirmModal = ({ title, description }: ConfirmModalProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const { isOpen, onClose, confirmFn } = useConfirmModal();

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
                        Close
                    </Button>
                    {confirmFn && (
                        <Button onClick={confirmFn} variant={"default"}>
                            Confirm
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

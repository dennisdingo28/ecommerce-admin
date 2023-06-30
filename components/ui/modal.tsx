"use client"

import { ReactNode } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ModalProps {
    title: string,
    description: string,
    isOpen: boolean,
    onClose: ()=>void,
    children?: ReactNode
};

export const Modal: React.FC<ModalProps> = ({title,description,isOpen,onClose,children})=>{
    const onChange = (open: boolean) =>{
        if(!open)
        {
            onClose();
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div className="">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}
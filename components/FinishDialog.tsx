"use client"
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface Props {
    win: boolean;
    finish: boolean;
}

const Finish: React.FC<Props> = ({ win, finish }) => {
    return (
        <Dialog>
            <DialogTrigger asChild={finish}/>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{"You " + win ? "Won!" : "Lost!"}</DialogTitle>
                    <DialogDescription>
                        ;laksjdf;laksndf;laskndfl;kasndf;lkansdf;lkansdf;lkn
                    </DialogDescription>
                </DialogHeader>
                <div>

                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Finish;
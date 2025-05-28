"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { deleteAppointment } from "@/lib/actions/appointment.actions";
import { useLanguage } from "@/lib/context/LanguageContext";

interface DeleteModalProps {
  appointmentId: string;
}

const DeleteModal = ({ appointmentId }: DeleteModalProps) => {
  const { translations } = useLanguage();

  const handleDelete = async () => {
    try {
      await deleteAppointment(appointmentId);
    } catch (error) {
      console.log("Error deleting appointment:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash2 className="size-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {translations.modals.delete.title}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {translations.modals.delete.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            {translations.modals.delete.cancel}
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            {translations.modals.delete.confirm}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;

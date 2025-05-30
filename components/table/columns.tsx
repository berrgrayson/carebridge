"use client";

import { ColumnDef } from "@tanstack/react-table";
import StatusBadge from "../StatusBadge";
import { formatDateTime } from "@/lib/utils";
import { Doctors } from "@/constants";
import Image from "next/image";
import AppointmentModal from "../AppointmentModal";
import DeleteModal from "../DeleteModal";
import { Appointment } from "@/types/appwrite.types";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { useLanguage } from "@/lib/context/LanguageContext";

// Add refresh callback parameter
export const Columns = (refreshAppointments?: () => void) => {
  const { translations } = useLanguage();

  const columns: ColumnDef<Appointment>[] = [
    {
      header: translations.table.id,
      cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>,
    },
    {
      accessorKey: "patient",
      header: translations.table.patient,
      cell: ({ row }) => (
        <p className="text-14-medium">{row.original.patient.name}</p>
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {translations.table.status}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="min-w-[115px]">
          <StatusBadge status={row.original.status} />
        </div>
      ),
    },
    {
      accessorKey: "schedule",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {translations.table.appointment}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <p className="text-14-regular min-w-[100px]">
          {formatDateTime(row.original.schedule).dateTime}
        </p>
      ),
    },
    {
      accessorKey: "primaryPhysician",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {translations.table.doctor}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const doctor = Doctors.find(
          (doc) => doc.name === row.original.primaryPhysician
        );

        return (
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image || ""}
              alt={doctor?.name || ""}
              width={100}
              height={100}
              className="size-8"
            />
            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
          </div>
        );
      },
    },
    {
      id: "actions",
      header: () => <div className="pl-4">{translations.table.actions}</div>,
      cell: ({ row: { original: data } }) => {
        return (
          <div className="flex gap-1">
            <AppointmentModal
              type="schedule"
              patientId={data.patient.$id}
              userId={data.userId}
              appointment={data}
              onSuccess={refreshAppointments} // Pass refresh callback
            />
            <AppointmentModal
              type="cancel"
              patientId={data.patient.$id}
              userId={data.userId}
              appointment={data}
              onSuccess={refreshAppointments} // Pass refresh callback
            />
            <DeleteModal
              appointmentId={data.$id}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onSuccess={refreshAppointments} // Pass refresh callback
            />
          </div>
        );
      },
    },
  ];

  return columns;
};

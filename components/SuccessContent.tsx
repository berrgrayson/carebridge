"use client";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { Appointment } from "@/types/appwrite.types";

interface SuccessContentProps {
  userId: string;
  appointment: Appointment;
}

const SuccessContent = ({ userId, appointment }: SuccessContentProps) => {
  const { translations } = useLanguage();
  const doctor = Doctors.find(
    (doc) => doc.name === appointment.primaryPhysician
  );

  return (
    <div className="success-img">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full.svg"
          height={1000}
          width={1000}
          alt="logo"
          className="h-10 w-fit"
        />
      </Link>

      <section className="flex flex-col items-center">
        <Image
          src="/assets/gifs/success.gif"
          height={300}
          width={280}
          alt="success"
        />
        <h2 className="header mb-6 max-w-[600px] text-center">
          {translations.notifications.scheduled
            .replace("{{time}}", formatDateTime(appointment.schedule).dateTime)
            .replace("{{doctor}}", doctor?.name || "")}
        </h2>
        <p>{translations.common.success}</p>
      </section>

      <section className="request-details">
        <p>{translations.appointment.details}:</p>
        <div className="flex items-center gap-3">
          <Image
            src={doctor?.image || "/assets/icons/doctor-placeholder.svg"}
            alt={`Dr. ${doctor?.name || "Unknown"}`}
            width={100}
            height={100}
            className="size-14"
          />
          <p className="whitespace-nowrap">Dr. {doctor?.name || "Unknown"}</p>
        </div>
        <div className="flex gap-2">
          <Image
            src="/assets/icons/calendar.svg"
            height={24}
            width={24}
            alt="calendar"
          />
          <p>{formatDateTime(appointment.schedule).dateTime}</p>
        </div>
      </section>

      <Button variant="outline" className="shad-primary-btn" asChild>
        <Link href={`/patients/${userId}/new-appointment`}>
          {translations.patient.bookAnotherAppointment}
        </Link>
      </Button>

      <p className="copyright">© 2025 CareBridge</p>
    </div>
  );
};

export default SuccessContent;

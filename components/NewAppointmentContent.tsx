"use client";

import AppointmentForm from "@/components/forms/AppointmentForm";
import Image from "next/image";
import { useLanguage } from "@/lib/context/LanguageContext";
import { Patient } from "@/types/appwrite.types";

interface NewAppointmentContentProps {
  userId: string;
  patient: Patient;
}

const NewAppointmentContent = ({
  userId,
  patient,
}: NewAppointmentContentProps) => {
  const { translations } = useLanguage();

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            translations={translations}
          />

          <p className="copyright mt-10 py-12">© 2025 CareBridge</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointmentContent;

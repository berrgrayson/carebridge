"use client";

import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";

const HomeContent = () => {
  const { translations } = useLanguage();

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 CareBridge
            </p>
            <Link href="/?admin=true" className="text-green-500">
              {translations.common.adminDashboard}
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default HomeContent;

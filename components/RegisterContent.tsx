"use client";

import RegisterForm from "@/components/forms/RegisterForm";
import Image from "next/image";
import { useLanguage } from "@/lib/context/LanguageContext";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { User } from "@/types/appwrite.types";

interface RegisterContentProps {
  user: User;
}

const RegisterContent = ({ user }: RegisterContentProps) => {
  const { translations } = useLanguage();

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <RegisterForm user={user} translations={translations} />

          <p className="copyright py-12">© 2025 CareBridge</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default RegisterContent;

"use client";

import StatCard from "@/components/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";
import { DataTable } from "@/components/table/DataTable";
import { Columns } from "@/components/table/columns";
import { useLanguage } from "@/lib/context/LanguageContext";
import { useEffect, useState } from "react";
import { Appointment } from "@/types/appwrite.types";

interface AppointmentData {
  totalCount: number;
  scheduledCount: number;
  pendingCount: number;
  cancelledCount: number;
  documents: Appointment[];
}

const Admin = () => {
  const { translations } = useLanguage();
  const [appointments, setAppointments] = useState<AppointmentData | null>(
    null
  );
  const columns = Columns();

  useEffect(() => {
    const fetchAppointments = async () => {
      const data = await getRecentAppointmentList();
      if (data) {
        setAppointments(data);
      }
    };

    fetchAppointments();
  }, []);

  if (!appointments) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="Logo"
            className="h-8 w-fit"
          />
        </Link>

        <div className="flex items-center gap-4">
          <p className="text-16-semibold">
            {translations.common.adminDashboard}
          </p>
        </div>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">{translations.common.welcome}</h1>
          <p className="text-dark-700">
            {translations.common.manageAppointments}
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label={translations.stats.scheduledAppointments}
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label={translations.stats.pendingAppointments}
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label={translations.stats.cancelledAppointments}
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default Admin;

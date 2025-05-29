"use client";

import StatCard from "@/components/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";
import { DataTable } from "@/components/table/DataTable";
import { Columns } from "@/components/table/columns";
import { useLanguage } from "@/lib/context/LanguageContext";
import { useEffect, useState, useCallback } from "react";
import { Appointment } from "@/types/appwrite.types";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { handleLogout } from "@/lib/utils";

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
  const [isLoading, setIsLoading] = useState(false);

  const fetchAppointments = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getRecentAppointmentList();
      if (data) {
        setAppointments(data);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Function to refresh data - will be passed to child components
  const refreshAppointments = useCallback(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  const columns = Columns(refreshAppointments); // Pass refresh function to columns

  if (!appointments) {
    return (
      <div>
        <Loader />
      </div>
    );
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

        <div>
          <Button
            onClick={handleLogout}
            className="shad-button_ghost"
            variant="ghost"
          >
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
              className="mr-1"
            />
            Logout
          </Button>
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

        <DataTable
          columns={columns}
          data={appointments.documents}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          isLoading={isLoading}
        />
      </main>
    </div>
  );
};

export default Admin;

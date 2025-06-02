import { getAppointment } from "@/lib/actions/appointment.actions";
import SuccessContent from "@/components/SuccessContent";

interface SuccessProps {
  params: Promise<{ userId: string }>;
  searchParams: Promise<Record<string, string>>;
}

const Success = async ({ params, searchParams }: SuccessProps) => {
  // Await both params and searchParams simultaneously
  const [{ userId }, { appointmentId }] = await Promise.all([
    params,
    searchParams,
  ]);

  // Handle missing appointmentId safely
  const appointmentIdValue = appointmentId || "";

  // Only fetch appointment if we have an ID
  const appointment = appointmentIdValue
    ? await getAppointment(appointmentIdValue)
    : null;

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <SuccessContent userId={userId} appointment={appointment} />
    </div>
  );
};

export default Success;

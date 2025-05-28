import { getAppointment } from "@/lib/actions/appointment.actions";
import SuccessContent from "@/components/SuccessContent";

// http://localhost:3000/patients/123/new-appointment/success?appointmentId=123
const Success = async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <SuccessContent userId={userId} appointment={appointment} />
    </div>
  );
};

export default Success;

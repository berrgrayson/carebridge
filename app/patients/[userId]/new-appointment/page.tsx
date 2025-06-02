import { getPatient } from "@/lib/actions/patient.actions";
import NewAppointmentContent from "@/components/NewAppointmentContent";

export default async function NewAppointment({ params }: SearchParamProps) {
  // Await the entire params object first
  const { userId } = await params;

  const patient = await getPatient(userId);

  return <NewAppointmentContent userId={userId} patient={patient} />;
}

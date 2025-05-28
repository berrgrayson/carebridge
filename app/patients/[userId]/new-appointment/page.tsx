import { getPatient } from "@/lib/actions/patient.actions";
import NewAppointmentContent from "@/components/NewAppointmentContent";

export default async function NewAppointment({ params }: SearchParamProps) {
  const { userId } = params;
  const patient = await getPatient(userId);

  return <NewAppointmentContent userId={userId} patient={patient} />;
}

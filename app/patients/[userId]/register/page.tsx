import { getUser } from "@/lib/actions/patient.actions";
import RegisterContent from "@/components/RegisterContent";

const Register = async ({ params }: SearchParamProps) => {
  const { userId } = await params;
  const user = await getUser(userId);

  return <RegisterContent user={user} />;
};

export default Register;

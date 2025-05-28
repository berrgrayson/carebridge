import PasskeyModal from "@/components/PasskeyModal";
import HomeContent from "@/components/HomeContent";

export default function Home({ searchParams }: SearchParamProps) {
  const params = searchParams;
  const isAdmin = params.admin === "true";

  return (
    <>
      {isAdmin && <PasskeyModal />}
      <HomeContent />
    </>
  );
}

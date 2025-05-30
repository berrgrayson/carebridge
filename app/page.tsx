import PasskeyModal from "@/components/PasskeyModal";
import HomeContent from "@/components/HomeContent";

export default async function Home({ searchParams }: SearchParamProps) {
  const params = await searchParams;
  const isAdmin = params.admin === "true";

  return (
    <>
      {isAdmin && <PasskeyModal />}
      <HomeContent />
    </>
  );
}

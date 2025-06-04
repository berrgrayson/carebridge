"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { decryptKey } from "@/lib/utils";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const encryptedKey = localStorage.getItem("accessKey");
      const accessKey = encryptedKey && decryptKey(encryptedKey);

      if (
        !encryptedKey ||
        accessKey !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY
      ) {
        router.push("/");
        return;
      }

      setIsAuthorized(true);
    };

    checkAuth();
  }, [router]);

  if (!isAuthorized) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
};

export default AuthGuard;

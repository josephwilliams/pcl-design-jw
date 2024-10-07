import { ReactNode, useEffect, useState } from "react";

export default function ClientOnly({
  children,
  fallback = null,
}: {
  children?: ReactNode;
  fallback?: ReactNode;
}): ReactNode | null {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const isWindow = typeof window !== undefined;
  return mounted && isWindow ? children : fallback;
}

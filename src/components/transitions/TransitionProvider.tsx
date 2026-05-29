// components/transitions/TransitionProvider.tsx

"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import BulbTransition from "./BulbTransition";

type TransitionContextType = {
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  navigate: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [active, setActive] = useState(false);

  const navigate = useCallback(
    (href: string) => {
      setActive(true);

      setTimeout(() => {
        router.push(href);
      }, 2100);

      setTimeout(() => {
        setActive(false);
      }, 2600);
    },
    [router],
  );

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}

      <BulbTransition active={active} />
    </TransitionContext.Provider>
  );
}

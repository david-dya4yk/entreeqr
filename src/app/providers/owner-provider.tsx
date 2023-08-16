import { useGetCurrentOwnerQuery } from "@/features/auth/hooks/auth.gen";
import { OwnerFragment } from "@/features/owners/hooks/owners.gen";
import { createContext, FC, ReactNode, useMemo } from "react";

/**
 * Owner context interface
 */
export interface OwnerContextInterface {
  owner: OwnerFragment | null;
  refetch: () => void;
  loading: boolean;
}

/**
 * Owner context instance
 */
export const OwnerContext = createContext<OwnerContextInterface>({} as any);

interface OwnerProviderProps {
  children: ReactNode;
}

const OwnerProvider: FC<OwnerProviderProps> = ({ children }) => {
  const { data, loading, refetch } = useGetCurrentOwnerQuery();

  // const value = useMemo(() => {
  //   const owner = data?.auth.me ?? null;
  //   return { owner, loading, refetch };
  // }, [data, loading, refetch]);

  return (
    <OwnerContext.Provider
      value={{ owner: data?.auth.me ?? null, loading, refetch }}
    >
      {children}
    </OwnerContext.Provider>
  );
};

export default OwnerProvider;

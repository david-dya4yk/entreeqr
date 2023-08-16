import { useContext } from "react";
import { OwnerContext } from "../providers/owner-provider";

export const useOwnerContext = () => useContext(OwnerContext);

import { ReactNode } from "react";

export type FunnelProps = {
  title: string;
  children: ReactNode;
  allowPrev?: boolean;
  func?:<T> (params: T) => any;
}
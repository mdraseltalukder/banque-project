import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banque | blog",
  description: "Welcome to banque",
};
export default function FeatureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

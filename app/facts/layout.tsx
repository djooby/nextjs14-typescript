import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Facts",
  description: "",
};

export default function FactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

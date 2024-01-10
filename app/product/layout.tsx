import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All products",
  description: "The page of products",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

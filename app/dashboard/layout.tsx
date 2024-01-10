import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "The dashboard page",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <>
      {/* {props.children} */}
      <div className="grid grid-cols-2">
        {props.team}
        {props.analytics}
      </div>
    </>
  );
}

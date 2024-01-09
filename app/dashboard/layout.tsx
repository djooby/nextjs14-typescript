import "../globals.css";

export default function RootLayout(props: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      <div className="grid grid-cols-2">
        {props.team}
        {props.analytics}
      </div>
    </>
  );
}

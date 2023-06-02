import AuthNavbar from "../components/AuthNavbar";
import Whatsapp from "../components/Whatsapp/Whatsapp";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AuthNavbar></AuthNavbar>
      <main>{children}</main>
      <Whatsapp></Whatsapp>
    </>
  );
}
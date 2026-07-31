import NiwaFooter from "@/components/niwa/niwa-footer";
import NiwaNavbar from "@/components/niwa/niwa-navbar";

export default function NiwaProductLayout({ children }) {
  return (
    <main>
      <NiwaNavbar />
      {children}
      <NiwaFooter />
    </main>
  );
}

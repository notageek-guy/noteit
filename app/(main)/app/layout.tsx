import Sidebar from "@/components/common/Sidebar";
export default function AppLayout(props: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col pl-72">
      <Sidebar />
      {props.children}
    </main>
  );
}
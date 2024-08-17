import MainFooter from "./components/layout/main-footer";
import MainHeader from "./components/layout/main-header";
import MainSection from "./components/layout/main-trade-section";
import MainUserSection from "./components/layout/main-user-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <MainHeader />

      <MainSection />

      <MainUserSection />

      <MainFooter />
    </main>
  );
}

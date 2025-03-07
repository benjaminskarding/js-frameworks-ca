import { Outlet } from "react-router-dom";
import Header from "./Components/HeaderFooter/Header";
import Footer from "./Components/HeaderFooter/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen px-4 md:px-20 my-14">
      <Header />
      <main className="-mt-4 md:mt-0 md:pt-2 space-y-52">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

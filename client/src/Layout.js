import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout({ search, setSearch }) {
  return (
    <main>
      <Header search={search} setSearch={setSearch} />
      <Outlet />
    </main>
  );
}
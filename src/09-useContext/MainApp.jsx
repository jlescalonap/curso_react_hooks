import { Navigate, Route, Routes } from "react-router-dom";

import { HomePage, LoginPage, AboutPage } from "./";
import { UserProvider } from "./context/UserProvider";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </UserProvider>
  );
};

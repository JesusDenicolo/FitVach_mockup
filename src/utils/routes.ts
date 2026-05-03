import { createBrowserRouter } from "react-router";
import { LoginPage } from "../components/LoginPage";
import { Dashboard } from "../components/Dashboard";
import { UserProfile } from "../components/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/profile/:id",
    Component: UserProfile,
  },
]);
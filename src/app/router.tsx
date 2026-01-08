import { createBrowserRouter } from "react-router-dom";
import { Analytics } from "./routes/analytics";
import { Calendar } from "./routes/calendar";
import { Chat } from "./routes/chat";
import { Crm } from "./routes/crm";
import { DashboardRoute } from "./routes/dashboard";
import { RootLayout } from "./routes/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <DashboardRoute /> },
      { path: "analytics", element: <Analytics /> },
      { path: "crm", element: <Crm /> },
      { path: "calendar", element: <Calendar /> },
      { path: "chat", element: <Chat /> },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { AnalyticsRoute } from "./routes/analytics";
import { CalendarRoute } from "./routes/calendar";
import { ChatRoute } from "./routes/chat";
import { CrmRoute } from "./routes/crm";
import { DashboardRoute } from "./routes/dashboard";
import { RootLayout } from "./routes/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <DashboardRoute /> },
      { path: "analytics", element: <AnalyticsRoute /> },
      { path: "crm", element: <CrmRoute /> },
      { path: "calendar", element: <CalendarRoute /> },
      { path: "chat", element: <ChatRoute /> },
    ],
  },
]);

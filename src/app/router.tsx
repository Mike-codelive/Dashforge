import { createBrowserRouter } from "react-router-dom";
import { AnalyticsRoute } from "./routes/analytics";
import { CrmRoute } from "./routes/crm";
import { CryptoRoute } from "./routes/crypto";
import { DashboardRoute } from "./routes/dashboard";
import { ProjectsRoute } from "./routes/projects";
import { RootLayout } from "./routes/root";
import { NftRoute } from "./routes/nft";
import { JobRoute } from "./routes/job";
import { TeamRoute } from "./routes/team";
import { FaqsRoute } from "./routes/faqs";
import { PrivacyRoute } from "./routes/privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <DashboardRoute /> },
      { path: "analytics", element: <AnalyticsRoute /> },
      { path: "crm", element: <CrmRoute /> },
      { path: "crypto", element: <CryptoRoute /> },
      { path: "projects", element: <ProjectsRoute /> },
      { path: "nft", element: <NftRoute /> },
      { path: "job", element: <JobRoute /> },
      { path: "team", element: <TeamRoute /> },
      { path: "faqs", element: <FaqsRoute /> },
      { path: "privacy", element: <PrivacyRoute /> },
    ],
  },
]);

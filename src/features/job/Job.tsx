import FeaturedCompanies from "./sections/FeaturedCompanies";
import JobStats from "./sections/JobStats";
import RecentApplicants from "./sections/RecentApplicants";
import RecommendedJobs from "./sections/RecommendedJobs";

export const Job = () => {
  return (
    <>
      <JobStats />
      <FeaturedCompanies />
      <RecommendedJobs />
      <RecentApplicants />
    </>
  );
};

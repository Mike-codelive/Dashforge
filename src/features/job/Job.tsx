import FeaturedCompanies from "./sections/FeaturedCompanies";
import JobStats from "./sections/JobStats";
import RecommendedJobs from "./sections/RecommendedJobs";

export const Job = () => {
  return (
    <>
      <JobStats />
      <FeaturedCompanies />
      <RecommendedJobs />
    </>
  );
};

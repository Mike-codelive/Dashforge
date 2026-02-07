import { Dollar } from "../../../icons";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  logo: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Themesbrand",
    location: "New York, USA",
    type: "Full Time",
    salary: "$4,500 - $6,000",
    logo: "/images/companies/themesbrand.png",
  },
  {
    id: 2,
    title: "UI / UX Designer",
    company: "Velzon Labs",
    location: "Remote",
    type: "Remote",
    salary: "$3,200 - $4,800",
    logo: "/images/companies/velzon.png",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "Web Technology",
    location: "Berlin, Germany",
    type: "Part Time",
    salary: "$3,800 - $5,200",
    logo: "/images/companies/webtech.png",
  },
];

export default function RecommendedJobs() {
  return (
    <section>
      <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recommended Jobs
          </h2>
          <button className="text-sm font-medium text-blue-600 hover:underline">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="mb-5 rounded-sm shadow-sm">
              <div className="flex flex-col gap-4 p-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Dollar className="max-h-7 max-w-7" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {job.company} · {job.location}
                    </p>
                    <span className="mt-2 inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6 md:justify-end">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {job.salary}
                  </p>
                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

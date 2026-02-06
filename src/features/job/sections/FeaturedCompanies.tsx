import { Dollar } from "../../../icons";

type Company = {
  name: string;
  category: string;
  jobs: number;
  logo: string;
};

const companies: Company[] = [
  {
    name: "Themesbrand",
    category: "IT & Software",
    jobs: 12,
    logo: "/images/companies/themesbrand.png",
  },
  {
    name: "Web Technology",
    category: "Technology",
    jobs: 18,
    logo: "/images/companies/webtech.png",
  },
  {
    name: "Skote Company",
    category: "Business",
    jobs: 6,
    logo: "/images/companies/skote.png",
  },
  {
    name: "Velzon Labs",
    category: "Design",
    jobs: 9,
    logo: "/images/companies/velzon.png",
  },
];

export default function FeaturedCompanies() {
  return (
    <section>
      <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Featured Companies
          </h2>
          <button className="text-sm font-medium text-blue-600 hover:underline">
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-DF-surface dark:bg-DF-bg-dark rounded-md p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Dollar className="max-h-10 max-w-10" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {company.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {company.category}
              </p>
              <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                {company.jobs} Jobs Available
              </p>
              <button className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-blue-600/30 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

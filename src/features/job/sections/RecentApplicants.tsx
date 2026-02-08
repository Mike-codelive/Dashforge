import { AccountCircle } from "../../../icons";

type ApplicantStatus = "New" | "Interview" | "Hired" | "Rejected";

type Applicant = {
  id: number;
  name: string;
  role: string;
  company: string;
  date: string;
  status: ApplicantStatus;
  avatar: string;
};

const applicants: Applicant[] = [
  {
    id: 1,
    name: "Kristin Watson",
    role: "UI / UX Designer",
    company: "Themesbrand",
    date: "12 Jan, 2024",
    status: "New",
    avatar: "/images/users/avatar-1.png",
  },
  {
    id: 2,
    name: "Cody Fisher",
    role: "React Developer",
    company: "Velzon Labs",
    date: "10 Jan, 2024",
    status: "Interview",
    avatar: "/images/users/avatar-2.png",
  },
  {
    id: 3,
    name: "Jane Cooper",
    role: "Backend Engineer",
    company: "Web Technology",
    date: "08 Jan, 2024",
    status: "Hired",
    avatar: "/images/users/avatar-3.png",
  },
  {
    id: 4,
    name: "Ronald Richards",
    role: "Product Manager",
    company: "Skote Company",
    date: "05 Jan, 2024",
    status: "Rejected",
    avatar: "/images/users/avatar-4.png",
  },
];

export default function RecentApplicants() {
  return (
    <section>
      <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 rounded-md p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Applicants
          </h2>
          <button className="text-sm font-medium text-blue-600 hover:underline">
            View All
          </button>
        </div>
        <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-900">
          <table className="w-full text-sm">
            <thead className="dark:bg-DF-bg-dark bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Applicant</th>
                <th className="px-6 py-3 text-left font-medium">Applied For</th>
                <th className="px-6 py-3 text-left font-medium">Company</th>
                <th className="px-6 py-3 text-left font-medium">Date</th>
                <th className="px-6 py-3 text-left font-medium">Status</th>
                <th className="px-6 py-3 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant) => (
                <tr
                  key={applicant.id}
                  className="dark:bg-DF-bg-dark border-gray-200 transition hover:bg-gray-50 dark:hover:bg-gray-800/40"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <AccountCircle className="h-9 w-9 rounded-full" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {applicant.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {applicant.role}
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    {applicant.company}
                  </td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                    {applicant.date}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium`}
                    >
                      {applicant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-medium text-blue-600 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

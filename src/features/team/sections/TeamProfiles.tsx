import { teamMembers } from "../data/teamMembers";
import { AccountCircle } from "../../../icons";

export default function TeamProfiles() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="card-shadow bg-DF-surface dark:bg-DF-bg-dark rounded-md p-5"
        >
          <div className="flex items-start gap-4">
            <AccountCircle className="h-12 w-12 rounded-full" />
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {member.role}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {member.email}
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-10">
            <div className="bg-DF-nav-search-bg-light dark:bg-DF-nav-search-bg-dark rounded-md py-3 text-center">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {member.projects}
              </p>
              <p className="text-xs text-gray-500">Projects</p>
            </div>
            <div className="bg-DF-nav-search-bg-light dark:bg-DF-nav-search-bg-dark rounded-md py-3 text-center">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                {member.tasks}
              </p>
              <p className="text-xs text-gray-500">Tasks</p>
            </div>
          </div>

          <div className="mt-5 flex justify-between">
            <button className="text-sm font-medium text-gray-700 hover:underline dark:text-gray-300">
              Profile
            </button>
            <button className="text-sm font-medium text-gray-700 hover:underline dark:text-gray-300">
              Message
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

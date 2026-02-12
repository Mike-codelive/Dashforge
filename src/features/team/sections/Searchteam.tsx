import { AddCircle, Search } from "../../../icons";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../teamSlice";
import type { AppDispatch } from "../../../store/store";
import { useEffect, useRef, useState } from "react";
import type { Member } from "../Team";

type Props = {
  onAddMember: (member: Member) => void;
};

export const SearchTeam = ({ onAddMember }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleSubmit = () => {
    if (!name.trim() || !role.trim() || !email.trim()) return;

    const newMember: Member = {
      id: crypto.randomUUID(),
      name: name.trim(),
      role: role.trim(),
      email: email.trim(),
      projects: 0,
      tasks: 0,
    };

    onAddMember(newMember);

    setName("");
    setRole("");
    setEmail("");
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-DF-surface dark:bg-DF-bg-dark">
        <div className="card-shadow mb-6 flex justify-between rounded-md p-5">
          <div className="relative">
            <input
              className="bg-DF-nav-search-bg-light dark:bg-DF-nav-search-bg-dark text-DF-nav-search-text-light dark:text-DF-nav-search-text-dark h-[38px] appearance-none rounded-sm pl-9 focus-visible:ring-1 focus-visible:ring-blue-500/30 focus-visible:outline-none"
              type="text"
              placeholder="Search Team"
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            <div className="pointer-events-none absolute top-0 left-2 flex h-full items-center">
              <Search />
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="hover:bg-DF-green hover:text-DF-hover-btn text-DF-green bg-DF-green-bg flex cursor-pointer items-center gap-1.5 rounded-sm px-[0.9rem] py-2 text-[0.8125rem] transition-[background,color] duration-[0.25s] ease-in-out"
          >
            <AddCircle className="h-3 w-3" />
            Add Members
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          onMouseDown={handleOutsideClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <div
            ref={modalRef}
            className="dark:bg-DF-bg-dark w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
          >
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Add New Member
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="dark:bg-DF-nav-search-bg-dark w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600"
              />

              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="dark:bg-DF-nav-search-bg-dark w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="dark:bg-DF-nav-search-bg-dark w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600"
              />
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="hover:bg-DF-green hover:text-DF-hover-btn text-DF-green bg-DF-green-bg flex cursor-pointer items-center gap-1.5 rounded-sm px-[0.9rem] py-2 text-[0.8125rem] transition-[background,color] duration-[0.25s] ease-in-out"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

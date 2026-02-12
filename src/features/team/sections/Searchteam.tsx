import { AddCircle, Search } from "../../../icons";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../teamSlice";
import type { AppDispatch } from "../../../store/store";

export const SearchTeam = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
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
        <button className="hover:bg-DF-green hover:text-DF-hover-btn text-DF-green bg-DF-green-bg flex cursor-pointer items-center gap-1.5 rounded-sm px-[0.9rem] py-2 text-[0.8125rem] transition-[background,color] duration-[0.25s] ease-in-out">
          <AddCircle className="h-3 w-3" />
          Add Members
        </button>
      </div>
    </div>
  );
};

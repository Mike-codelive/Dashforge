import { SearchTeam } from "./sections/Searchteam";
import TeamProfiles from "./sections/TeamProfiles";

export const Team = () => {
  return (
    <div className="min-h-screen">
      <SearchTeam />
      <TeamProfiles />
    </div>
  );
};

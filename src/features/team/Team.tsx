import { SearchTeam } from "./sections/Searchteam";
import TeamProfiles from "./sections/TeamProfiles";
import { useState } from "react";
import { teamMembers } from "./data/teamMembers";

export type Member = (typeof teamMembers)[number];

export const Team = () => {
  const [members, setMembers] = useState<Member[]>(teamMembers);

  const addMember = (member: Member) => {
    setMembers((prev) => [member, ...prev]);
  };

  return (
    <div className="min-h-screen">
      <SearchTeam onAddMember={addMember} />
      <TeamProfiles members={members} />
    </div>
  );
};

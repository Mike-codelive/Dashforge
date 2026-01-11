import { TrialUpgradeCard } from "../components/TrialUpgradeCard";
import { trialInfo } from "../data/trialInfo";
import { useNavigate } from "react-router-dom";

export const TrialUpgrade = () => {
  const navigate = useNavigate();

  return (
    <TrialUpgradeCard
      daysLeft={trialInfo.daysLeft}
      onUpgrade={() => navigate("/pricing")}
    />
  );
};

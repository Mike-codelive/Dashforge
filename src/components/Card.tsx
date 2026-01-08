import { ArrowUpward } from "../icons";
import { ICONS, type IconName } from "../icons/iconMap";
import { Button } from "./Button";

type StatusNumb = "green" | "red" | "gray";

type CardProps = {
  title: string;
  titleNumb?: number;
  counterNumb?: number;
  signNumb?: string;
  statusNumb?: StatusNumb;
  link?: string;
  icon?: IconName;
};

const STATUS_COLOR: Record<StatusNumb, string> = {
  green: "text-DF-green",
  red: "text-DF-danger",
  gray: "text-gray-400",
};

const STATUS_ROTATION: Record<Exclude<StatusNumb, "gray">, string> = {
  green: "rotate-45",
  red: "rotate-[135deg]",
};

const STATUS_BG: Record<StatusNumb, string> = {
  green: "bg-DF-green/10",
  red: "bg-DF-danger/10",
  gray: "bg-gray-200 dark:bg-gray-700",
};

export const Card = ({
  title,
  titleNumb,
  counterNumb,
  link,
  icon,
  signNumb,
  statusNumb,
}: CardProps) => {
  const Icon = icon ? ICONS[icon] : null;
  const statusClass = statusNumb ? STATUS_COLOR[statusNumb] : "";
  const statusBgClass = statusNumb ? STATUS_BG[statusNumb] : "";

  return (
    <div className="shadow-DF-card bg-DF-surface dark:bg-DF-bg-dark rounded-md">
      <div className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <p className="text-DF-muted text-sm uppercase">{title}</p>

          {titleNumb !== undefined && statusNumb && (
            <p
              className={`flex items-center gap-1 text-sm font-medium ${statusClass}`}
            >
              {statusNumb !== "gray" && (
                <ArrowUpward
                  className={`h-3 w-3 transition-transform ${STATUS_ROTATION[statusNumb]}`}
                />
              )}
              {signNumb}
              {titleNumb}%
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="mb-6 text-2xl font-semibold">${counterNumb}</p>
            {link && (
              <Button className={`cursor-pointer underline`}>{link}</Button>
            )}
          </div>
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-md ${statusBgClass}`}
          >
            {Icon && <Icon className="text-DF-card-icon h-8 w-8" aria-hidden />}
          </span>
        </div>
      </div>
    </div>
  );
};

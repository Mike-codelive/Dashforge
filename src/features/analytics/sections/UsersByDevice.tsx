import { Chart } from "../../../components/Chart";
import { usersByDevice } from "../data/usersByDevice";

export const UsersByDevice = () => {
  return (
    <div className="card-shadow bg-DF-surface dark:bg-DF-bg-dark mb-6 inline-block min-h-[432px] w-full rounded-md md:w-1/3">
      <div className="border-b border-white/5 p-4">
        <h4 className="font-semibold">Users by Device</h4>
      </div>

      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
        <div className="relative h-[220px]">
          <Chart
            type="doughnut"
            data={{
              labels: usersByDevice.map((d) => d.label),
              datasets: [
                {
                  data: usersByDevice.map((d) => d.value),
                  backgroundColor: usersByDevice.map((d) => d.color),
                  borderWidth: 0,
                  hoverOffset: 6,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              cutout: "70%",
              plugins: {
                legend: { display: false },
                tooltip: {
                  callbacks: {
                    label: (ctx) => `${ctx.label}: ${ctx.raw}%`,
                  },
                },
              },
            }}
          />
        </div>

        <div className="flex flex-col justify-center gap-4">
          {usersByDevice.map((device) => (
            <div
              key={device.label}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: device.color }}
                />
                <span className="text-sm">{device.label}</span>
              </div>
              <span className="font-medium">{device.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

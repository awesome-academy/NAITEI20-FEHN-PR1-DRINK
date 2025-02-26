import Metrics from "../../components/admin/dashboard/Metrics";
import SalesChart from "../../components/admin/dashboard/Chart";
import Target from "../../components/admin/dashboard/Target";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <Metrics />

          <SalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <Target />
        </div>
      </div>
    </>
  );
}

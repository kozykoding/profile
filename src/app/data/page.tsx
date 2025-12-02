import { AreaChartExample } from "./_components/areachart";
import { BarChartExample } from "./_components/barchart";
import { RadialExample } from "./_components/radial";
import { LineExample } from "./_components/linechart";
import { TableExample } from "./_components/table";

export default function DataPage() {
  return (
    <div className="container mt-8 p-2">
      <h1 className="mb-4 text-2xl font-extrabold">Data Visualization</h1>

      <div className="mx-auto flex grid grid-cols-4">
        <h2 className="text-primary col-span-2 mt-8 p-2 text-2xl font-extrabold">
          This is just a small example of data visualization I can present to
          stakeholders.
        </h2>
        <div className="p-2">
          <LineExample />
        </div>
        <div className="p-2">
          <RadialExample />
        </div>
      </div>

      <div className="mx-auto flex grid grid-cols-2">
        <div className="p-2">
          <AreaChartExample />
        </div>
        <div className="p-2">
          <BarChartExample />
        </div>
        <div className="col-span-2 p-2">
          <TableExample />
        </div>
      </div>
    </div>
  );
}

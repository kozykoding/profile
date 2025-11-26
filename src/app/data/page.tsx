import { AreaChartExample } from "./_components/areachart"
import { BarChartExample } from "./_components/barchart"
import { RadialExample } from "./_components/radial"
import { LineExample } from "./_components/linechart"

export default function DataPage() {
  return (
    <div className="container p-2 mt-8">
      <h1 className="text-2xl font-extrabold mb-4">
        Data Visualization
      </h1>

      <div className="flex grid grid-cols-4 mx-auto">
        <p className="p-2 col-span-2">
          This is just a small example of transformed data to present to stakeholders.
        </p>
        <div className="p-2">
          <LineExample />
        </div>
        <div className="p-2">
          <RadialExample />
        </div>
      </div>

      <div className="flex grid grid-cols-2 mx-auto">
        <div className="p-2">
          <AreaChartExample />
        </div>
        <div className="p-2">
          <BarChartExample />
        </div>
        
      </div>
    </div>
  )
}

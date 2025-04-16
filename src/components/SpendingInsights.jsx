import { PieChart, ResponsiveChartContainer } from "@mui/x-charts";

export default function SpendingInsights({ summaryValues, categories }) {
  
  // Build pie chart data from categories and summaryValues
  const pieData = categories.map((category, index) => ({
    id: index,
    value: summaryValues[category] || 0,
    label: category,
  }));

  return (
    <div className=" shadow border-lightgrey dark:bg-slategray dark:border-softgray dark:text-white w-[100%] rounded-md p-2.5 border">
      <h2 className=" font-bold">Spending Insights</h2>
      <div className=" flex justify-between">
        <PieChart series={[{ data: pieData }]} width={250} height={100} />
      </div>
    </div>
  );
}

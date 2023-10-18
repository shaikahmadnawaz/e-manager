import { Card, Title, BarChart } from "@tremor/react";
import React from "react";

interface DataPoint {
  date: string;
  "2022": number;
  "2023": number;
}

const chartdata3: DataPoint[] = [
  {
    date: "Jan",
    "2022": 40,
    "2023": 50,
  },
  {
    date: "Feb",
    "2022": 50,
    "2023": 60,
  },
  {
    date: "Mar",
    "2022": 60,
    "2023": 70,
  },
  {
    date: "Apr",
    "2022": 70,
    "2023": 80,
  },
  {
    date: "May",
    "2022": 80,
    "2023": 90,
  },
  {
    date: "Jun",
    "2022": 90,
    "2023": 100,
  },
];

export const DashboardBarChart: React.FC = () => {
  const [value, setValue] = React.useState<DataPoint | null>(null);
  return (
    <>
      <Card>
        <Title>REVENUE & TRANSACTION</Title>
        <BarChart
          className="mt-6"
          data={chartdata3}
          index="date"
          categories={["2022", "2023"]}
          colors={["neutral", "indigo"]}
          yAxisWidth={30}
          onValueChange={(v) => setValue(v)}
        />
      </Card>
    </>
  );
};

export default DashboardBarChart;

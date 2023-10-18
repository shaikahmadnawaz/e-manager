import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressCircle } from "@tremor/react";

interface DashboardCardProps {
  title: string;
  value: number;
  percentage: number;
  color: string;
}

const DashboardCard = ({
  title,
  value,
  percentage,
  color,
}: DashboardCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <div className="flex flex-col justify-evenly">
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-muted-foreground">
            {`+${percentage}% from last month`}
          </p>
        </div>
        <div>
          <ProgressCircle value={percentage} size="md" color={color}>
            <span className="text-xs text-primary font-medium">
              {percentage}
            </span>
          </ProgressCircle>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;

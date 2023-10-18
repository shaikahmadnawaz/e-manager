import { Flex, Text, ProgressBar } from "@tremor/react";

interface DashboardProgressbarProps {
  item: string;
  value: number;
  color: string;
  total: number;
}

const DashboardProgressbar = ({
  item,
  value,
  color,
  total,
}: DashboardProgressbarProps) => (
  <>
    <Flex>
      <Text>
        {item} ; {value}%
      </Text>
      <Text>₹ {total}</Text>
    </Flex>
    <ProgressBar value={value} color={color} className="mt-3" />
  </>
);

export default DashboardProgressbar;

import { Flex, Text, ProgressBar } from "@tremor/react";

interface DashboardProgressbarProps {
  item: string;
  value: number;
  total: number;
}

const DashboardProgressbar = ({
  item,
  value,
  total,
}: DashboardProgressbarProps) => (
  <>
    <Flex>
      <Text>
        {item} ; {value}%
      </Text>
      <Text>₹ {total}</Text>
    </Flex>
    <ProgressBar value={value} color="orange" className="mt-3" />
  </>
);

export default DashboardProgressbar;

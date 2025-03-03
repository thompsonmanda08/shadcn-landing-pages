import React, { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";
import {
  BadgeDollarSign,
  Banknote,
  BarChart,
  Briefcase,
  Calculator,
  CalendarCheck,
  Clock,
  CreditCard,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react";

type Metric = {
  icon: ReactNode;
  value: string;
  label: string;
  trend: string;
  trendPositive: boolean;
};

function SampleMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <MetricCard
        icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
        value="2.7"
        label="REPAYMENT AVERAGE RATIO"
        trend="+0.3 from last month"
        trendPositive={true}
      />
      <MetricCard
        icon={<Briefcase className="h-8 w-8 text-blue-600" />}
        value="9.3%"
        label="EXPOSURE LARGE DEPOSITS"
        trend="-1.2% from last month"
        trendPositive={true}
      />
      <MetricCard
        icon={<Calculator className="h-8 w-8 text-blue-600" />}
        value="0.70%"
        label="IMPAIRMENT"
        trend="+0.05% from last month"
        trendPositive={false}
      />
      <MetricCard
        icon={<CreditCard className="h-8 w-8 text-blue-600" />}
        value="9.00%"
        label="DEFAULT RATE"
        trend="-0.5% from last month"
        trendPositive={true}
      />
    </div>
  );
}

export const sampleMetrics: Metric[] = [
  {
    icon: <Banknote className="h-8 w-8 text-green-600" />,
    value: "150",
    label: "Total Active Loans",
    trend: "+10 from last month",
    trendPositive: true,
  },
  {
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    value: "$250K",
    label: "Total Loan Amount Disbursed",
    trend: "+$25K from last month",
    trendPositive: true,
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-purple-600" />,
    value: "95%",
    label: "On-Time Repayment Rate",
    trend: "+2% from last month",
    trendPositive: true,
  },
  {
    icon: <Clock className="h-8 w-8 text-red-600" />,
    value: "12%",
    label: "Overdue Loan Percentage",
    trend: "-1.5% from last month",
    trendPositive: false,
  },
  {
    icon: <Users className="h-8 w-8 text-orange-600" />,
    value: "1,200",
    label: "Total Borrowers",
    trend: "+100 from last month",
    trendPositive: true,
  },
  {
    icon: <BadgeDollarSign className="h-8 w-8 text-teal-600" />,
    value: "$3,500",
    label: "Average Loan Size",
    trend: "+$200 from last month",
    trendPositive: true,
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    value: "2.7",
    label: "Loan Portfolio Overview",
    trend: "+0.3 from last month",
    trendPositive: true,
  },
  {
    icon: <BarChart className="h-8 w-8 text-gray-600" />,
    value: "80%",
    label: "Loan Approval Rate",
    trend: "+5% from last month",
    trendPositive: true,
  },
];

export function DashboardMetrics({
  length = 8,
  metrics = [] as Metric[],
}: {
  length?: number;
  metrics?: Metric[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {(metrics.length > 0
        ? (metrics as Metric[])
        : (Array.from({ length }) as Metric[])
      ).map((metric, index: number) => (
        <MetricCard
          key={index}
          icon={
            metric?.icon || <TrendingUp className="h-8 w-8 text-blue-600" />
          }
          value={metric?.value || "0.00"}
          label={metric?.label || "TEST LABEL"}
          trend={metric?.trend || "+0.0 from last month"}
          trendPositive={metric?.trendPositive || false}
        />
      ))}
    </div>
  );
}

// Metric Card Component
export function MetricCard({
  icon,
  value,
  label,
  trend,
  trendPositive,
}: {
  icon: ReactNode;
  value: string;
  label: string;
  trend: string;
  trendPositive: boolean;
}) {
  return (
    <Card>
      <CardContent className="pt-2">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-xs font-medium text-gray-500 mt-1">
              {label}
            </div>
            {trend && (
              <div
                className={`text-xs mt-2 ${
                  trendPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {trend}
              </div>
            )}
          </div>
          <div className="p-2 bg-blue-50 rounded-full">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SampleMetrics;

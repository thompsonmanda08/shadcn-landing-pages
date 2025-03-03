import React, { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";
import { Briefcase, Calculator, CreditCard, TrendingUp } from "lucide-react";

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

export function DashboardMetrics({
  length = 8,
  metrics = [] as Metric[],
}: {
  length?: number;
  metrics?: Metric[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {(metrics.length > 0 ? metrics : Array.from({ length })).map(
        (metric, index) => (
          <MetricCard
            key={index}
            icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
            value="2.7"
            label="TEST LABEL"
            trend="+0.3 from last month"
            trendPositive={true}
          />
        )
      )}
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

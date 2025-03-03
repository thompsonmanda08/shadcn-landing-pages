import {
  BarChart3,
  DollarSign,
  LineChart,
  PieChart,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SampleMetrics, { DashboardMetrics, sampleMetrics } from "./metrics";

export default function LoanHighlights() {
  return (
    <div className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Key Metrics Section */}
        <SampleMetrics />

        {/* Portfolio Insights Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Portfolio Overview</TabsTrigger>
            <TabsTrigger value="performance">Loan Performance</TabsTrigger>
            <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-1">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Loan Distribution</h3>
                    <PieChart className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-md">
                    <div className="text-center">
                      <div className="relative w-40 h-40 mx-auto">
                        {/* Placeholder for pie chart */}
                        <div
                          className="absolute inset-0 rounded-full border-8 border-blue-500"
                          style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                          }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-green-500"
                          style={{
                            clipPath:
                              "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)",
                          }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-yellow-500"
                          style={{
                            clipPath:
                              "polygon(50% 50%, 50% 100%, 0 100%, 0 50%)",
                          }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-red-500"
                          style={{
                            clipPath: "polygon(50% 50%, 0 50%, 0 0, 50% 0)",
                          }}
                        ></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-purple-500"
                          style={{
                            clipPath:
                              "polygon(50% 50%, 50% 0, 100% 0, 100% 50%)",
                          }}
                        ></div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                          <span>Personal (35%)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                          <span>Mortgage (25%)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                          <span>Business (20%)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                          <span>Auto (15%)</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                          <span>Other (5%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-2">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">
                      Monthly Originations
                    </h3>
                    <BarChart3 className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-md">
                    <div className="w-full px-4">
                      {/* Placeholder for bar chart */}
                      <div className="flex items-end justify-between h-40 gap-2">
                        <div className="w-full">
                          <div className="bg-blue-500 h-20 rounded-t-sm"></div>
                          <div className="text-xs text-center mt-2">Jan</div>
                        </div>
                        <div className="w-full">
                          <div className="bg-blue-500 h-24 rounded-t-sm"></div>
                          <div className="text-xs text-center mt-2">Feb</div>
                        </div>
                        <div className="w-full">
                          <div className="bg-blue-500 h-16 rounded-t-sm"></div>
                          <div className="text-xs text-center mt-2">Mar</div>
                        </div>
                        <div className="w-full">
                          <div className="bg-blue-500 h-28 rounded-t-sm"></div>
                          <div className="text-xs text-center mt-2">Apr</div>
                        </div>
                        <div className="w-full">
                          <div className="bg-blue-500 h-32 rounded-t-sm"></div>
                          <div className="text-xs text-center mt-2">May</div>
                        </div>
                        <div className="w-full">
                          <div className="bg-blue-500 h-36 rounded-t-sm"></div>
                          <div className="text-xs text-center mt-2">Jun</div>
                        </div>
                        <div className="w-full">
                          <div className="bg-blue-500 h-28 rounded-t-sm"></div>
                          <div className="text-xs text-center mt-2">Jul</div>
                        </div>
                        <div className="w-full">
                          <div className="bg-blue-500 h-24 rounded-t-sm"></div>
                          <div className="text-xs text-center mt-2">Aug</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Payment Trends</h3>
                    <LineChart className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-md">
                    <div className="w-full px-4">
                      {/* Placeholder for line chart */}
                      <div className="relative h-40">
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
                        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gray-200"></div>
                        <div className="absolute bottom-2/3 left-0 right-0 h-px bg-gray-200"></div>
                        <div className="absolute top-0 left-0 right-0 h-px bg-gray-200"></div>

                        <svg className="absolute inset-0" viewBox="0 0 100 40">
                          <path
                            d="M0,30 L12.5,25 L25,28 L37.5,20 L50,15 L62.5,18 L75,10 L87.5,12 L100,8"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <div>Jan</div>
                        <div>Feb</div>
                        <div>Mar</div>
                        <div>Apr</div>
                        <div>May</div>
                        <div>Jun</div>
                        <div>Jul</div>
                        <div>Aug</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Loan Performance</h3>
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="text-sm text-gray-500 mb-1">
                        On-Time Payments
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        94.3%
                      </div>
                      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-green-500 h-full rounded-full"
                          style={{ width: "94.3%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="text-sm text-gray-500 mb-1">
                        Late Payments
                      </div>
                      <div className="text-2xl font-bold text-yellow-600">
                        4.7%
                      </div>
                      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-yellow-500 h-full rounded-full"
                          style={{ width: "4.7%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="text-sm text-gray-500 mb-1">Defaults</div>
                      <div className="text-2xl font-bold text-red-600">
                        1.0%
                      </div>
                      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-red-500 h-full rounded-full"
                          style={{ width: "1%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="text-sm text-gray-500 mb-1">
                        Prepayments
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        12.8%
                      </div>
                      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-500 h-full rounded-full"
                          style={{ width: "12.8%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="risk" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-1">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Risk Categories</h3>
                    <DollarSign className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Low Risk (AAA-A)
                        </span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-green-500 h-full rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Medium Risk (BBB-B)
                        </span>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-yellow-500 h-full rounded-full"
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          High Risk (CCC-C)
                        </span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-orange-500 h-full rounded-full"
                          style={{ width: "15%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">
                          Default Risk (D)
                        </span>
                        <span className="text-sm font-medium">5%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-red-500 h-full rounded-full"
                          style={{ width: "5%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-2">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">
                      Risk Exposure by Sector
                    </h3>
                    <BarChart3 className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-md">
                    <div className="w-full px-4">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Real Estate</span>
                                <span className="text-sm font-medium">
                                  $24.5M
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="bg-blue-500 h-full rounded-full"
                                  style={{ width: "70%" }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Consumer</span>
                                <span className="text-sm font-medium">
                                  $18.3M
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="bg-blue-500 h-full rounded-full"
                                  style={{ width: "55%" }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Commercial</span>
                                <span className="text-sm font-medium">
                                  $15.7M
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="bg-blue-500 h-full rounded-full"
                                  style={{ width: "45%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Agriculture</span>
                                <span className="text-sm font-medium">
                                  $8.2M
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="bg-blue-500 h-full rounded-full"
                                  style={{ width: "25%" }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Technology</span>
                                <span className="text-sm font-medium">
                                  $6.5M
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="bg-blue-500 h-full rounded-full"
                                  style={{ width: "20%" }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">Healthcare</span>
                                <span className="text-sm font-medium">
                                  $5.1M
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="bg-blue-500 h-full rounded-full"
                                  style={{ width: "15%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="metrics" className="mt-0">
            <DashboardMetrics metrics={sampleMetrics} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

import React from "react";
import LineChart from "../../../homepage/components/Charts/LineChartTemplate";
import MetricsComponentWrapper from "../../../utils/MetricsComponentWrapper";

const CPUUsageByNamespace = ({ metrics }) => {
  /* 
Renders CPU Usage % by Namespace line chart on the Metrics Page
*/
  return (
    <div>
      <MetricsComponentWrapper title="">
        <LineChart
          title="CPU Usage % by Namespace"
          chartData={metrics.data}
          label="CPU Usage % by Namespace"
          query={metrics.queryString}
        />
      </MetricsComponentWrapper>
    </div>
  );
};

export default CPUUsageByNamespace;

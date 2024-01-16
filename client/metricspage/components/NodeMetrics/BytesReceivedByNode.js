import React from "react";
import LineChart from "../../../homepage/components/Charts/LineChartTemplate";
import MetricsComponentWrapper from "../../../utils/MetricsComponentWrapper";

const BytesReceivedByNode = ({ metrics }) => {
  /* 
Renders the Network IO (Bps) Received by Node line chart on the Metrics Page
*/
  return (
    <div>
      <MetricsComponentWrapper title="">
        <LineChart
          title="Network IO (Bps) Received by Node"
          chartData={metrics.data}
          label="Bytes Received Per Node"
          query={metrics.queryString}
        />
      </MetricsComponentWrapper>
    </div>
  );
};

export default BytesReceivedByNode;

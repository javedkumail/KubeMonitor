import React from "react";
import LineChart from "../../../homepage/components/Charts/LineChartTemplate";
import MetricsComponentWrapper from "../../../utils/MetricsComponentWrapper";

const BytesTransmittedbyPod = ({ metrics }) => {
  /* 
Renders Network IO (Bps) Transmitted by Pod line chart on the Metrics Page
*/
  return (
    <div>
      <MetricsComponentWrapper title="">
        <LineChart
          title="Network IO (Bps) Transmitted by Pod"
          label="Bytes Transmitted By Pod"
          chartData={metrics.data}
          query={metrics.queryString}
        />
      </MetricsComponentWrapper>
    </div>
  );
};

export default BytesTransmittedbyPod;

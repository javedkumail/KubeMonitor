import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import BytesReceivedByNamespace from "../components/NamespaceMetrics/BytesReceivedByNamespace";
import BytesTransmittedByNamespace from "../components/NamespaceMetrics/BytesTransmittedByNamespace";
import CPUUsageByNamespace from "../components/NamespaceMetrics/CPUUsageByNamespace.js";
import MemoryUsageByNamespace from "../components/NamespaceMetrics/MemoryUsageByNamespace.js";
import BytesReceivedByNode from "../components/NodeMetrics/BytesReceivedByNode";
import BytesTransmittedByNode from "../components/NodeMetrics/BytesTransmittedByNode";
import CPUUsageByNode from "../components/NodeMetrics/CPUUsageByNode.js";
import MemoryUsageByNode from "../components/NodeMetrics/MemoryUsageByNode.js";
import BytesReceivedByPod from "../components/PodMetrics/BytesReceivedByPod";
import CPUUsageByPod from "../components/PodMetrics/CPUUsageByPod.js";
import MemoryUsageByPod from "../components/PodMetrics/MemoryUsageByPod.js";
import BytesTransmittedbyPod from "../components/PodMetrics/BytesTransmittedbyPod.js";

const MetricsContainer = ({ namespace }) => {
  const [timeSeriesMetrics, setTimeSeriesMetrics] = useState([]);

  const getTimeSeriesMetrics = () => {
    /* Fetch Request to backend endpoint which returns all time series prometheus data for Metrics page */
    let now = new Date();
    let nowCopy = new Date(now.getTime());
    nowCopy.setHours(nowCopy.getHours() - 24);
    let endDateTime = now.toISOString();
    console.log("endDateTime", endDateTime);
    let startDateTime = nowCopy.toISOString();
    console.log("startDateTime", startDateTime);

    let step = "30m";
    fetch(
      `/api/prometheus/metricspage?startDateTime=${startDateTime}&endDateTime=${endDateTime}&step=${step}&namespace=${namespace}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeSeriesMetrics(data);
      })
      .catch((error) => console.log(error));
  };

  /* Time series metrics are only re-fetched when namespace toggle changes */
  useEffect(() => {
    getTimeSeriesMetrics();
  }, [namespace]);

  // Conditional Rendering to handle async requests
  const renderBytesReceivedPerNamespace = () => {
    if (timeSeriesMetrics.bytesReceivedPerNamespace) {
      return (
        <BytesReceivedByNamespace
          metrics={timeSeriesMetrics.bytesReceivedPerNamespace}
        />
      );
    }
  };

  const renderBytesTransmittedPerNamespace = () => {
    if (timeSeriesMetrics.bytesTransmittedPerNamespace) {
      return (
        <BytesTransmittedByNamespace
          metrics={timeSeriesMetrics.bytesTransmittedPerNamespace}
        />
      );
    }
  };

  const renderCPUUsageByNamespace = () => {
    if (timeSeriesMetrics.getCPUUsageByNamespace) {
      return (
        <CPUUsageByNamespace
          metrics={timeSeriesMetrics.getCPUUsageByNamespace}
        />
      );
    }
  };

  const renderMemoryUsageByNamespace = () => {
    if (timeSeriesMetrics.getMemoryUsageByNamespace) {
      return (
        <MemoryUsageByNamespace
          metrics={timeSeriesMetrics.getMemoryUsageByNamespace}
        />
      );
    }
  };

  const renderBytesReceivedPerNode = () => {
    if (timeSeriesMetrics.bytesReceivedPerNode) {
      return (
        <BytesReceivedByNode metrics={timeSeriesMetrics.bytesReceivedPerNode} />
      );
    }
  };

  const renderBytesTransmittedPerNode = () => {
    if (timeSeriesMetrics.bytesTransmittedPerNode) {
      return (
        <BytesTransmittedByNode
          metrics={timeSeriesMetrics.bytesTransmittedPerNode}
        />
      );
    }
  };

  const renderCPUUsageByNode = () => {
    if (timeSeriesMetrics.getCPUUsageByNode) {
      return <CPUUsageByNode metrics={timeSeriesMetrics.getCPUUsageByNode} />;
    }
  };

  const renderMemoryUsageByNode = () => {
    if (timeSeriesMetrics.getMemoryUsageByNode) {
      return (
        <MemoryUsageByNode metrics={timeSeriesMetrics.getMemoryUsageByNode} />
      );
    }
  };

  const renderBytesReceivedPerPod = () => {
    if (timeSeriesMetrics.bytesReceivedPerPod) {
      return (
        <BytesReceivedByPod metrics={timeSeriesMetrics.bytesReceivedPerPod} />
      );
    }
  };

  const renderBytesTransmittedPerPod = () => {
    if (timeSeriesMetrics.bytesTransmittedPerPod) {
      return (
        <BytesTransmittedbyPod
          metrics={timeSeriesMetrics.bytesTransmittedPerPod}
        />
      );
    }
  };

  const renderCPUUsageByPod = () => {
    if (timeSeriesMetrics.getCPUUsageByPod) {
      return <CPUUsageByPod metrics={timeSeriesMetrics.getCPUUsageByPod} />;
    }
  };

  const renderMemoryUsageByPod = () => {
    if (timeSeriesMetrics.getMemoryUsageByPod) {
      return (
        <MemoryUsageByPod metrics={timeSeriesMetrics.getMemoryUsageByPod} />
      );
    }
  };

  /* Responsive Grid layout using MUI library */
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderCPUUsageByNamespace()}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderMemoryUsageByNamespace()}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderBytesReceivedPerNamespace()}
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderBytesTransmittedPerNamespace()}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderCPUUsageByNode()}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderMemoryUsageByNode()}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderBytesReceivedPerNode()}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderBytesTransmittedPerNode()}
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderCPUUsageByPod()}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderMemoryUsageByPod()}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderBytesReceivedPerPod()}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {renderBytesTransmittedPerPod()}
        </Grid>
      </Grid>
    </div>
  );
};

/* Map state to props utilized to access Global namespace variable */
const mapStateToProps = ({ namespace }) => {
  return { namespace: namespace.selectedNamespace };
};

export default connect(mapStateToProps)(MetricsContainer);

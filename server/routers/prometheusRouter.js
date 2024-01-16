const express = require("express");
const prometheusController = require("../controllers/prometheusController");
const metricsDataController = require("../controllers/metricsDataController");
const prometheusRouter = express.Router();

// Route to deploy Prometheus onto the cluster
prometheusRouter.post("/install", (req, res) => {
  res.status(200).json("Prometheus Fired Up");
});

// Get data from Prometheus after nodeporting & check whether Prometheus connection is up
prometheusRouter.get("/up", prometheusController.isUp, (req, res) => {
  res.status(200).json(res.locals.query);
});

// Get metrics for homepage
prometheusRouter.get(
  "/homepage",
  prometheusController.bytesTransmittedPerNode,
  prometheusController.bytesReceivedPerNode,
  (req, res) => {
    const chartData = {
      bytesTransmittedPerNode: res.locals.bytesTransmittedPerNode,
      bytesReceivedPerNode: res.locals.bytesReceivedPerNode,
    };
    res.status(200).json(chartData);
  },
);

// Get PromQL queries for custom metrics page
prometheusRouter.get(
  "/getqueries",
  metricsDataController.allQueries,
  (req, res) => {
    res.status(200).json(res.locals.allQueries);
  },
);

prometheusRouter.get(
  "/metricspage",
  metricsDataController.getCPUUsageByNamespace,
  metricsDataController.getCPUUsageByPod,
  metricsDataController.getCPUUsageByNode,
  metricsDataController.getMemoryUsageByNamespace,
  metricsDataController.getMemoryUsageByNode,
  metricsDataController.getMemoryUsageByPod,
  metricsDataController.bytesTransmittedPerNamespace,
  metricsDataController.bytesTransmittedPerNode,
  metricsDataController.bytesTransmittedPerPod,
  metricsDataController.bytesReceivedPerNamespace,
  metricsDataController.bytesReceivedPerNode,
  metricsDataController.bytesReceivedPerPod,
  (req, res) => {
    const chartData = {
      getCPUUsageByNamespace: res.locals.getCPUUsageByNamespace,
      getCPUUsageByPod: res.locals.getCPUUsageByPod,
      getCPUUsageByNode: res.locals.getCPUUsageByNode,
      getMemoryUsageByNamespace: res.locals.getMemoryUsageByNamespace,
      getMemoryUsageByNode: res.locals.getMemoryUsageByNode,
      getMemoryUsageByPod: res.locals.getMemoryUsageByPod,
      bytesTransmittedPerNamespace: res.locals.bytesTransmittedPerNamespace,
      bytesTransmittedPerNode: res.locals.bytesTransmittedPerNode,
      bytesTransmittedPerPod: res.locals.bytesTransmittedPerPod,
      bytesReceivedPerNamespace: res.locals.bytesReceivedPerNamespace,
      bytesReceivedPerNode: res.locals.bytesReceivedPerNode,
      bytesReceivedPerPod: res.locals.bytesReceivedPerPod,
    };
    res.status(200).json(chartData);
  },
);

prometheusRouter.get(
  "/custommetrics",
  metricsDataController.getCustomQueryMetrics,
  (req, res) => {
    res.status(200).json(res.locals.getCustomQueryMetrics);
  },
);

/* Endpoint routes to metrics on the homepage */
prometheusRouter.get(
  "/cpubynode",
  prometheusController.getCpuUsageByNode,
  (req, res) => {
    res.status(200).json(res.locals.getCpuUsageByNode);
  },
);

prometheusRouter.get(
  "/memorybynode",
  prometheusController.getMemoryUsageByNode,
  (req, res) => {
    res.status(200).json(res.locals.getMemoryUsageByNode);
  },
);

prometheusRouter.get(
  "/cpubypod",
  prometheusController.getCpuUsageByPod,
  (req, res) => {
    res.status(200).json(res.locals.getCpuUsageByPod);
  },
);

prometheusRouter.get(
  "/memorybypod",
  prometheusController.getMemoryUsageByPod,
  (req, res) => {
    res.status(200).json(res.locals.getMemoryUsageByPod);
  },
);

prometheusRouter.get(
  "/clustermetrics",
  prometheusController.getCpuUtilization,
  prometheusController.getCpuTotal,
  prometheusController.getMemoryUtilization,
  prometheusController.getMemoryTotal,
  (req, res) => {
    const chartData = {
      cpuUtilization: res.locals.cpuUtilization,
      cpuTotal: res.locals.getCpuTotal,
      memoryUtilization: res.locals.memoryUtilization,
      memoryTotal: res.locals.getMemoryTotal,
    };
    res.status(200).json(chartData);
  },
);

module.exports = prometheusRouter;

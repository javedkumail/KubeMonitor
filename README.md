# KubeMonitor

KubeMonitor stands as an indispensable tool tailored for monitoring the robustness and performance of your Kubernetes cluster. With an intuitive dashboard offering a comprehensive snapshot of your cluster's health, it provides a quick, at-a-glance assessment of its status. Delving deeper, the metrics page furnishes intricate time-series data, enabling meticulous analysis of your cluster's performance trends. In addition, the alerts and logs pages act as vigilant aids, promptly notifying and cataloging any emergent events, ensuring proactive management and swift resolution.

## Features

- Dashboard - Easily Assess and Diagnose Cluster Health
- Metrics - In-Depth View of Cluster Performance
- Custom Metrics - Create a Custom View of Your Cluster Metrics
- Alerts and Logs - Stay Updated on Cluster Events

## Getting Started

Before Getting Started : Setup Test Enviroment [README](./test-env/prometheus/kubernetes/1.23/README.md)

#### Step 1 : Install dependencies and start the app

```
npm install
npm run build
npm run start
```

#### Step 2 : Port-forward Prometheus to 9090

```
kubectl port-forward -n <namespace> svc/<service name> 9090
```

#### Start using KubeMonitor!

Go to http://localhost:3001/ and enjoy your new k8s experience!

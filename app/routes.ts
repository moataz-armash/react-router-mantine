import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/monitor/new", "routes/newMonitor.tsx"),
] satisfies RouteConfig;

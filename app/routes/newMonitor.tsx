import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import { Group, Title } from "@mantine/core";
import NewMonitorForm from "~/components/NewMonitorForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function NewMonitor() {
  return (
    <Group display="flex" dir="column" py="30px" px="40px">
      <Navbar />
      <Title
        order={3}
        style={{ color: "var(--mantine-color-brand-0)", marginTop: "12px" }}>
        Create New Monitor
      </Title>
      <NewMonitorForm />
      {/* <MonitorTable /> */}
    </Group>
  );
}

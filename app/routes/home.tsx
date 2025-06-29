import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import { Group } from "@mantine/core";
import MonitorTable from "~/components/MonitorTable";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Group display="flex" dir="column" py="30px" px="40px">
      <Navbar />
      <MonitorTable />
    </Group>
  );
}

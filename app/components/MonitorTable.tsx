import { Group } from "@mantine/core";
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";

export default function MonitorTable() {
  return (
    <Group
      bg="var(--mantine-color-brand-11)"
      w="100%"
      p="12px"
      style={{ borderRadius: "var(--mantine-radius-lg)" }}
    >
      <TableHeader />
      <TableContent />
    </Group>
  );
}

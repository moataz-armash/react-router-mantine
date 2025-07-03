import { Group, Stack, Title } from "@mantine/core";
import MonitorType from "../../public/monitorType.png";
import MonitorSettings from "../../public/monitorSettings.png";
import IconTitle from "./IconTitle";

export default function NewMonitorForm() {
  return (
    <Stack
      p={12}
      bg="var(--mantine-color-brand-11)"
      w="100%"
      style={{ borderRadius: "var(--mantine-radius-lg)" }}
    >
      <Group justify="space-between" align="center">
        <IconTitle image={MonitorType} />

        <Group
          style={{ backgroundColor: "var(--mantine-color-brand-6)" }}
          w="950px"
          h={1.6}
        ></Group>
        <IconTitle
          title="Monitor Settings"
          titleColor="var(--mantine-color-brand-9)"
          image={MonitorSettings}
        />
      </Group>
    </Stack>
  );
}

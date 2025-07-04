import { Group, Stack, Switch, Title } from "@mantine/core";

export default function SwitchField({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Group align="center" justify="space-between" mb={16}>
      <Stack gap={4}>
        <Title
          style={{
            color: "var(--mantine-color-brand-0)",
            fontWeight: 500,
            fontSize: "var(--mantine-size-md)",
          }}>
          {title}
        </Title>
        <Title
          style={{
            color: "var(--mantine-color-brand-6)",
            fontWeight: 400,
            fontSize: "14px",
          }}>
          {description}
        </Title>
      </Stack>
      <Switch color="var(--mantine-color-brand-9)" checked />
    </Group>
  );
}

import { Group, Stack, Switch, Title } from "@mantine/core";
import { useState } from "react";

export default function SwitchField({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [checked, setChecked] = useState(true);
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
      <Switch
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        styles={(theme) => ({
          track: {
            backgroundColor: checked
              ? theme.colors.brand[9]
              : theme.colors.brand[6],
          },
          thumb: {
            backgroundColor: "#fff",
            border: `2px solid ${
              checked ? theme.colors.brand[9] : theme.colors.brand[6]
            }`,
          },
        })}
      />
    </Group>
  );
}

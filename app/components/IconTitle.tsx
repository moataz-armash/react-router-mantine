import { Group, Title } from "@mantine/core";

export default function IconTitle({
  title = "Monitor Type",
  titleColor = "var(--mantine-color-brand-3)",
  image,
}: {
  title?: string;
  titleColor?: string;
  image?: string;
}) {
  return (
    <Group gap={8}>
      <img src={image} width={36} height={36} alt="monitor type icon" />
      <Title order={4} style={{ color: titleColor }}>
        {title}
      </Title>
    </Group>
  );
}

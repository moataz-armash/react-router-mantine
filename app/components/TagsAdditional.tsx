import { Button, Group, Stack, TextInput, Title } from "@mantine/core";
import { IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";

export default function TagsAdditional({
  title,
  placeholder,
  addedWords,
}: {
  title: string;
  placeholder: string;
  addedWords: string[];
}) {
  const [tags, setTags] = useState<string[]>(addedWords);
  const [tag, setTag] = useState<string>();
  const addTag = (tag: string) => {
    setTags((prev) => [...prev, tag]);
  };
  const deleteTag = (index: number) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <Stack>
      <Title
        style={{
          color: "var(--mantine-color-brand-0)",
          fontWeight: 500,
          fontSize: "var(--mantine-size-md)",
        }}>
        {title}
      </Title>
      <TextInput
        onChange={(e) => setTag(e.target.value)}
        placeholder={placeholder}
        styles={{
          input: {
            backgroundColor: "var(--mantine-color-brand-15)",
            border: "none",
          },
        }}
        rightSection={
          <IconPlus
            style={{
              border: "2px solid var(--mantine-color-brand-12)",
              borderRadius: "var(--mantine-radius-md)",
              cursor: "pointer",
            }}
            onClick={() => {
              tag && addTag(tag);
            }}
          />
        }
      />
      <Group gap={8}>
        {tags.map((tag, index) => (
          <Button
            key={index}
            style={{ color: "var(--mantine-color-brand-9)", fontWeight: 400 }}
            leftSection={
              <IconX
                color="var(--mantine-color-brand-9)"
                size={14}
                onClick={() => deleteTag(index)}
              />
            }
            bg="var(--mantine-color-brand-15)">
            {tag}
          </Button>
        ))}
      </Group>
    </Stack>
  );
}

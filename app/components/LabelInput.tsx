import { InputLabel, Stack, TextInput } from "@mantine/core";

export default function LabelInput({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  return (
    <Stack w="48%" gap={4}>
      <InputLabel
        color="var(--mantine-color-brand-0)"
        style={{ fontWeight: 500 }}>
        {name}
      </InputLabel>
      <TextInput
        type="text"
        placeholder={placeholder}
        variant="filled"
        radius="var(--mantine-radius-lg)"
        styles={{
          input: {
            backgroundColor: "var(--mantine-color-brand-15)",
          },
        }}
      />
    </Stack>
  );
}

import { InputLabel, Stack, TextInput } from "@mantine/core";

export default function LabelInput({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) {
  return (
    <Stack>
      <InputLabel
        color="var(--mantine-color-brand-0)"
        style={{ fontWeight: 500, fontSize: "var(--mantine-size-md)" }}>
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

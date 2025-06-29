import { Input } from "@mantine/core";
import SearchIcon from "../../public/search-normal.png";

export default function SearchInput({
  placeholder = "Search..",
  borderExists = false,
  width = "300px",
}: {
  placeholder?: string;
  borderExists?: boolean;
  width?: string;
}) {
  return (
    <Input
      placeholder={placeholder}
      leftSection={
        <img
          src={SearchIcon}
          style={{
            width: 16,
            height: 16,
          }}
        />
      }
      styles={{
        input: {
          height: "100%",
          padding: "12px 32px",
          width: width,
          boxShadow: `${borderExists ? "" : "none"}`,
          outline: `${borderExists ? "" : "none"}`,
          border: `${borderExists ? "" : "none"}`,
          borderRadius: "var(--mantine-radius-lg)",
          "::placeholder": { color: "var(--mantine-color-brand-9)" },
        },
      }}
    />
  );
}

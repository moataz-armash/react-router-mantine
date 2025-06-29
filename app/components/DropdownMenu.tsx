import { forwardRef } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Group, Avatar, Text, Menu, UnstyledButton } from "@mantine/core";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  name: string;
  icon?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  avatar?: string;
  size?: number;
  gap?: number;
  borderExists?: boolean;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  (
    {
      name,
      icon,
      bgColor,
      textColor,
      avatar,
      size = 32,
      gap = 12,
      borderExists,
      ...others
    }: UserButtonProps,
    ref
  ) => (
    <UnstyledButton
      ref={ref}
      style={{
        height: 40,
        padding: "8px 12px",
        backgroundColor: `${bgColor || "var(--mantine-color-brand-11)"}`,
        borderRadius: "var(--mantine-radius-lg)",
        display: "flex",
        alignItems: "center",
        border: borderExists
          ? "1px solid var(--mantine-color-brand-6)"
          : "none",
      }}
      {...others}
    >
      <Group align="center" gap={gap}>
        {avatar && <Avatar src={avatar} alt={name} size={size} />}
        <Text
          size="sm"
          fw={500}
          style={{ color: textColor || "var(--mantine-color-brand-5)" }}
        >
          {name}
        </Text>

        {icon || (
          <IconChevronDown
            size={16}
            style={{ color: textColor || "var(--mantine-color-brand-5)" }}
          />
        )}
      </Group>
    </UnstyledButton>
  )
);

interface DropdownMenuProps {
  name: string;
  icon?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  avatar?: string;
  size?: number;
  gap?: number;
  borderExists?: boolean;
}

export default function DropdownMenu({
  name,
  icon,
  bgColor,
  textColor,
  avatar,
  size = 32,
  gap = 12,
  borderExists = false,
}: DropdownMenuProps) {
  return (
    <Menu withArrow>
      <Menu.Target>
        <UserButton
          name={name}
          icon={icon}
          bgColor={bgColor}
          textColor={textColor}
          avatar={avatar}
          borderExists={borderExists}
          size={size}
          gap={gap}
        />
      </Menu.Target>
    </Menu>
  );
}

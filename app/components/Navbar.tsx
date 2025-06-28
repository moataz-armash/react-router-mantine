import { Flex, Group, Input } from "@mantine/core";
import logo from "../../public/logo.png";
import type { al } from "node_modules/react-router/dist/development/route-data-D7Xbr_Ww.mjs";
import DropdownMenu from "./DropdownMenu";
import avatar from "../../public/avatar.png";
import { IconSearch } from "@tabler/icons-react";
import SearchIcon from "../../public/search-normal.png";
export default function Navbar() {
  return (
    <Flex
      component="nav"
      align="center"
      justify="space-between"
      style={{
        width: "100%",
        height: "48px",
      }}
    >
      <Group>
        <img src={logo} alt="logo" />
        <DropdownMenu
          name="Social Monitoring"
          bgColor="var(--mantine-color-brand-0)"
          textColor="var(--mantine-color-brand-11)"
        />
        <DropdownMenu name="Social" />
        <DropdownMenu name="Social Monitoring" />
      </Group>
      <Group>
        <Input
          placeholder="Search.."
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
              height: 40,
              padding: "8px 32px",
              width: 300,
              boxShadow: "none",
              outline: "none",
              border: "none",
              "::placeholder": { color: "var(--mantine-color-brand-9)" },
            },
          }}
        />
        <DropdownMenu
          name="Ahmad Ali"
          textColor="var(--mantine-color-brand-7)"
          avatar={avatar}
        />
      </Group>
    </Flex>
  );
}

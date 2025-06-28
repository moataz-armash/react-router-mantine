import { Flex, Group } from "@mantine/core";
import logo from "../../public/logo.png";
import type { al } from "node_modules/react-router/dist/development/route-data-D7Xbr_Ww.mjs";
import DropdownMenu from "./DropdownMenu";
import avatar from "../../public/avatar.png";
export default function Navbar() {
  return (
    <Flex
      component="nav"
      align="center"
      justify="space-between"
      py="50px"
      px="40px"
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
        <DropdownMenu name="Ahmad Ali" textColor="var(--mantine-color-brand-7)" avatar={avatar}/>
      </Group>
      {/* <DropdownMenu name="Social Monitoring" /> */}
    </Flex>
  );
}

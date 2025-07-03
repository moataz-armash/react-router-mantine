import {
  Button,
  Flex,
  Group,
  Stack,
  Table,
  Title,
  type TableData,
} from "@mantine/core";
import SearchInput from "./SearchInput";
import DropdownMenu from "./DropdownMenu";
import calendar from "../../public/calendar.png";
import { IconPlus } from "@tabler/icons-react";
import { Link } from "react-router";

export default function TableHeader() {
  return (
    <Flex display="flex" justify="space-between" align="center" h={48} w="100%">
      <Group>
        <Stack gap={0} justify="center" h={48}>
          <Title order={3} style={{ color: "var(--mantine-color-brand-0)" }}>
            Monitor
          </Title>
          <Title
            order={6}
            style={{ color: "var(--mantine-color-brand-7)", fontWeight: 400 }}>
            To add Monitor
          </Title>
        </Stack>
        <SearchInput
          placeholder="Search monitors.."
          borderExists={true}
          width="240px"
        />
      </Group>
      <Group>
        <DropdownMenu
          name="Days"
          textColor="var(--mantine-color-brand-7)"
          borderExists={true}
          avatar={calendar}
          size={24}
          gap={8}
        />
        <Link to="/monitor/new">
          <Button
            bg="var(--mantine-color-brand-10)"
            h={36}
            radius="var(--mantine-radius-lg)"
            style={{ alignItems: "center", justifyContent: "center" }}
            leftSection={<IconPlus size={16} />}>
            New Monitor
          </Button>
        </Link>
      </Group>
    </Flex>
  );
}

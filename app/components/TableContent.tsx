import {
  Table,
  Group,
  Avatar,
  Text,
  Badge,
  ScrollArea,
  Box,
  rem,
  useMantineTheme,
  rgba,
} from "@mantine/core";
import facebook from "../../public/facebook.png";
import twitter from "../../public/twitter.png";
import { IconDotsVertical } from "@tabler/icons-react";

const rowsData = [
  {
    id: "e97654-1",
    creator: "ALI",
    source: <img src={twitter} width={20} height={20} />,
    type: "KEYWFED",
    date: "6/1/2025",
    posts: 54,
    history: 54,
    status: "NOT CONFIGURED",
  },
  {
    id: "e97654-3",
    creator: "ALI",
    source: <img src={twitter} width={20} height={20} />,
    type: "KEYWFED",
    date: "6/1/2025",
    posts: 555,
    history: 555,
    status: "CONFIGURED",
  },
  {
    id: "e97654-6",
    creator: "ALI",
    source: <img src={facebook} width={20} height={20} />,
    type: "KEYWFED",
    date: "6/1/2025",
    posts: 4,
    history: 4,
    status: "NOT CONFIGURED",
  },
];

function StatusPill({ status }: { status: string }) {
  const theme = useMantineTheme();
  if (status === "CONFIGURED") {
    return (
      <Badge
        color="var(--mantine-color-brand-8)"
        bg={rgba(theme.colors.brand[8], 0.05)}
        variant="outline"
        radius="xl"
        size="md"
        style={{ padding: "12px", fontWeight: 400 }}
      >
        CONFIGURED
      </Badge>
    );
  }

  return (
    <Badge
      color="var(--mantine-color-brand-1)"
      bg="var(--mantine-color-brand-13)"
      variant="outline"
      radius="xl"
      size="md"
      style={{ padding: "12px", fontWeight: 400 }}
    >
      NOT CONFIGURED
    </Badge>
  );
}

export default function TableContent() {
  const theme = useMantineTheme();
  const rows = rowsData.map((item) => (
    <Table.Tr key={item.id}>
      <Table.Td>{item.id}</Table.Td>
      <Table.Td>{item.creator}</Table.Td>
      <Table.Td>
        <Group gap="xs">{item.source}</Group>
      </Table.Td>
      <Table.Td>
        <Badge
          color="var(--mantine-color-brand-10)"
          bg={rgba(theme.colors.brand[2], 0.15)}
          variant="light"
          radius="xl"
          size="sm"
          style={{ padding: "12px", fontWeight: 400 }}
        >
          {item.type}
        </Badge>
      </Table.Td>
      <Table.Td>{item.date}</Table.Td>
      <Table.Td>{item.posts}</Table.Td>
      <Table.Td>{item.history}</Table.Td>
      <Table.Td>
        <StatusPill status={item.status} />
      </Table.Td>
      <Table.Td>
        <IconDotsVertical color="var(--mantine-color-brand-14)" size={16} cursor="pointer"/>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea w="100%">
      <Box mt="md" mx="auto" bg="white">
        <Table
          verticalSpacing="md"
          highlightOnHover
          style={{
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <Table.Thead bg={rgba(theme.colors.brand[12], 0.2)}>
            <Table.Tr>
              {[
                "ID",
                "CREATOR",
                "DATA SOURCES",
                "TYPE",
                "CREATION DATE",
                "MONITORED POSTS",
                "HISTORICAL DATA",
                "STATUS",
                ""
              ].map((header) => (
                <Table.Th
                  key={header}
                  style={{
                    textTransform: "uppercase",
                    color: theme.colors.brand[7],
                    fontWeight: 400,
                  }}
                >
                  {header}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Box>
    </ScrollArea>
  );
}

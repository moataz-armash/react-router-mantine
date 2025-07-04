import {
  Button,
  Grid,
  GridCol,
  Group,
  Menu,
  Select,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import MonitorType from "../../public/monitorType.png";
import MonitorSettings from "../../public/monitorSettings.png";
import IconTitle from "./IconTitle";
import LabelInput from "./LabelInput";
import PlatformButton from "./PlatformButton";
import TagsAdditional from "./TagsAdditional";
import {
  IconArrowsLeftRight,
  IconChevronDown,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";

export default function NewMonitorForm() {
  const languages = ["English", "Arabic", "Turkish"];
  return (
    <Stack
      p={12}
      bg="var(--mantine-color-brand-11)"
      w="100%"
      style={{ borderRadius: "var(--mantine-radius-lg)" }}>
      <Group justify="space-between" align="center">
        <IconTitle image={MonitorType} />

        <Group
          style={{ backgroundColor: "var(--mantine-color-brand-6)" }}
          w="950px"
          h={1.6}></Group>
        <IconTitle
          title="Monitor Settings"
          titleColor="var(--mantine-color-brand-9)"
          image={MonitorSettings}
        />
      </Group>
      <Title
        style={{
          color: "var(--mantine-color-brand-7)",
          fontWeight: 500,
          fontSize: 18,
          marginTop: 8,
        }}>
        Configure Your Monitor
      </Title>
      <Grid>
        <Grid.Col span={6}>
          <LabelInput name="Name" placeholder="Enter monitor name" />
        </Grid.Col>
        <Grid.Col span={6}>
          <LabelInput
            name="Description"
            placeholder="Enter monitor description"
          />
        </Grid.Col>
      </Grid>
      <Title
        style={{
          color: "var(--mantine-color-brand-7)",
          fontWeight: 500,
          fontSize: 18,
          marginTop: 8,
        }}>
        Platforms
      </Title>
      <PlatformButton />
      <Grid gutter="xl" grow>
        <Grid.Col span={6}>
          <TagsAdditional
            title="Mandatory Words"
            placeholder="All these words are in the tweets"
            addedWords={["Riyadh", "Riyadh"]}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TagsAdditional
            title="Optional Words"
            placeholder="These hashtags are present the tweets"
            addedWords={["Riyadh", "Riyadh"]}
          />
        </Grid.Col>
      </Grid>
      <Grid gutter="xl" grow>
        <Grid.Col span={6}>
          <TagsAdditional
            title="Optional Words"
            placeholder="These words are optional in tweets"
            addedWords={[]}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TagsAdditional
            title="Excluded Words"
            placeholder="These words are not in the tweets"
            addedWords={["Riyadh"]}
          />
        </Grid.Col>
      </Grid>
      <Grid gutter="xl" grow>
        <Grid.Col span={6}>
          <TagsAdditional
            title="Excluded Profiles"
            placeholder="Enter excluded profiles"
            addedWords={["Riyadh", "Riyadh"]}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Title
            style={{
              color: "var(--mantine-color-brand-7)",
              fontSize: "var(--mantine-size-md)",
              fontWeight: 500,
              marginBottom: 16,
            }}>
            Selected Languages
          </Title>
          <Menu shadow="md">
            <Menu.Target>
              <Button
                w="100%"
                justify="space-between"
                bg="transparent"
                style={{
                  border: "1px solid var(--mantine-color-brand-6)",
                  borderRadius: "var(--mantine-radius-lg)",
                  fontWeight: 400,
                  color: "var(--mantine-color-brand-7)",
                }}
                rightSection={
                  <IconChevronDown
                    style={{
                      border: "2px solid var(--mantine-color-brand-12)",
                      borderRadius: "var(--mantine-radius-md)",
                      cursor: "pointer",
                    }}
                  />
                }>
                Select Languages
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              {languages.map((lang) => (
                <Menu.Item>{lang}</Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

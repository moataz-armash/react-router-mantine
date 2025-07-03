import React, { useState } from "react";
import {
  Container,
  TextInput,
  Textarea,
  Title,
  Group,
  Button,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandX,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import facebook from "../../public/facebook.png";
import twitter from "../../public/twitter.png";
import instagram from "../../public/instagram.png";

export default function PlatformButton() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const platforms = [
    {
      id: "x",
      name: "X",
      img: twitter,
      color: "#000000",
    },
    {
      id: "facebook",
      name: "Facebook",
      img: facebook,
      color: "#1877F2",
    },
    {
      id: "instagram",
      name: "Instagram",
      img: instagram,
      color: "#E4405F",
    },
  ];

  const togglePlatform = (platformId) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((id) => id !== platformId)
        : [...prev, platformId]
    );
  };

  return (
    <Group>
      {platforms.map((platform) => {
        const isSelected = selectedPlatforms.includes(platform.id);

        return (
          <Button
            key={platform.id}
            variant="outline"
            leftSection={
              <img
                src={platform.img}
                height={24}
                width={24}
                style={{
                  opacity: isSelected ? 1 : 0.5,
                  filter: isSelected ? "none" : "grayscale(100%)",
                }}
              />
            }
            onClick={() => togglePlatform(platform.id)}
            size="md"
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: isSelected
                ? `2px solid var(--mantine-color-brand-2)`
                : "none",
              color: isSelected
                ? "var(--mantine-color-brand-0)"
                : "var(--mantine-color-brand-7)",
              "&:hover": {
                backgroundColor: `color-mix(in srgb, ${platform.color} 10%, transparent)`,
              },
            }}
            styles={{
              root: {
                "&:hover": {
                  backgroundColor: isSelected
                    ? platform.color
                    : `${platform.color}10`,
                },
              },
            }}>
            {platform.name}
          </Button>
        );
      })}
    </Group>
  );
}

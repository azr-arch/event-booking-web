"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ThemeColorKey, THEMES } from "@/lib/constant";

export const AppearanceTab = ({
  handleChange,
}: {
  handleChange: () => void;
}) => {
  // Todo More work required
  const changeAccentColor = (value: string) => {
    // Find if given theme is present in constants
    const theme = THEMES[value];
    if (!theme) {
      console.log("No theme found");
      return;
    }

    // If theme's available
    const root = theme.root;

    Object.keys(root).forEach((rootVarKey) => {
      const key = rootVarKey as ThemeColorKey;
      const currentKeyValue = root[key];

      document.documentElement.style.setProperty(
        `--${rootVarKey}`,
        currentKeyValue!
      );
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance Settings</CardTitle>
        <CardDescription>
          Customize the look and feel of your application
        </CardDescription>
      </CardHeader>
      <DropdownMenuSeparator className="mb-4" />

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="theme">Theme</Label>
          <Select defaultValue="light" onValueChange={handleChange}>
            <SelectTrigger id="theme">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="accent-color">Accent Color</Label>
          <Select defaultValue="blue" onValueChange={changeAccentColor}>
            <SelectTrigger id="accent-color">
              <SelectValue placeholder="Select accent color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="green">Green</SelectItem>
              <SelectItem value="red">Red</SelectItem>
              <SelectItem value="purple">Purple</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

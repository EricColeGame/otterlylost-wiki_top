import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CalendarDays,
  Gamepad2,
  Users,
  Package,
  MessagesSquare,
  Sparkles,
  Waves,
} from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Gamepad2, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Waves, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
  { key: "features", path: "/features", icon: Sparkles, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));

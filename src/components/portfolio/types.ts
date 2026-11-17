export type FolderTone = "blue" | "green" | "orange" | "yellow";
export type CoverKind = "poster" | "render" | "page" | "sale" | "brand";

export type FolderCategory = {
  id: string;
  label: string;
  local?: string;
  tone: FolderTone;
  kind?: CoverKind;
};

export type FolderProject = {
  title: string;
  local?: string;
  category: string;
  year: string;
  summary: string;
  client?: string;
  role?: string;
  tools?: string[];
  body?: string[];
  href?: string;
  image?: string;
  mark?: string;
};

export type FolderHighlight = {
  label: string;
  tone?: FolderTone;
  lines: string[];
};

export type FolderTimelineItem = {
  from: string;
  to: string;
  title: string;
  place?: string;
};

export type FolderChapter = {
  title: string;
  local?: string;
  points?: string[];
  target?: FolderSectionId;
};

export type FolderStep = {
  title: string;
  local?: string;
  body: string;
  outputs?: string[];
  duration?: string;
};

export type FolderWord = {
  quote: string;
  name: string;
  role?: string;
  tone?: FolderTone;
};

export type FolderLink = {
  label: string;
  value: string;
  href?: string;
};

export type FolderSectionId =
  | "cover"
  | "contents"
  | "about"
  | "work"
  | "process"
  | "words"
  | "contact";

export interface PortfolioProps {
  name?: string;
  localName?: string;
  handle?: string;
  signature?: string;
  years?: string;
  role?: string;
  disciplines?: string[];
  word?: string;
  tag?: string;
  subtitle?: string[];
  notes?: string[];
  blurb?: string;
  greeting?: string;
  photo?: string | React.ReactNode;
  highlights?: FolderHighlight[];
  timeline?: FolderTimelineItem[];
  categories?: FolderCategory[];
  projects?: FolderProject[];
  chapters?: FolderChapter[];
  steps?: FolderStep[];
  words?: FolderWord[];
  email?: string;
  contacts?: FolderLink[];
  timeZone?: string;
  colors?: Partial<Record<FolderTone, string>>;
  ligatures?: boolean;
  defaultTheme?: "system" | "light" | "dark";
  onThemeChange?: (theme: "light" | "dark") => void;
  height?: string;
  className?: string;
}
"use client";

import FolderTabPortfolioTemplate from "@/components/ui/folder-tab-portfolio-template";
import { PERSONAL_INFO, PROJECTS, HIGHLIGHTS, TIMELINE, CHAPTERS, STEPS, WORDS, CONTACTS, DEFAULT_CATEGORIES } from "@/components/portfolio/data";

export default function App() {
  return (
    <FolderTabPortfolioTemplate
      name={PERSONAL_INFO.name}
      localName={PERSONAL_INFO.localName}
      handle={PERSONAL_INFO.handle}
      signature={PERSONAL_INFO.signature}
      years={PERSONAL_INFO.years}
      role={PERSONAL_INFO.role}
      disciplines={PERSONAL_INFO.disciplines}
      word={PERSONAL_INFO.word}
      tag={PERSONAL_INFO.tag}
      subtitle={PERSONAL_INFO.subtitle}
      notes={PERSONAL_INFO.notes}
      blurb={PERSONAL_INFO.blurb}
      greeting={PERSONAL_INFO.greeting}
      highlights={HIGHLIGHTS}
      timeline={TIMELINE}
      categories={DEFAULT_CATEGORIES}
      projects={PROJECTS}
      chapters={CHAPTERS}
      steps={STEPS}
      words={WORDS}
      email={PERSONAL_INFO.email}
      contacts={CONTACTS}
      photo={`${import.meta.env.BASE_URL}headshot.png`}
      resume={`${import.meta.env.BASE_URL}Naveen_V_Resume.pdf`}
      timeZone={PERSONAL_INFO.timeZone}
      colors={PERSONAL_INFO.colors}
      ligatures={PERSONAL_INFO.ligatures}
      defaultTheme={PERSONAL_INFO.defaultTheme}
      height={PERSONAL_INFO.height}
    />
  );
}

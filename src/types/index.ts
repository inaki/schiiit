export interface KeyCharProps {
  cmd: string;
  description: string;
  level: number;
  tip?: string; 
}

export interface SubsectionProps {
  title: string;
  description: string;
  keyChars: KeyCharProps[];
}

export interface SectionProps {
  name: string;
  subsections: SubsectionProps[];
}

// The entire JSON is an array of sections
export type SectionsProps = SectionProps[];


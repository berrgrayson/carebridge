"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/lib/context/LanguageContext";
import Image from "next/image";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "/assets/icons/flags/gb.svg",
  },
  {
    code: "fr",
    name: "Français",
    flag: "/assets/icons/flags/fr.svg",
  },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Select
      value={language}
      onValueChange={(value: "en" | "fr") => setLanguage(value)}
    >
      <SelectTrigger className="w-[140px] bg-transparent">
        <SelectValue>
          <div className="flex items-center gap-2">
            <Image
              src={languages.find((lang) => lang.code === language)?.flag || ""}
              alt={language}
              width={20}
              height={20}
              className="rounded-sm"
            />
            <span>
              {languages.find((lang) => lang.code === language)?.name}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center gap-2">
              <Image
                src={lang.flag}
                alt={lang.code}
                width={20}
                height={20}
                className="rounded-sm"
              />
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

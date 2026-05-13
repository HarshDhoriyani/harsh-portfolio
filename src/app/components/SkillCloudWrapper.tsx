"use client";

import dynamic from "next/dynamic";

const SkillCloud = dynamic(
  () => import("./SkillCloud"),
  { ssr: false }
);

export default function SkillCloudWrapper() {
  return <SkillCloud />;
}
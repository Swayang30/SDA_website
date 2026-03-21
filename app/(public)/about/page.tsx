import { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About the Ashram",
  description:
    "Learn about Swami Debananda Ashram, our history, philosophy, and spiritual mission.",
};

export default function AboutPage() {
  return <AboutClient />;
}

"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface DonationCardProps {
  title: string;
  amount: string;
  description: string;
  benefits?: string[];
  featured?: boolean;
  href?: string;
}

export function DonationCard({
  title,
  amount,
  description,
  benefits = [],
  featured = false,
  href = "/donate",
}: DonationCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        featured
          ? "border-primary bg-primary/5 shadow-lg scale-105"
          : "border-border bg-card hover:border-primary/30 hover:shadow-md"
      )}
    >
      {featured && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground">
          {title}
        </h3>
        <div className="mt-3">
          <span className="text-3xl font-bold text-primary">{amount}</span>
          <span className="text-muted-foreground ml-1">/ donation</span>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {benefits.length > 0 && (
          <ul className="mt-6 space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        <Button
          asChild
          className={cn(
            "w-full mt-6",
            featured
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-secondary hover:bg-primary/10 text-foreground border border-border"
          )}
        >
          <Link href={href}>Donate {amount}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

interface DonationAmountSelectorProps {
  amounts: string[];
  selectedAmount: string;
  onSelect: (amount: string) => void;
  allowCustom?: boolean;
}

export function DonationAmountSelector({
  amounts,
  selectedAmount,
  onSelect,
  allowCustom = true,
}: DonationAmountSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {amounts.map((amount) => (
        <button
          key={amount}
          onClick={() => onSelect(amount)}
          className={cn(
            "py-3 px-4 rounded-lg text-center font-medium transition-all",
            selectedAmount === amount
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-foreground hover:bg-primary/10"
          )}
        >
          {amount}
        </button>
      ))}
      {allowCustom && (
        <button
          onClick={() => onSelect("custom")}
          className={cn(
            "py-3 px-4 rounded-lg text-center font-medium transition-all",
            selectedAmount === "custom"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-foreground hover:bg-primary/10"
          )}
        >
          Custom
        </button>
      )}
    </div>
  );
}

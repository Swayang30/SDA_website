"use client";

import { useState } from "react";
import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  Building2,
  CreditCard,
  Smartphone,
  Globe,
  Check,
  Users,
  BookOpen,
  Home,
} from "lucide-react";
import { LotusIcon } from "@/components/icons/spiritual-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

const donationAmounts = ["₹500", "₹1,000", "₹2,500", "₹5,000", "₹10,000", "₹25,000"];

const impactItems = [
  {
    icon: Users,
    amount: "₹500",
    description: "Provides meals for 10 visiting devotees",
  },
  {
    icon: BookOpen,
    amount: "₹2,500",
    description: "Supports printing of 50 spiritual books",
  },
  {
    icon: Home,
    amount: "₹5,000",
    description: "Sponsors one person's week-long retreat",
  },
  {
    icon: Heart,
    amount: "₹10,000",
    description: "Helps maintain the ashram facilities for a month",
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState("₹2,500");
  const [customAmount, setCustomAmount] = useState("");

  return (
    <>
      <PageHeader
        title="Support Our Mission"
        description="Your generous contribution helps us preserve and spread the timeless wisdom of Vedanta"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Donate", href: "/donate" },
        ]}
      />

      {/* Main Donation Section */}
      <SectionWrapper variant="white">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Donation Form */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Make a Donation
            </h2>
            <p className="mt-2 text-muted-foreground">
              All donations are tax-exempt under Section 80G of the Income Tax Act.
            </p>

            {/* Amount Selection */}
            <div className="mt-8">
              <Label className="text-sm font-medium text-foreground">
                Select Amount
              </Label>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={cn(
                      "py-3 px-4 rounded-lg text-center font-medium transition-all border",
                      selectedAmount === amount && !customAmount
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary text-foreground border-border hover:border-primary/50"
                    )}
                  >
                    {amount}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <Label htmlFor="custom-amount" className="text-sm text-muted-foreground">
                  Or enter custom amount
                </Label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    ₹
                  </span>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount("");
                    }}
                    className="pl-8"
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-8">
              <Label className="text-sm font-medium text-foreground">
                Payment Method
              </Label>
              <Tabs defaultValue="upi" className="mt-3">
                <TabsList className="w-full bg-secondary">
                  <TabsTrigger value="upi" className="flex-1">
                    <Smartphone className="h-4 w-4 mr-2" />
                    UPI
                  </TabsTrigger>
                  <TabsTrigger value="card" className="flex-1">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Card
                  </TabsTrigger>
                  <TabsTrigger value="bank" className="flex-1">
                    <Building2 className="h-4 w-4 mr-2" />
                    Bank
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="upi" className="mt-4">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-4">
                        Scan QR code or use UPI ID
                      </p>
                      <div className="bg-secondary p-4 rounded-lg text-center">
                        <div className="w-32 h-32 bg-muted mx-auto rounded-lg flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">QR Code</span>
                        </div>
                        <p className="mt-3 font-medium text-foreground">
                          ashram@upi
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="card" className="mt-4">
                  <Card className="border-border">
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <Label htmlFor="card-name">Name on Card</Label>
                        <Input id="card-name" placeholder="Full name" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" className="mt-1.5" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry</Label>
                          <Input id="expiry" placeholder="MM/YY" className="mt-1.5" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" className="mt-1.5" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="bank" className="mt-4">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-4">
                        Bank Transfer Details
                      </p>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Account Name</span>
                          <span className="font-medium text-foreground">Swami Debananda Ashram Trust</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Account Number</span>
                          <span className="font-medium text-foreground">1234567890</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">IFSC Code</span>
                          <span className="font-medium text-foreground">SBIN0001234</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bank</span>
                          <span className="font-medium text-foreground">State Bank of India</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Donor Details */}
            <div className="mt-8">
              <Label className="text-sm font-medium text-foreground">
                Your Details (for tax receipt)
              </Label>
              <div className="mt-3 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="First name" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Last name" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="pan">PAN Number (for 80G receipt)</Label>
                  <Input id="pan" placeholder="ABCDE1234F" className="mt-1.5" />
                </div>
              </div>
            </div>

            <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base">
              Donate {customAmount ? `₹${customAmount}` : selectedAmount}
            </Button>

            <p className="mt-4 text-xs text-muted-foreground text-center">
              By donating, you agree to our terms and privacy policy. All transactions are secure.
            </p>
          </div>

          {/* Right: Impact & Info */}
          <div>
            <div className="bg-secondary p-8 rounded-2xl">
              <LotusIcon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                Your Impact
              </h3>
              <p className="mt-2 text-muted-foreground">
                Every contribution, regardless of size, helps us continue our mission
                of spreading spiritual knowledge and serving seekers.
              </p>

              <div className="mt-6 space-y-4">
                {impactItems.map((item) => (
                  <div key={item.amount} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">{item.amount}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-8 bg-card border border-border rounded-2xl">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Other Ways to Support
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    <Link href="/donate/volunteer" className="text-primary hover:underline">Volunteer</Link> your time and skills
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Sponsor a specific program or event
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Include the ashram in your will
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Corporate matching gifts
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <Globe className="h-6 w-6 text-primary" />
              <h4 className="mt-3 font-medium text-foreground">
                International Donors
              </h4>
              <p className="mt-2 text-sm text-muted-foreground">
                For international donations, please{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact us
                </Link>{" "}
                for wire transfer details or PayPal options.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Transparency Section */}
      <SectionWrapper variant="cream">
        <SectionHeader
          title="Our Commitment to Transparency"
          description="We believe in complete accountability in how your donations are used"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Annual Reports",
              description: "Detailed financial reports published every year, available for public viewing.",
            },
            {
              title: "80G Tax Exemption",
              description: "All donations are eligible for tax deduction under Section 80G.",
            },
            {
              title: "Audited Accounts",
              description: "Our accounts are audited annually by certified chartered accountants.",
            },
          ].map((item) => (
            <Card key={item.title} className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            <Link href="/donate/transparency">View Fund Transparency Reports</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}

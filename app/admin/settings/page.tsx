"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings,
  Globe,
  Bell,
  Shield,
  Database,
  Mail,
  CreditCard,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="font-serif text-2xl font-semibold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your ashram website settings and preferences
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 lg:w-auto">
          <TabsTrigger value="general">
            <Settings className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="site">
            <Globe className="mr-2 h-4 w-4" />
            Site
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="payments">
            <CreditCard className="mr-2 h-4 w-4" />
            Payments
          </TabsTrigger>
          <TabsTrigger value="email">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">General Settings</CardTitle>
              <CardDescription>
                Basic information about your ashram
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="ashramName">Ashram Name</Label>
                  <Input id="ashramName" defaultValue="Swami Debananda Ashram" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input id="tagline" defaultValue="A Sanctuary for Spiritual Growth" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={3}
                  defaultValue="Swami Debananda Ashram is a sacred space dedicated to Vedantic teachings, meditation, and spiritual transformation."
                />
              </div>

              <Separator />

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Phone</Label>
                  <Input id="phone" defaultValue="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email</Label>
                  <Input id="email" type="email" defaultValue="info@swamidebanandaashram.org" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  rows={2}
                  defaultValue="Ashram Road, Near Sacred Grove, Rishikesh, Uttarakhand 249201, India"
                />
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Site Settings */}
        <TabsContent value="site">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Site Settings</CardTitle>
              <CardDescription>
                Configure your website appearance and functionality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Temporarily disable the public website
                  </p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Event Registrations</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow visitors to register for events
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Donations</Label>
                  <p className="text-sm text-muted-foreground">
                    Accept online donations on the website
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Volunteer Form</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow visitors to apply as volunteers
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Default Language</Label>
                <div className="flex gap-2">
                  <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    English
                  </Button>
                  <Button variant="outline" className="bg-transparent">Hindi</Button>
                  <Button variant="outline" className="bg-transparent">Bengali</Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Notification Settings</CardTitle>
              <CardDescription>
                Configure how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Donations</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when a new donation is received
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Event Registrations</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when someone registers for an event
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Volunteer Applications</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when a new volunteer application is submitted
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Contact Form Submissions</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when someone submits the contact form
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="notificationEmail">Notification Email</Label>
                <Input
                  id="notificationEmail"
                  type="email"
                  defaultValue="admin@swamidebanandaashram.org"
                />
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Change Password</Label>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input type="password" placeholder="Current password" />
                  <Input type="password" placeholder="New password" />
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Button variant="outline" className="bg-transparent">Enable 2FA</Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically log out after period of inactivity
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Payment Settings</CardTitle>
              <CardDescription>
                Configure donation payment methods and gateways
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">UPI Payment</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input id="upiId" defaultValue="ashram@upi" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="upiName">Display Name</Label>
                    <Input id="upiName" defaultValue="Swami Debananda Ashram Trust" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Bank Transfer</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">Bank Name</Label>
                    <Input id="bankName" defaultValue="State Bank of India" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountNumber">Account Number</Label>
                    <Input id="accountNumber" defaultValue="1234567890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ifsc">IFSC Code</Label>
                    <Input id="ifsc" defaultValue="SBIN0001234" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountName">Account Name</Label>
                    <Input id="accountName" defaultValue="Swami Debananda Ashram Trust" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>International Payments</Label>
                  <p className="text-sm text-muted-foreground">
                    Accept donations via international cards
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Email Settings</CardTitle>
              <CardDescription>
                Configure email templates and delivery settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="senderName">Sender Name</Label>
                <Input id="senderName" defaultValue="Swami Debananda Ashram" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="senderEmail">Sender Email</Label>
                <Input id="senderEmail" type="email" defaultValue="noreply@swamidebanandaashram.org" />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Donation Thank You Emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically send thank you emails to donors
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Event Registration Confirmations</Label>
                  <p className="text-sm text-muted-foreground">
                    Send confirmation emails for event registrations
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Newsletter Subscriptions</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow visitors to subscribe to newsletters
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

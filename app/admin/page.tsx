import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  IndianRupee,
  Users,
  Calendar,
  BookOpen,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Eye,
  Heart,
  Clock,
} from "lucide-react";

// Stats data
const stats = [
  {
    title: "Total Donations",
    value: "₹12,45,678",
    change: "+12.5%",
    trend: "up",
    icon: IndianRupee,
    description: "This month",
  },
  {
    title: "Active Devotees",
    value: "3,847",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    description: "Registered members",
  },
  {
    title: "Upcoming Events",
    value: "12",
    change: "+3",
    trend: "up",
    icon: Calendar,
    description: "Next 30 days",
  },
  {
    title: "Published Teachings",
    value: "156",
    change: "+5",
    trend: "up",
    icon: BookOpen,
    description: "Total articles & videos",
  },
];

// Recent donations
const recentDonations = [
  { name: "Shri Ramesh Kumar", amount: "₹25,000", type: "Bank Transfer", time: "2 hours ago" },
  { name: "Smt. Lakshmi Devi", amount: "₹11,000", type: "UPI", time: "4 hours ago" },
  { name: "Anonymous Donor", amount: "₹51,000", type: "Bank Transfer", time: "6 hours ago" },
  { name: "Shri Gopal Sharma", amount: "₹5,100", type: "UPI", time: "8 hours ago" },
  { name: "Dr. Anand Krishnan", amount: "₹21,000", type: "Card", time: "1 day ago" },
];

// Upcoming events
const upcomingEvents = [
  { title: "Maha Shivaratri Celebrations", date: "Feb 26, 2026", registrations: 245 },
  { title: "Holi Spiritual Gathering", date: "Mar 14, 2026", registrations: 180 },
  { title: "Weekend Meditation Retreat", date: "Mar 21-22, 2026", registrations: 45 },
];

// Recent activities
const recentActivities = [
  { action: "New volunteer application", user: "Priya Sharma", time: "10 min ago", icon: Users },
  { action: "Event registration", user: "Rajesh Gupta", time: "25 min ago", icon: Calendar },
  { action: "New teaching published", user: "Admin", time: "1 hour ago", icon: BookOpen },
  { action: "Donation received", user: "Anonymous", time: "2 hours ago", icon: Heart },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold">Welcome back, Admin</h1>
          <p className="text-muted-foreground">
            Here is what is happening at the Ashram today.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            View Site
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            Quick Actions
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-600" />
                )}
                <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>
                  {stat.change}
                </span>
                <span className="text-muted-foreground">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Donations */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="font-serif">Recent Donations</CardTitle>
              <CardDescription>Latest contributions from devotees</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDonations.map((donation, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Heart className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">{donation.name}</p>
                      <p className="text-xs text-muted-foreground">{donation.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{donation.amount}</p>
                    <Badge variant="secondary" className="text-xs">
                      {donation.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="font-serif">Upcoming Events</CardTitle>
              <CardDescription>Events scheduled for the coming days</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {event.registrations} Registered
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Stats */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-serif">Recent Activity</CardTitle>
            <CardDescription>Latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                    <activity.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">by {activity.user}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <BookOpen className="mr-2 h-4 w-4" />
              Add New Teaching
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Calendar className="mr-2 h-4 w-4" />
              Create Event
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Users className="mr-2 h-4 w-4" />
              View Applications
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <IndianRupee className="mr-2 h-4 w-4" />
              Donation Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

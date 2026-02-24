"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Calendar,
  MapPin,
  Users,
  Clock,
  Copy,
} from "lucide-react";

// Sample events data
const events = [
  {
    id: 1,
    title: "Maha Shivaratri Celebrations",
    description: "Join us for the divine night of Lord Shiva with special pujas, bhajans, and meditation.",
    date: "2026-02-26",
    time: "6:00 PM - 6:00 AM",
    location: "Main Temple Hall",
    type: "festival",
    status: "upcoming",
    registrations: 245,
    capacity: 500,
    image: "/images/event-satsang.jpg",
  },
  {
    id: 2,
    title: "Holi Spiritual Gathering",
    description: "Celebrate the festival of colors with spiritual significance and community bonding.",
    date: "2026-03-14",
    time: "9:00 AM - 1:00 PM",
    location: "Ashram Grounds",
    type: "festival",
    status: "upcoming",
    registrations: 180,
    capacity: 300,
    image: "/images/gallery-1.jpg",
  },
  {
    id: 3,
    title: "Weekend Meditation Retreat",
    description: "A two-day intensive retreat for deepening your meditation practice.",
    date: "2026-03-21",
    time: "Full Day",
    location: "Retreat Center",
    type: "retreat",
    status: "upcoming",
    registrations: 45,
    capacity: 50,
    image: "/images/meditation-hall.jpg",
  },
  {
    id: 4,
    title: "Bhagavad Gita Study Circle",
    description: "Weekly study and discussion of the Bhagavad Gita scriptures.",
    date: "Every Sunday",
    time: "10:00 AM - 12:00 PM",
    location: "Library Hall",
    type: "regular",
    status: "ongoing",
    registrations: 32,
    capacity: 40,
    image: "/images/hero-ashram.jpg",
  },
];

const typeColors = {
  festival: "bg-primary/10 text-primary",
  retreat: "bg-blue-100 text-blue-700",
  workshop: "bg-purple-100 text-purple-700",
  regular: "bg-green-100 text-green-700",
};

const statusColors = {
  upcoming: "bg-yellow-100 text-yellow-700",
  ongoing: "bg-green-100 text-green-700",
  completed: "bg-gray-100 text-gray-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function EventsManagePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold">Events Management</h1>
          <p className="text-muted-foreground">
            Create and manage ashram events, retreats, and festivals
          </p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              Create Event
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-serif">Create New Event</DialogTitle>
              <DialogDescription>
                Fill in the details to create a new event at the ashram.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" placeholder="Enter event title" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the event..." rows={3} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" placeholder="e.g., 9:00 AM - 5:00 PM" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="type">Event Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="festival">Festival</SelectItem>
                      <SelectItem value="retreat">Retreat</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="regular">Regular Program</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input id="capacity" type="number" placeholder="Max attendees" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g., Main Temple Hall" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)} className="bg-transparent">
                Cancel
              </Button>
              <Button onClick={() => setIsCreateDialogOpen(false)}>Create Event</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Upcoming Events
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Registrations
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">502</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              This Month
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Completed
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
      </div>

      {/* Events List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="font-serif">All Events</CardTitle>
              <CardDescription>Manage your upcoming and past events</CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row"
              >
                {/* Image */}
                <div className="relative h-32 w-full overflow-hidden rounded-md md:h-28 md:w-40">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start gap-2">
                    <h3 className="font-serif font-semibold">{event.title}</h3>
                    <Badge className={typeColors[event.type as keyof typeof typeColors]}>
                      {event.type}
                    </Badge>
                    <Badge className={statusColors[event.status as keyof typeof statusColors]}>
                      {event.status}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {event.registrations}/{event.capacity} registered
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-start gap-2">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Edit className="mr-1 h-3 w-3" />
                    Edit
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        View Registrations
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Cancel Event
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

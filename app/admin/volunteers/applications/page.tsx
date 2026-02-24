"use client";

import { useState } from "react";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  MoreHorizontal,
  Eye,
  CheckCircle,
  XCircle,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Users,
  Clock,
  UserCheck,
  UserX,
} from "lucide-react";

// Sample volunteer applications
const applications = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya@email.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    date: "2026-02-02",
    skills: ["Teaching", "Event Management", "Hindi"],
    availability: "Weekends",
    status: "pending",
    message: "I have been following Swamiji's teachings for 5 years and would love to contribute to the ashram's mission.",
  },
  {
    id: 2,
    name: "Arjun Patel",
    email: "arjun@email.com",
    phone: "+91 87654 32109",
    location: "Ahmedabad, Gujarat",
    date: "2026-02-01",
    skills: ["IT Support", "Video Editing", "English"],
    availability: "Flexible",
    status: "pending",
    message: "I work in IT and can help with the ashram's digital presence and technical needs.",
  },
  {
    id: 3,
    name: "Meera Krishnan",
    email: "meera@email.com",
    phone: "+91 76543 21098",
    location: "Chennai, Tamil Nadu",
    date: "2026-01-30",
    skills: ["Cooking", "Seva", "Tamil"],
    availability: "Full-time",
    status: "approved",
    message: "I wish to dedicate myself to seva at the ashram. I have experience in large-scale cooking.",
  },
  {
    id: 4,
    name: "Rohan Gupta",
    email: "rohan@email.com",
    phone: "+91 65432 10987",
    location: "Delhi",
    date: "2026-01-28",
    skills: ["Photography", "Social Media", "Hindi"],
    availability: "Part-time",
    status: "rejected",
    message: "Professional photographer looking to document ashram activities.",
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
};

export default function VolunteerApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedApplication, setSelectedApplication] = useState<typeof applications[0] | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const filteredApplications = applications.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pendingCount = applications.filter((a) => a.status === "pending").length;
  const approvedCount = applications.filter((a) => a.status === "approved").length;
  const rejectedCount = applications.filter((a) => a.status === "rejected").length;

  const viewApplication = (app: typeof applications[0]) => {
    setSelectedApplication(app);
    setIsViewDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold">Volunteer Applications</h1>
          <p className="text-muted-foreground">
            Review and manage volunteer applications
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Applications
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Review
            </CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Approved
            </CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{approvedCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Rejected
            </CardTitle>
            <UserX className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{rejectedCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Applications List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="font-serif">All Applications</CardTitle>
              <CardDescription>Review volunteer applications and their details</CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredApplications.map((app) => (
              <div
                key={app.id}
                className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center"
              >
                {/* Avatar & Name */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {app.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{app.name}</h3>
                    <p className="text-sm text-muted-foreground">{app.email}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {app.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {app.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Applied: {new Date(app.date).toLocaleDateString("en-IN")}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {app.availability}
                    </span>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center gap-2">
                  <Badge className={statusColors[app.status as keyof typeof statusColors]}>
                    {app.status}
                  </Badge>
                  {app.status === "pending" && (
                    <>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive">
                        <XCircle className="mr-1 h-3 w-3" />
                        Reject
                      </Button>
                    </>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => viewApplication(app)}>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* View Application Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif">Application Details</DialogTitle>
            <DialogDescription>
              Full details of the volunteer application
            </DialogDescription>
          </DialogHeader>
          {selectedApplication && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg">
                    {selectedApplication.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{selectedApplication.name}</h3>
                  <Badge className={statusColors[selectedApplication.status as keyof typeof statusColors]}>
                    {selectedApplication.status}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  {selectedApplication.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  {selectedApplication.phone}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  {selectedApplication.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  Availability: {selectedApplication.availability}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedApplication.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Message</h4>
                <p className="text-sm text-muted-foreground bg-secondary p-3 rounded-md">
                  {selectedApplication.message}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)} className="bg-transparent">
              Close
            </Button>
            {selectedApplication?.status === "pending" && (
              <>
                <Button variant="destructive">Reject</Button>
                <Button className="bg-green-600 hover:bg-green-700">Approve</Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

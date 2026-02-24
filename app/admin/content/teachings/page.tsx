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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Copy,
  BookOpen,
  Video,
  Music,
  FileText,
  Calendar,
  Clock,
} from "lucide-react";

// Sample teachings data
const teachings = [
  {
    id: 1,
    title: "The Nature of Self: Understanding Atman",
    type: "article",
    category: "Vedanta",
    status: "published",
    author: "Swami Debananda",
    date: "2026-02-01",
    views: 1245,
    image: "/images/meditation-hall.jpg",
  },
  {
    id: 2,
    title: "Morning Meditation Practice",
    type: "video",
    category: "Meditation",
    status: "published",
    author: "Swami Debananda",
    date: "2026-01-28",
    views: 3420,
    duration: "45 min",
    image: "/images/meditation-hall.jpg",
  },
  {
    id: 3,
    title: "Bhagavad Gita Chapter 2 - Discourse",
    type: "audio",
    category: "Scriptures",
    status: "published",
    author: "Swami Debananda",
    date: "2026-01-25",
    views: 2180,
    duration: "1h 20m",
    image: "/images/event-satsang.jpg",
  },
  {
    id: 4,
    title: "The Path of Karma Yoga",
    type: "article",
    category: "Vedanta",
    status: "draft",
    author: "Swami Debananda",
    date: "2026-01-20",
    views: 0,
    image: "/images/hero-ashram.jpg",
  },
  {
    id: 5,
    title: "Evening Satsang - Questions and Answers",
    type: "video",
    category: "Satsang",
    status: "published",
    author: "Swami Debananda",
    date: "2026-01-18",
    views: 1890,
    duration: "55 min",
    image: "/images/event-satsang.jpg",
  },
];

const typeIcons = {
  article: FileText,
  video: Video,
  audio: Music,
};

const typeColors = {
  article: "bg-blue-100 text-blue-700",
  video: "bg-purple-100 text-purple-700",
  audio: "bg-green-100 text-green-700",
};

export default function TeachingsManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredTeachings = teachings.filter((teaching) => {
    const matchesSearch = teaching.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "articles" && teaching.type === "article") ||
      (activeTab === "videos" && teaching.type === "video") ||
      (activeTab === "audio" && teaching.type === "audio") ||
      (activeTab === "drafts" && teaching.status === "draft");
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold">Teachings Management</h1>
          <p className="text-muted-foreground">
            Create and manage articles, videos, and audio teachings
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add New Teaching
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Teachings
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Articles
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Videos
            </CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Audio Discourses
            </CardTitle>
            <Music className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">26</div>
          </CardContent>
        </Card>
      </div>

      {/* Teachings List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="font-serif">All Teachings</CardTitle>
              <CardDescription>Manage your spiritual content library</CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search teachings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              <div className="space-y-4">
                {filteredTeachings.map((teaching) => {
                  const TypeIcon = typeIcons[teaching.type as keyof typeof typeIcons];
                  const typeColor = typeColors[teaching.type as keyof typeof typeColors];

                  return (
                    <div
                      key={teaching.id}
                      className="flex flex-col gap-4 rounded-lg border p-4 md:flex-row md:items-center"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-24 w-full overflow-hidden rounded-md md:h-20 md:w-32">
                        <Image
                          src={teaching.image || "/placeholder.svg"}
                          alt={teaching.title}
                          fill
                          className="object-cover"
                        />
                        {teaching.type !== "article" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <TypeIcon className="h-8 w-8 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-2">
                          <h3 className="font-medium">{teaching.title}</h3>
                          <Badge className={typeColor}>{teaching.type}</Badge>
                          <Badge
                            variant={teaching.status === "published" ? "default" : "secondary"}
                            className={
                              teaching.status === "published"
                                ? "bg-green-100 text-green-700 hover:bg-green-100"
                                : ""
                            }
                          >
                            {teaching.status}
                          </Badge>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(teaching.date).toLocaleDateString("en-IN")}
                          </span>
                          <span>{teaching.category}</span>
                          {teaching.duration && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {teaching.duration}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {teaching.views.toLocaleString()} views
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
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
                              Preview
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="mr-2 h-4 w-4" />
                              Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

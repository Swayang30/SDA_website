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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  Filter,
  Download,
  MoreHorizontal,
  Eye,
  Receipt,
  Mail,
  IndianRupee,
  TrendingUp,
  Calendar,
  CreditCard,
} from "lucide-react";

// Sample transaction data
const transactions = [
  {
    id: "TXN001",
    donor: "Shri Ramesh Kumar",
    email: "ramesh@email.com",
    amount: 25000,
    method: "Bank Transfer",
    status: "completed",
    date: "2026-02-03",
    purpose: "General Donation",
  },
  {
    id: "TXN002",
    donor: "Smt. Lakshmi Devi",
    email: "lakshmi@email.com",
    amount: 11000,
    method: "UPI",
    status: "completed",
    date: "2026-02-03",
    purpose: "Annadaan",
  },
  {
    id: "TXN003",
    donor: "Anonymous",
    email: "-",
    amount: 51000,
    method: "Bank Transfer",
    status: "completed",
    date: "2026-02-02",
    purpose: "Temple Construction",
  },
  {
    id: "TXN004",
    donor: "Shri Gopal Sharma",
    email: "gopal@email.com",
    amount: 5100,
    method: "UPI",
    status: "completed",
    date: "2026-02-02",
    purpose: "General Donation",
  },
  {
    id: "TXN005",
    donor: "Dr. Anand Krishnan",
    email: "anand@email.com",
    amount: 21000,
    method: "Card",
    status: "pending",
    date: "2026-02-01",
    purpose: "Education Fund",
  },
  {
    id: "TXN006",
    donor: "Smt. Meera Patel",
    email: "meera@email.com",
    amount: 15000,
    method: "UPI",
    status: "completed",
    date: "2026-02-01",
    purpose: "Medical Aid",
  },
  {
    id: "TXN007",
    donor: "Shri Vijay Malhotra",
    email: "vijay@email.com",
    amount: 100000,
    method: "Bank Transfer",
    status: "completed",
    date: "2026-01-31",
    purpose: "Temple Construction",
  },
];

// Stats data
const stats = [
  {
    title: "Today's Collection",
    value: "₹36,000",
    change: "+15%",
    icon: IndianRupee,
  },
  {
    title: "This Month",
    value: "₹12,45,678",
    change: "+12.5%",
    icon: TrendingUp,
  },
  {
    title: "Total Transactions",
    value: "847",
    change: "+8%",
    icon: Calendar,
  },
  {
    title: "Avg. Donation",
    value: "₹14,700",
    change: "+5%",
    icon: CreditCard,
  },
];

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [methodFilter, setMethodFilter] = useState("all");

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch =
      txn.donor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || txn.status === statusFilter;
    const matchesMethod =
      methodFilter === "all" || txn.method.toLowerCase().replace(" ", "-") === methodFilter;
    return matchesSearch && matchesStatus && matchesMethod;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-semibold">Transaction History</h1>
          <p className="text-muted-foreground">
            View and manage all donation transactions
          </p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Stats */}
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
              <p className="text-xs text-green-600">{stat.change} from last period</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">All Transactions</CardTitle>
          <CardDescription>
            A list of all donation transactions with their details
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by donor name or transaction ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={methodFilter} onValueChange={setMethodFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Methods</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                  <SelectItem value="card">Card</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Donor</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Purpose</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{txn.donor}</p>
                        <p className="text-xs text-muted-foreground">{txn.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold text-primary">
                      {formatCurrency(txn.amount)}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{txn.method}</Badge>
                    </TableCell>
                    <TableCell>{txn.purpose}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          txn.status === "completed"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : txn.status === "pending"
                              ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                              : "bg-red-100 text-red-700 hover:bg-red-100"
                        }
                      >
                        {txn.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(txn.date).toLocaleDateString("en-IN")}</TableCell>
                    <TableCell className="text-right">
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
                            <Receipt className="mr-2 h-4 w-4" />
                            Generate Receipt
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Thank You
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination placeholder */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredTransactions.length} of {transactions.length} transactions
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

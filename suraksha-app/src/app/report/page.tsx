"use client";

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { BadgeCheck, Calendar, User } from "lucide-react";

interface Report {
  id: string;
  type: string;
  description: string;
  date: string;
  status: "Pending" | "Resolved";
  reporter: string;
  assignedTeam:string;
}

const ReportingPage: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([
    {
      id: "1",
      type: "Physical Abuse",
      description: "Severe injury reported.",
      date: "2024-12-01",
      status: "Pending",
      reporter: "Anonymous",
      assignedTeam: "Team Alpha",
    },
    {
      id: "2",
      type: "Emotional Abuse",
      description: "Continuous verbal assault reported.",
      date: "2024-12-03",
      status: "Resolved",
      reporter: "John Doe",
      assignedTeam: "Team Bravo",
    },
    {
      id: "3",
      type: "Financial Abuse",
      description: "Access to funds restricted by partner.",
      date: "2024-12-05",
      status: "Pending",
      reporter: "Anonymous",
      assignedTeam: "Team Charlie",
    },
    {
      id: "4",
      type: "Sexual Abuse",
      description: "Non-consensual sexual acts reported.",
      date: "2024-12-07",
      status: "Pending",
      reporter: "Jane Smith",
      assignedTeam: "Team Delta",
    },
    {
      id: "5",
      type: "Psychological Abuse",
      description: "Manipulation and control reported.",
      date: "2024-12-10",
      status: "Resolved",
      reporter: "Emily Johnson",
      assignedTeam: "Team Echo",
    },
    {
      id: "6",
      type: "Stalking",
      description: "Harassment and surveillance reported.",
      date: "2024-12-12",
      status: "Pending",
      reporter: "Anonymous",
      assignedTeam: "Team Foxtrot",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Received Reports
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Here is a summary of all the reports received so far. Each report is treated
          with confidentiality and professionalism.
        </p>
        <Table className="w-full">
          <TableHead>
            <TableRow className="bg-red-100">
              <TableCell className="font-bold">#</TableCell>
              <TableCell className="font-bold">Type</TableCell>
              <TableCell className="font-bold">Description</TableCell>
              <TableCell className="font-bold">
                <Calendar className="inline mr-1" /> Date
              </TableCell>
              <TableCell className="font-bold">Assigned Team</TableCell>    
              <TableCell className="font-bold">Reporter</TableCell>
              <TableCell className="font-bold">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report, index) => (
              <TableRow
                key={report.id}
                className="hover:bg-gray-100 transition"
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell>{report.description}</TableCell>
                <TableCell>{report.date}</TableCell>
                <TableCell>{report.assignedTeam}</TableCell>
                <TableCell>
                  <User className="inline mr-1 text-blue-500" />
                  {report.reporter}
                </TableCell>
                <TableCell>
                  {report.status === "Resolved" ? (
                    <span className="text-green-600 flex items-center">
                      <BadgeCheck className="inline mr-1" /> Resolved
                    </span>
                  ) : (
                    <span className="text-yellow-600">Pending</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ReportingPage;

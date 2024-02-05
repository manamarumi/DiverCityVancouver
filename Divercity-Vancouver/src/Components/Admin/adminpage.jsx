import React from 'react';
import { Input } from "../../../@/components/ui/input"
import { Button } from "../../../@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../../@/components/ui/table";
import {Link} from 'react-router-dom';

export default function Adminpage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <nav className="w-64 bg-white p-5">
          <h1 className="text-2xl font-bold mb-10">Welcome, Admin</h1>
          <ul className="space-y-2">
            <li>
            <Link to={'/admin'}>
              <Button className="w-full justify-start text-left">User Information</Button>
            </Link>
            </li>
            
            <li>
            <Link to={'/admin/postevent'}>
              <Button className="w-full justify-start text-left">Post Event</Button>
            </Link>
            </li>
            <li>
            <Link to={'/admin/editevent'}>
              <Button className="w-full justify-start text-left">Edit Events</Button>
            </Link>
            </li>
            <li>
            <Link to={'/admin/postnews'}>
              <Button className="w-full justify-start text-left">Post News</Button>
            </Link>
            </li>
            <li>
            <Link to={'/admin/editnews'}>
              <Button className="w-full justify-start text-left">Edit News</Button>
            </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-1 p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold">User Information</h2>
            <Link to={'/'}>
            <Button variant="outline">Sign Out</Button>
            </Link>
          </div>
          <div className="bg-white p-5 shadow rounded-lg mb-6">
            <div className="mb-4">
              <Input placeholder="Search User" />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User ID</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead>User Name</TableHead>
                <TableHead>Subscriber</TableHead>
                <TableHead>Last Logged in</TableHead>
                <TableHead>Delete User</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>#AHGA68</TableCell>
                <TableCell>23/09/2022</TableCell>
                <TableCell>Jacob Marcus</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>23/09/2022</TableCell>
                <TableCell>
                  <Button variant="destructive">Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#AHGA68</TableCell>
                <TableCell>23/09/2022</TableCell>
                <TableCell>Jacob Marcus</TableCell>
                <TableCell>No</TableCell>
                <TableCell>23/09/2022</TableCell>
                <TableCell>
                  <Button variant="destructive">Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#AHGA68</TableCell>
                <TableCell>23/09/2022</TableCell>
                <TableCell>Jacob Marcus</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>23/09/2022</TableCell>
                <TableCell>
                  <Button variant="destructive">Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#AHGA68</TableCell>
                <TableCell>23/09/2022</TableCell>
                <TableCell>Jacob Marcus</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>23/09/2022</TableCell>
                <TableCell>
                  <Button variant="destructive">Delete</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </main>
      </div>
    </div>
  )
}


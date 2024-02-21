import { Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/table.jsx";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import AdminNavber from "../../components/adminNavber.jsx";

export default function Adminpage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const userCollection = collection(db, 'users'); // 'users' should be your user collection name
      const userSnapshot = await getDocs(userCollection);
      const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
    };

    getUsers();
  }, []);


  return (
    <div className="min-h-screen bg-gray-100 flex">
    <AdminNavber/>
    <main className="flex-1 p-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">User Information</h2>
        <Link to={'/'}>
          <Button className="bg-bluee rounded-lg shadow-lg h-13">
            <div>
              <div className="flex items-center justify-center">
                <Signout />
              </div>
              <p>Sign Out</p>
            </div>
          </Button>
        </Link>
      </div>
      <div className="bg-white p-5 shadow rounded-lg mb-6">
        <div>
          <Input placeholder="Search User" />
        </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
              <TableHead>User Name</TableHead>
                <TableHead>User ID</TableHead>
                <TableHead>Date Created</TableHead>                
                <TableHead>Subscriber</TableHead>
                <TableHead>Last Logged in</TableHead>
                <TableHead>Delete User</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>             
                 {users.map((user, index) => (
                   <TableRow key={index}>
                   <TableCell><Link to={`/admin/userdetails/${user.name}`} className="underline">{user.name}</Link></TableCell>
                   <TableCell>{user.id}</TableCell>
                   <TableCell>{user.date_created.toDate().toLocaleDateString()}</TableCell>                  
                   <TableCell>{user.isSubscribed ? 'Yes' : 'No'}</TableCell>
                   <TableCell>{user.last_login.toDate().toLocaleDateString()}</TableCell>
                   <TableCell>
                     <Button variant="destructive">Delete</Button>
                   </TableCell>
                 </TableRow>
               ))}
             </TableBody>
          </Table>
        </main>
      </div>    
  )
}


function Signout(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="24"
      width="24"
      {...props}
    >
      <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
      <path d="M10.828.122A.5.5 0 0111 .5V1h.5A1.5 1.5 0 0113 2.5V15h1.5a.5.5 0 010 1h-13a.5.5 0 010-1H3V1.5a.5.5 0 01.43-.495l7-1a.5.5 0 01.398.117zM11.5 2H11v13h1V2.5a.5.5 0 00-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
    </svg>
  );
}


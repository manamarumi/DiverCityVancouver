import { Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/table.jsx";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import AdminNavber from "../../components/adminNavber.jsx";

export default function Adminpage() {
  const [users, setUsers] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [userToDeleteId, setUserToDeleteId] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      const userCollection = collection(db, 'users');
      const userSnapshot = await getDocs(userCollection);
      const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
    };

    getUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    filterUsers();
  }, [searchTerm, users]);

  const filterUsers = () => {
    const filtered = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredUsers(filtered);
  };

  const handleDeleteUser = async () => {
    try {
      await deleteDoc(doc(db, 'users', userToDeleteId));
      setUsers(users.filter(user => user.id !== userToDeleteId));
      setShowDeleteConfirmation(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminNavber />
      <main className="flex-1 p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">User Information</h2>
          <Link to={'/'}>
            <Button className="bg-bluee rounded-lg shadow-lg h-13">
              <div>
                <div className="flex items-center justify-center">
                  <Signout />
                </div>
                <p>Homepage</p>
              </div>
            </Button>
          </Link>
        </div>
        <div className="bg-white p-5 shadow rounded-lg mb-6">
          <div>
            <Input onChange={handleSearch} placeholder="Search User" />
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
            {filteredUsers.map((user, index) => (
              <TableRow key={index}>
                <TableCell><Link to={`/admin/userdetails/${user.name}`} className="underline">{user.name}</Link></TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.date_created.toDate().toLocaleDateString()}</TableCell>
                <TableCell>{user.isSubscribed ? 'Yes' : 'No'}</TableCell>
                <TableCell>{user.last_login.toDate().toLocaleDateString()}</TableCell>
                <TableCell>
                  <Button variant="destructive" onClick={() => {
                    setUserToDeleteId(user.id);
                    setShowDeleteConfirmation(true);
                  }}>Delete</Button>
                  {showDeleteConfirmation && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white p-8 rounded shadow w-80">
                        <h3 className="text-lg font-semibold mb-4 text-center">Delete this user?</h3>
                        <div className="flex justify-center gap-10">
                          <Button variant="destructive" className="w-20" onClick={handleDeleteUser}>Yes</Button>
                          <Button className="bg-gray-400 w-20" onClick={() => setShowDeleteConfirmation(false)}>No</Button>
                        </div>
                      </div>
                    </div>
                  )}
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


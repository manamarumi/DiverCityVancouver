import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "../../components/ui/avatar.jsx";
import { CardHeader, CardContent, Card } from "../../components/ui/card.jsx";
import AdminNavber from "../../components/adminNavber.jsx";
import { Link, useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export default function UserDetails() {
  const [userData, setUserData] = useState({});
  let { username } = useParams();

  useEffect(() => {
    const getUser = async () => {
      const q = query(collection(db, "users"), where("name", "==", username));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserData({ id: doc.id, ...doc.data() });
      });
    };

    getUser();
  }, [username]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminNavber />
      <main className="flex-1 p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">User Details</h2>
          <Link to={'/'}>
            <Button className="bg-bluee rounded-lg shadow-lg h-13">
              <div className="flex items-center justify-center">
                <Signout />
                <p>Sign Out</p>
              </div>
            </Button>
          </Link>
        </div>
        <div>
          <Link to={'/admin/userinfo'} >
            <ArrowLeftIcon className="text-blue-500 h-6 w-6" />
          </Link>
        </div>
        <div className="flex-1 p-5">
          <Card className="bg-white p-6">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage alt={userData.name} src={userData.avatarUrl} />
                  <AvatarFallback>{userData.initials}</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6 border-t">
                <div>
                  <div className="font-bold">User ID</div>
                  <div>{userData.id}</div>
                </div>
                <div>
                  <div className="font-bold">User Name</div>
                  <div>{userData.name}</div>
                </div>
                <div>
                  <div className="font-bold">Email</div>
                  <div>{userData.email}</div>
                </div>
                <div>
                  <div className="font-bold">Date Created</div>
                  <div>{userData.date_created?.toDate().toLocaleString()}</div>
                </div>
                <div>
                  <div className="font-bold">Last Logged in</div>
                  <div>{userData.last_login?.toDate().toLocaleString()}</div>
                </div>
                <div>
                  <div className="font-bold">Subscriber</div>
                  <div>{userData.subscriber ? 'Yes' : 'No'}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Total Bookmarked Events</h3>
                  <p>{userData.totalBookmarkedEvents}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Recently Bookmarked Event</h3>
                  <p>{userData.recentlyBookmarkedEvent}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </main>
    </div>
  )
}



function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
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

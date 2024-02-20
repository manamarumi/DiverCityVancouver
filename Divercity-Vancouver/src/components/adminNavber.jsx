import React from 'react'
import { Button } from "./ui/button";
import { NavLink, useLocation } from 'react-router-dom';

export default function AdminNavber() {
  const location = useLocation();

  return (    
    <nav className="w-64 bg-bluee p-5">
      <h1 className="text-2xl text-white font-bold mb-10">Welcome, Admin</h1>
      <ul className="space-y-2">
        <li>
          <NavLink to='/admin/userinfo'>
            <Button className={`mb-2 w-full justify-start text-left ${location.pathname === '/admin/userinfo' ? 'bg-zinc-400' : ''}`}> User Information</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/admin/postevent'>
            <Button className={`mb-2 w-full justify-start text-left ${location.pathname === '/admin/postevent' ? 'bg-zinc-400' : ''}`}>Post Event</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/admin/editevent'>
            <Button className={`mb-2 w-full justify-start text-left ${location.pathname === '/admin/editevent' ? 'bg-zinc-400' : ''}`}>Edit Events</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/admin/postnews'>
            <Button className={`mb-2 w-full justify-start text-left ${location.pathname === '/admin/postnews' ? 'bg-zinc-400' : ''}`}>Post News</Button>
          </NavLink>
        </li>
        <li>
          <NavLink to='/admin/editnews'>
            <Button className={`mb-2 w-full justify-start text-left ${location.pathname === '/admin/editnews' ? 'bg-zinc-400' : ''}`}> Edit News</Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

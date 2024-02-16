import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import placeholderImage from '../../assets/placeholder.jpg'; // Updated image path
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex h-[550px] w-[1100px] justify-between bg-white rounded-xl overflow-hidden" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                <div className="flex flex-col justify-center flex-1 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="w-full max-w-lg mx-auto lg:w-96">
                        <div>
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900" style={{ color: '#4654A3' }}>Welcome back Admin</h2>
                        </div>
                        <div className="mt-8">
                            <div className="mt-6">
                                <form action="#" className="space-y-6" method="POST">
                                    {/* Input fields */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                            Email:
                                        </label>
                                        <div className="mt-1">
                                            <Input autoComplete="email" id="email" name="email" placeholder="email" required type="email" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                                            Password:
                                        </label>
                                        <div className="mt-1">
                                            <Input
                                                autoComplete="current-password"
                                                id="password"
                                                name="password"
                                                placeholder="password"
                                                required
                                                type="password"
                                            />
                                        </div>
                                    </div>

                                    {/* Login button */}
                                    <div>
                                        <Link to="/admin/userinfo">
                                            <Button className="w-full bg-bluee">Login as Admin</Button>
                                        </Link>
                                    </div>

                                </form>
                                {/* Continue with text */}
                                <div className="mt-6 relative">
                                    <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                </div>
                                {/* Social login icons */}
                                <div className="mt-6 grid grid-cols-2 gap-3">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/5 bg-cover bg-center" style={{ backgroundImage: `url(${placeholderImage})` }} />
            </div>
        </div>
    );
};

export default Admin;

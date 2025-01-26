import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert('Signed out successfully!');
    } catch (error) {
      console.error('Error signing out:', error);
      alert('Error signing out: ' + error.message);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow-md"
    >
      Sign Out
    </button>
  );
};

export default SignOut;

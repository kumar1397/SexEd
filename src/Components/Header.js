import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Header = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('User');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUsername(docSnap.data().username || 'User');
        } else {
          console.log("No such document!");
        }
      } else {
        setUser(null);
        setUsername('User');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header className="bg-pink-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">LoveEd</h1>
      <nav className="flex-grow">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/articles" className="hover:underline">Articles</Link>
          </li>
          <li>
            <Link to="/faq" className="hover:underline">FAQs</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
      {user ? (
        <div className="flex items-center space-x-4">
          <span>Welcome, {username}</span>
          <button onClick={handleSignOut} className="bg-white text-pink-600 px-3 py-1 rounded">Sign Out</button>
        </div>
      ) : (
        <Link to="/signin" className="bg-white text-pink-600 px-3 py-1 rounded">Sign In</Link>
      )}
    </header>
  );
};

export default Header;

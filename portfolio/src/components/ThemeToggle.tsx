import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    // Toggle theme state
    setIsDarkMode(!isDarkMode);

    // Save theme preference to local storage
    const themePreference = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', themePreference);

    // Apply dark mode class to document element
    if (themePreference === 'dark') {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };

  return (
    <button onClick={toggleTheme}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
  );
};

export default ThemeToggle;
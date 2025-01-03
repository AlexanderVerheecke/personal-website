// src/components/ClientApp.tsx
"use client"; // This directive marks this file as a client component

import dynamic from "next/dynamic";
import "../../index.css";

// Dynamically import the App component with ssr: false
const App = dynamic(() => import("../../App"), { ssr: false });

const ClientApp = () => {
  return <App />;
};

export default ClientApp;

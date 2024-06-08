import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-12 bg-slate-900 text-slate-300 py-4">
      <Link legacyBehavior href="/">
        Contacts
      </Link>
    </div>
  );
};

export default Footer;

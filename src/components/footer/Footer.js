import React from "react";

const Footer = () => {
  return (
    <footer className="bg-bodyColor text-gray-400 py-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} Yurika Prajapati. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
 
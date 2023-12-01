"use client";

import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-row list-none gap-4">
        <li className={pathname === "/dashboard" ? "text-green-600" : ""}>
          Home
        </li>
        <li className={pathname === "/dashboard/posts" ? "text-green-600" : ""}>
          Posts
        </li>
        <li
          className={pathname === "/dashboard/settings" ? "text-green-600" : ""}
        >
          Settings
        </li>
      </ul>
    </nav>
  );
};

"use client";

import { usePathname } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <section>
      <nav>
        <ul className="flex flex-row list-none gap-4">
          <li className={pathname === "/dashboard" ? "text-green-600" : ""}>
            Home
          </li>
          <li
            className={pathname === "/dashboard/posts" ? "text-green-600" : ""}
          >
            Posts
          </li>
          <li
            className={
              pathname === "/dashboard/settings" ? "text-green-600" : ""
            }
          >
            Settings
          </li>
        </ul>
      </nav>

      {children}
    </section>
  );
};

export default DashboardLayout;

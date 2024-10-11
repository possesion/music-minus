"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

function AuthButton() {
  // useless comment
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <span className="mr-3">{session?.user?.name}</span>
        <button className="btn btn-sm" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button className="btn btn-sm" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}

function NavMenu() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("lemonade");
  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(true);
    console.log({ open });
  };

  const handleTheme = () => {
    setTheme(theme === "dark" ? "lemonade" : "dark");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Tracks</a>
              <ul className="p-2">
                <li>
                  <Link href="/categories">Categories</Link>
                </li>
                <li>
                  <Link href="/top50">Top 50</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Music-minus</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-10">
          <li tabIndex={0}>
            <details>
              <summary>Tracks</summary>
              <ul className="p-2">
                <li onClick={() => setOpen(false)}>
                  <Link href="/categories">Categories</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link href="/top50">Top 50</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <AuthButton />
      </div>
      <label className=" px-2 swap swap-rotate">
        <input
          type="checkbox"
          data-set-theme={theme}
          data-act-class="ACTIVECLASS"
          onClick={handleTheme}
        />
        <svg
          className="swap-on fill-current w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
        <svg
          className="swap-off fill-current w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.008,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </div>
    // <div>
    //   <AuthButton />
    //   <hr className='my-4' />
    //   <ul>
    //     <Link href='/'>
    //       <li className={pathname === '/' ? ACTIVE_ROUTE: INACTIVE_ROUTE}>
    //         Home
    //       </li>
    //     </Link>
    //     <Link href='/protected'>
    //       <li className={pathname === '/protected' ? ACTIVE_ROUTE: INACTIVE_ROUTE}>
    //         Protected Route
    //       </li>
    //     </Link>
    //     <Link href='/serverAction'>
    //       <li className={pathname === '/serverAction' ? ACTIVE_ROUTE: INACTIVE_ROUTE}>
    //         Server Action
    //       </li>
    //     </Link>
    //     <Link href='/apiFromClient'>
    //       <li className={pathname === '/apiFromClient' ? ACTIVE_ROUTE: INACTIVE_ROUTE}>
    //         API from client
    //       </li>
    //     </Link>
    //     <Link href='/apiFromServer'>
    //       <li className={pathname === '/apiFromServer' ? ACTIVE_ROUTE: INACTIVE_ROUTE}>
    //         API from server
    //       </li>
    //     </Link>
    //   </ul>
    // </div>
    // value={resolvedTheme}
  );
}

export default NavMenu;

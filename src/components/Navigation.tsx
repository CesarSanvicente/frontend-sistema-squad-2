"use client"

import Image from "next/image"
import { EduLinkPositivo, EduLinkNegativo } from "@/utils/images"
import { useTheme } from "@/context/ThemeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

export default function Navigation() {
  const { darkMode, setDarkMode } = useTheme()
  const { data: session } = useSession()
  const router = useRouter()
  const pathname = usePathname() // Obtiene la ruta actual

  const isAdminPage = pathname.startsWith("/admin")

  return (
    <nav
      className={`navbar p-3 flex items-center justify-between transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-light text-black"
      }`}
    >
      <aside className="flex items-center">
        <a href="/">
          <Image
            className="h-24 w-24 ml-10 object-contain"
            width={100}
            height={100}
            src={darkMode ? EduLinkNegativo : EduLinkPositivo}
            alt="Home"
          />
        </a>
      </aside>
      {isAdminPage ? null : (
        <div className="flex-1 flex items-center justify-center">
          <ul className="flex space-x-6">
            <Link href="/courses">
              <li>Cursos</li>
            </Link>
            <li>
              <a href="/mentores" className="hover:text-accent">
                Mentores
              </a>
            </li>
            <li>
              <a href="/inscripciones" className="hover:text-accent">
                Inscripciones
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="flex items-center">
        <label className="flex items-center cursor-pointer relative ">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="hidden"
          />
          <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center p-1">
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
          <FontAwesomeIcon
            icon={faMoon}
            className={`absolute left-1 text-gray-600 ${
              darkMode ? "text-gray-700" : ""
            }`}
          />
          <FontAwesomeIcon
            icon={faSun}
            className={`absolute right-1 text-yellow-400 ${
              darkMode ? "" : "text-gray-700"
            }`}
          />
        </label>
        <div className="ml-6">
          {session ? (
            <div className="flex items-center space-x-4">
              <span>Welcome {session.user?.name}!</span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="btn btn-outline btn-accent"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => signIn()}
                className="btn btn-outline btn-accent"
              >
                <strong>Sign In</strong>
              </button>
              <button
                onClick={() => router.push("/auth/register")}
                className="btn btn-accent ml-3"
              >
                <strong>Sign Up</strong>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

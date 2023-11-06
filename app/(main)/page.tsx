import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth(); // Assuming auth() returns user information

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-200 px-8 pt-20">
      <div className="text-center">
        <img
          src="/hero.svg"
          alt="Hero Image"
          className="w-64 h-64 mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
          Welcome to NoteIt, your note-taking web app
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4 ">
        {!userId ? (
          <>
            <Link
              href="/sign-up"
              className="text-lg font-semibold text-blue-600 border border-blue-600 rounded-md px-6 py-3 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Sign Up
            </Link>
            <Link
              href="/sign-in"
              className="text-lg font-semibold text-white bg-blue-600 rounded-md px-6 py-3 hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </Link>
          </>
        ) : (
          <Link
            href="/app"
            className="text-lg font-semibold text-white bg-green-500 rounded-md px-6 py-3 hover:bg-green-600 transition duration-300"
          >
            Go to App
          </Link>
        )}
      </div>
    </main>
  );
}

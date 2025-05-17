import { Roboto } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";


const roboto = Roboto({
  subsets: ["latin"],
  weight: "600",
});

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className={`${roboto.className} text-3xl md:text-4xl font-bold`}>
          Welcome to <span className="text-blue-500">Edu Learn</span>!
        </h1>

        <div className="flex items-center space-x-4">
          <SignedOut>
            <div className="text-lg text-white border-2 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 cursor-pointer">
              <SignInButton mode="modal" />
            </div>
          </SignedOut>

          

          <SignedIn >
            <UserButton />
            <div className="text-lg border-2 px-4 py-2 rounded-xl text-white bg-blue-500 hover:bg-blue-400 cursor-pointer">
              <SignOutButton redirectUrl="/" />
            </div>
          </SignedIn>
        </div>
      </div>

      {/* Add top spacing so content doesn’t hide behind fixed navbar */}
      <div className="pt-28">
        <Separator />
      </div>
    </>
  );
}
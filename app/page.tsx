import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Welcome to liquor tracker
      <div>
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <SignedOut>
          <SignInButton/>
          
        </SignedOut>
      </div>
    </div>
  );
}

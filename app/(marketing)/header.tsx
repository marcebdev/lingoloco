import { Button } from '@/components/ui/button';

import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  UserButton,
  SignedOut,
  SignInButton,
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg-max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="logo-container py-8 pl-4 flex items-center gap-x-3">
          <Image
            src="/logo.jpeg"
            width={40}
            height={40}
            alt="Lingo loco logo"
          />
          <h2 className="text-2xl font-extrabold text-green-500">
            {' '}
            Lingo Loco
          </h2>
        </div>
        <ClerkLoading>
          <Loader className="w-8 h-8 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl="/learn">
              <Button size="lg">Log In</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

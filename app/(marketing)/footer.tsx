import { Button } from "@/components/ui/button";
import Flag from 'react-flagpack'

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="flex max-w-screen-lg mx-auto items-center justify-evenly h-full">
        <Button variant="ghost">
          <Flag code="NZ" />
          English
        </Button>
      </div>
    </footer>
  );
};

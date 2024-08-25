import { Button } from "@/components/ui/button";
import Flag from 'react-flagpack'

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="flex max-w-screen-lg mx-auto items-center gap-x-4 h-full">
        <Button variant="ghost">
          <Flag code="US" size="s" className="mr-2" />
          English
        </Button>

        <Button variant="ghost">
          <Flag code="ES" size="s" className="mr-2" />
          Spanish
        </Button>
      </div>
    </footer>
  );
};

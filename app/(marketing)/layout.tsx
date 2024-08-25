import { Footer } from './footer';
import { Header } from './header';

export type LayoutProps = {
  children?: React.ReactNode;
};
export default function MarketingLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex items-center flex-1">{children}</div>
      <Footer />
    </div>
  );
}

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 max-w-[200px]">
      <Button>Click me</Button>
      <Button variant="primary">Click me</Button>
      <Button variant="primaryOutline">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="secondaryOutline">Click me</Button>
      <Button variant="danger">Click me</Button>
      <Button variant="dangerOutline">Click me</Button>
    </div>
  );
}

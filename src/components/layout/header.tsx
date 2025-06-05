import { CodeXml } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 bg-background shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-2">
          <CodeXml className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-headline font-bold text-foreground">
            OnMax TechVision
          </h1>
        </Link>
        <nav>
          {/* Future navigation links can go here */}
        </nav>
      </div>
    </header>
  );
}

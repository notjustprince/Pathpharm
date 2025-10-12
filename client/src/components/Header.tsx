import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import { BookOpen, Menu } from "lucide-react";
import { Link } from "wouter";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer" data-testid="link-home">
              <div className="p-2 rounded-md bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <span className="font-heading text-xl font-bold">Anatomy Learn</span>
            </div>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <SearchBar onSearch={onSearch} />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:inline-flex" data-testid="button-browse">
              Browse
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex" data-testid="button-quizzes">
              Quizzes
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex" data-testid="button-dashboard">
              Dashboard
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="md:hidden pb-4">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </header>
  );
}

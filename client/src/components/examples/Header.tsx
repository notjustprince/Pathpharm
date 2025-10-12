import { Header } from "../Header";
import { ThemeProvider } from "../ThemeProvider";

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header onSearch={(query) => console.log("Searching:", query)} />
      <div className="p-6">
        <p className="text-muted-foreground">Header content appears above</p>
      </div>
    </ThemeProvider>
  );
}

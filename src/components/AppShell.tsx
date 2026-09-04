import Header from "./Header";
import BottomNav from "./BottomNav";

interface AppShellProps {
  children: React.ReactNode;
  locale: "pt" | "en";
}

export default function AppShell({ children, locale }: AppShellProps) {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen">
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          `,
        }}
      />
      <Header locale={locale} />
      <main className="flex-1 flex flex-col relative w-full pt-16 sm:pt-20 pb-32 px-4 sm:px-6 md:px-8 bg-surface">
        {children}
      </main>
      <BottomNav locale={locale} />
    </div>
  );
}

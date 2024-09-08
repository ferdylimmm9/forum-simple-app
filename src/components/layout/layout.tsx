import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Header from "./header";
import { ErrorViewComponent } from "../view-component";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ErrorBoundary
      errorComponent={({ error, reset }) => {
        return <ErrorViewComponent error={error} reset={reset} />;
      }}
    >
      <Header />
      {children}
    </ErrorBoundary>
  );
}

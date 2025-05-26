import { useEffect, useState } from "react";
import Home from "./pages/Home"
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />
  }

  return (
    <>
      <Home />
    </>
  )
}

export default App
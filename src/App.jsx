import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, PlusCircle } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import TransactionsList from "./pages/TransactionsList.jsx";
import TransactionDetails from "./pages/TransactionDetails.jsx";
import AddTransaction from "./pages/AddTransaction.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Transactions List",
    to: "/transactions",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Add Transaction",
    to: "/add-transaction",
    icon: <PlusCircle className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="transactions" element={<TransactionsList />} />
              <Route path="transactions/:id" element={<TransactionDetails />} />
              <Route path="add-transaction" element={<AddTransaction />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
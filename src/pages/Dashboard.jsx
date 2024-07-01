import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const fetchSummary = async () => {
  // Replace with your API call
  return {
    totalTransactions: 120,
    totalAmount: 5000,
    recentTransactions: [
      { id: 1, date: "2023-10-01", amount: 100, status: "Completed", description: "Payment" },
      { id: 2, date: "2023-10-02", amount: 200, status: "Pending", description: "Invoice" },
    ],
  };
};

const Dashboard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["summary"],
    queryFn: fetchSummary,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Transactions: {data.totalTransactions}</p>
          <p>Total Amount: ${data.totalAmount}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {data.recentTransactions.map((transaction) => (
              <li key={transaction.id}>
                {transaction.date} - ${transaction.amount} - {transaction.status} - {transaction.description}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
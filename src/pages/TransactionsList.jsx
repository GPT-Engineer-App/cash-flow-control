import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchTransactions = async () => {
  // Replace with your API call
  return [
    { id: 1, date: "2023-10-01", amount: 100, status: "Completed", description: "Payment" },
    { id: 2, date: "2023-10-02", amount: 200, status: "Pending", description: "Invoice" },
  ];
};

const TransactionsList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });
  const [search, setSearch] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const filteredTransactions = data.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search transactions"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul>
            {filteredTransactions.map((transaction) => (
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

export default TransactionsList;
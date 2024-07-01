import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const fetchTransactionDetails = async (id) => {
  // Replace with your API call
  return {
    id,
    date: "2023-10-01",
    amount: 100,
    status: "Completed",
    description: "Payment",
  };
};

const TransactionDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["transactionDetails", id],
    queryFn: () => fetchTransactionDetails(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Details</CardTitle>
      </CardHeader>
      <CardContent>
        <p>ID: {data.id}</p>
        <p>Date: {data.date}</p>
        <p>Amount: ${data.amount}</p>
        <p>Status: {data.status}</p>
        <p>Description: {data.description}</p>
      </CardContent>
    </Card>
  );
};

export default TransactionDetails;
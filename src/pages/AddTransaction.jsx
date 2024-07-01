import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const AddTransaction = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Replace with your API call
    console.log(data);
    reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Date" {...register("date")} />
          <Input placeholder="Amount" {...register("amount")} />
          <Input placeholder="Status" {...register("status")} />
          <Input placeholder="Description" {...register("description")} />
          <Button type="submit">Add Transaction</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddTransaction;
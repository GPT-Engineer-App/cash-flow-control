import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="text-center">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Transaction Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Use the sidebar to navigate through the app.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
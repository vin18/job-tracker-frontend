import { useUser } from "@/hooks/useUser";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";

export default function Account() {
  const user = useUser();

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="font-semibold text-primary dark:text-white">Account</h2>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <Label className="mb-3 block" htmlFor="email">
              Email
            </Label>
            <Input id="email" disabled defaultValue={user?.email} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

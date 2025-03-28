import { serve } from "inngest/next";
import{inngest} from "@/lib/inngest/client"
import { checkBudgetAlerts } from "@/lib/inngest/function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    checkBudgetAlerts, // <-- This is where you'll always add all your functions
  ],
});
 
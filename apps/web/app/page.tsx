import { HealthCheck } from "@/components/health-check"
import { Button } from "@workspace/ui/components/button"
import { db } from "@cortex/db"

export const dynamic = "force-dynamic";

export default async function Page() {
  // Query users directly from the database inside Next.js Server Component
  const users = await db.user.findMany().catch((err) => {
    console.error("Next.js db.user.findMany failed:", err);
    return [];
  });

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <HealthCheck />
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>

        <div className="mt-4 border-t pt-4">
          <h2 className="font-medium mb-1">Database Access (Frontend Server Component):</h2>
          {users.length === 0 ? (
            <p className="text-muted-foreground italic">No users found in database.</p>
          ) : (
            <ul className="list-disc pl-4 font-mono text-xs">
              {users.map((user) => (
                <li key={user.id}>{user.name || 'Anonymous'} ({user.email})</li>
              ))}
            </ul>
          )}
        </div>

        <div className="text-muted-foreground font-mono text-xs">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}

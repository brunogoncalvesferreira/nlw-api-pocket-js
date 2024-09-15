ALTER TABLE "goal_completions" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "goal_completions" DROP COLUMN IF EXISTS "completed_at";
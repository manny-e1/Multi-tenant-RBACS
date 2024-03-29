CREATE TABLE IF NOT EXISTS "usersToRoles " (
	"applicationId" uuid NOT NULL,
	"roleId" uuid NOT NULL,
	"userId" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "usersToRoles " ADD CONSTRAINT "usersToRoles _applicationId_roleId_userId" PRIMARY KEY("applicationId","roleId","userId");

DO $$ BEGIN
 ALTER TABLE "usersToRoles " ADD CONSTRAINT "usersToRoles _applicationId_applications_id_fk" FOREIGN KEY ("applicationId") REFERENCES "applications"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "usersToRoles " ADD CONSTRAINT "usersToRoles _roleId_roles_id_fk" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "usersToRoles " ADD CONSTRAINT "usersToRoles _userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

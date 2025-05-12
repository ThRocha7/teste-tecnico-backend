import { exec } from "node:child_process";

const checkPostgres = () => {
  exec(
    "docker exec database-postgres pg_isready --host localhost",
    handleReturn
  );

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write("#");
      checkPostgres();
      return;
    }
    console.log("\n\n🟢  postgres is ready! 🟢");
  }
};

console.log("🔴  waiting postgres.  🔴\n");
checkPostgres();

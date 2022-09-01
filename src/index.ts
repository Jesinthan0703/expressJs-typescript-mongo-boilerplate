import * as dotenv from "dotenv";
import { client } from "./utilities/mongo";

dotenv.config();

import server from "./api";

server.listen(process.env.PORT || "5000", () => {
  console.log(
    `The API server has successfully started. \nListening at ${
      process.env.APP_BASE_URL || "http://localhost:5000"
    }`
  );
});

process.on("SIGINT", function () {
  client.close();
  process.exit(0);
});

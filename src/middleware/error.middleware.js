import { logger } from "./log.middleware.js";

export const errorMiddleWare = (req, res) => {
  logger.error(`Something went wrong `);
  res
    .status(500)
    .json({ error: "Internal Server Error , Check the endpoints" });
};

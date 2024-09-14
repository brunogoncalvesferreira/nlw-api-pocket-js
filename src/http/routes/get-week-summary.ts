import type { FastifyPluginAsync } from "fastify";
import { getWeekSummary } from "../../functions/get-week-summary";

export const getWeekSummaryRoute: FastifyPluginAsync = async (app) => {
  app.get("/summary", async () => {
    const { summary } = await getWeekSummary();

    return { summary };
  });
};

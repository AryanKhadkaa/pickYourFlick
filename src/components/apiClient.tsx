import * as streamingAvailability from "streaming-availability";

const apiKey = import.meta.env.VITE_API_KEY;

export const client = new streamingAvailability.Client(
  new streamingAvailability.Configuration({
    apiKey: apiKey,
  })
);

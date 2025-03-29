import * as streamingAvailability from "streaming-availability";
const RAPID_API_KEY = "1d1abe1850mshd6381c56b72d90fp1232a6jsn2c56dab78069";

export const client = new streamingAvailability.Client(
  new streamingAvailability.Configuration({
    apiKey: RAPID_API_KEY,
  })
);

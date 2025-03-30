import * as streamingAvailability from "streaming-availability";
//const RAPID_API_KEY = "1d1abe1850mshd6381c56b72d90fp1232a6jsn2c56dab78069";
const RAPID_API_KEY2 = "1ca4487107msh94a77888a91c0e8p17cfedjsn6ac035585ea9";

export const client = new streamingAvailability.Client(
  new streamingAvailability.Configuration({
    apiKey: RAPID_API_KEY2,
  })
);

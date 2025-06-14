const getGolds = async () => {
  return goldApiClient.get("https://goldapi.gramvey.com/golds");
};

const getGoldById = async (goldId) => {
  return goldApiClient.get(`https://goldapi.gramvey.com/golds/${goldId}`);
};

const getChangeRate = async ({ goldId, dateRange }) => {
  return goldApiClient.get(
    "https://goldapi.gramvey.com/gold-price/change-rate",
    {
      params: {
        gold_id: goldId,
        date_range: dateRange,
      },
    }
  );
};

const getHistory = async ({ goldId, dateRange }) => {
  return goldApiClient.get("https://goldapi.gramvey.com/gold-price/history", {
    params: {
      gold_id: goldId,
      date_range: dateRange,
    },
  });
};

const getMinAndMax = async ({ goldId, dateRange }) => {
  return goldApiClient.get("https://goldapi.gramvey.com/gold-price/min-max", {
    params: {
      gold_id: goldId,
      date_range: dateRange,
    },
  });
};

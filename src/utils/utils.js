//Old database name is OldDatabase
//New database name is NewDatabase
export const getTableData = async (databaseName) => {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${databaseName}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getCatData = async (databaseName, catId) => {
  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${databaseName}/${catId}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

export const getBoolean = (dbValue) => {
  return dbValue === 0 ? "false" : "true";
};

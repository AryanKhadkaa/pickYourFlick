import { useEffect } from "react";
import { client } from "../components/apiClient";

const SearchPage = () => {
  const getAllFilm = async () => {
    try {
      const data = await client.showsApi.searchShowsByTitle({
        title: " ",
        country: "gb",
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getAllFilm();
  }, []);
  return <div>SearchPage</div>;
};

export default SearchPage;

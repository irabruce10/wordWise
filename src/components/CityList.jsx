import { useState } from "react";
import styles from "./CityList.module.css";
import { useEffect } from "react";

const Base_Url = "http://localhost:9000";
function CityList() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await `${Base_Url}/cities`;
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an Arror ...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return <ul className={styles.cityList}>CityList</ul>;
}

export default CityList;

import React, { useState, useEffect } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { Navigate, useNavigate } from "react-router-dom";



const Foods = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uniqueCountries, setUniqueCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
        );
        const data = await response.json();
        const countries = data.meals.map((meal) => meal.strArea);
        const uniqueCountries = Array.from(new Set(countries));
        setUniqueCountries(uniqueCountries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
    // console.log(searchResults);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        if (selectedCountry !== "") {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setSearchResults(data.meals ? data.meals : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [selectedCountry]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const filteredResults = searchResults.filter((meal) => {
    return meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className=" flex flex-col">
      <h1 className="text-3xl font-bold text-center pt-6 drop-shadow-lg">
        Search your Food Recipe
      </h1>

      <div className="flex gap-5 justify-center my-10">
        <input
          type="search"
          className="border-black border-[1px] outline-none rounded-lg px-3 h-[35px]"
          placeholder="Enter food name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          className="border-black border-[1px] outline-none rounded-lg px-3 h-[35px]"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">All Cuisines</option>
          {uniqueCountries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        <span
          onClick={() => {
            filteredResults.filter((meal) => {
              return meal.strCategory === "Vegetarian";
            });
            console.log("veg items");
          }}
          className="hover:cursor-pointer text-green-500 font-bold border-black border-[1px] flex-justify-center items-center rounded-lg px-4 pt-1"
        >
          Veg
        </span>
      </div>

      <div
    
        id="display_container"
        className="flex justify-center  flex-wrap gap-8 "
      >
        {isLoading && (
          <div className="py-10">
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </div>
        )}
        {/* {filteredResults.length === 0 && !isLoading && (
          <div className="text-red-500 text-2xl">No results found.</div>
        )} */}
        {filteredResults.map((meal, index) => (
          <div
            onClick={() => {
              navigate(`/foodItems/${meal.idMeal}`);
            }}
            key={meal + index}
            className="w-[300px] h-[290px] overflow-hidden rounded-2xl hover:scale-110 duration-300 hover:shadow-2xl hover:cursor-pointer"
          >
            <img
              src={meal.strMealThumb}
              className="h-[200px] w-[300px] rounded-2xl"
              alt="meal"
            />
            <div className="flex flex-col px-5 py-1">
              <h2 className="text-xl font-bold capitalize text-[rgb(65,68,73)]">
                {meal.strMeal}
              </h2>
              <p className="text-[rgb(103,106,109)]">{meal.strArea} food</p>
              <p
                className={`flex justify-between ${
                  meal.strCategory == "Vegetarian"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {" "}
                <span>#{meal.strCategory}</span>{" "}
                <span className="bg-green-500 text-white font-semibold w-[90px] h-[30px]  rounded-lg flex justify-center items-center">
                  Check
                </span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;

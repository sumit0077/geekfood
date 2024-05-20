import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FoodItemProduct } from "./Product";
import axios from "axios";

function FoodItem() {
  let { foodId } = useParams();
  const [food, setFood] = useState({});
  const [foodItemsByCategory, setFoodItemsByCategory] = useState([]);

  // async function fetchData (){
  //     // By Id
  //     try{
  //         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);
  //     const data = await response.json();
  //     console.log("ById",data);
  //     setFood(data.meals[0]);
  //     console.log(data.meals[0].strCategory);

  //     //By category
  //     const responseCategory = await axios.get(`www.themealdb.com/api/json/v1/1/filter.php?c=${data.meals[0].strCategory}`);
  //     // console.log(responseCategory);

  //     // const dataCategory = await responseCategory.json();

  //     console.log("ByCategory",responseCategory);
  //     // setFoodItemsByCategory(dataCategory.meals);
  //     }
  //     catch(error){
  //         console.log(error);
  //     }

  // }

  //   const instance = axios.create({
  //     baseURL: "www.themealdb.com/api/json/v1/1/",
  //     headers: { responseType: "json" },
  //     method: "GET",
  //   });

  const fetchData = async () => {
    try {
      const response = await axios.get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);
      console.log("ById", response);
      const responseFetch = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`, {
        headers:{
          "Content-Type": "application/json",
        }
      });
      const data = await responseFetch.json();
      console.log("ById", data);
      // setFood(response.data);
      // console.log(response.data);

      // const responseCategory = await instance.get(`filter.php?c=${response.data.meals[0].strCategory}`);
      // console.log("ById",responseCategory.data);
      // setFood(responseCategory.data.meals[0]);
      // console.log(responseCategory.data.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [foodId]);

  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-[80%] h-[70px] rounded-md  bg-orange-500 flex items-center justify-start text-white font-bold text-2xl px-10">
        Meal Details
      </div>

      <div className="w-[80%]">
        <FoodItemProduct food={food} />
      </div>

      <div className="w-[80%] h-[70px] rounded-md  bg-orange-500 flex items-center justify-start text-white font-bold text-2xl px-10">
        Categories
      </div>

      <div className="flex flex-wrap gap-8"></div>
    </div>
  );
}

export default FoodItem;

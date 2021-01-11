import axios from "axios";
import Meals from "../Meals.json";

export const getTodayMeals = async (today) => {
  return Meals;
};

export const getComments = async (mealId) => {
  const response = await axios.get(`/meals/${mealId}/comments`);
  return response.data;
};

export const countComments = async (mealId) => {
  const response = await axios.get(`/meals/${mealId}/comments/count`);
  return response.data;
};

export const createComment = async (mealId, comment) => {
  const body = {
    nickName: "Paden",
    comment: comment,
  };

  const response = await axios.post(`/meals/${mealId}/comment`, body);
  return response.data;
};

export const countLikes = async (mealId) => {
  const response = await axios.get(`/meals/${mealId}/likes/count`);
  return response.data;
};

export const createLike = async (mealId) => {
  const body = {
    nickName: "Paden",
  };

  const response = await axios.post(`/meals/${mealId}/like`, body);
  return response.data;
};

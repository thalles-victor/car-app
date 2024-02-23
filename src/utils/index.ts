import axios, { AxiosRequestConfig } from "axios";

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://api.api-ninjas.com/v1/cars?",
  params: { model: "corolla" },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export async function fetchCars() {
  const headers = {
    "X-Api-Key": process.env.NINJA_API_KEY as string,
  };

  const response = await fetch(
    "https://api.api-ninjas.com/v1/cars?limit=50&model=camry",
    {
      headers,
    }
  );
}

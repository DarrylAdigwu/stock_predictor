const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/key/`);
  if(!response.ok) {
    throw new Error(`Error fetching api key`);
  }
const data = await response.json();
  console.log(data)
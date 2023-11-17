const url = import.meta.env.VITE_URL_TOKEN;

async function Fetch() {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

export default Fetch;

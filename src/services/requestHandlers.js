export async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

export async function postData(url, item) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({item}),
  });
  return response.json();
}
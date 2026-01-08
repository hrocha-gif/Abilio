const baseURL = "https://dummyjson.com/auth/login";

export const api = {
  post: async (url: string, data: any) => {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return { data: responseData };
  },
};
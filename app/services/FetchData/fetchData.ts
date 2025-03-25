// const API_BASE_URL = "http://3.131.56.243:8000/api"; 
const API_BASE_URL = "http://127.0.0.1:8000/api"; 

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

interface APIResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  headers?: Headers;
}

export async function fetchData<T>(
  endpoint: string,
  method: HTTPMethod = "GET",
  data?: unknown,
  customHeaders: Record<string, string> = {}
): Promise<APIResponse<T>> {
  try {
    const options: RequestInit = {
      method,
      headers: {
        ...customHeaders,
      },
    };

    if (data) {
      if (data instanceof FormData) {
        options.body = data;
      } else {
        options.body = JSON.stringify(data);
        options.headers = {
          "Content-Type": "application/json",
        }
      }
    }
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    
    const responseData: T = await response.json();
    
    return { success: true, data: responseData , headers : response.headers};
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}

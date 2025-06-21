interface AppConfig {
  apiBaseUrl: string;
}

export const config: AppConfig = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000",
};

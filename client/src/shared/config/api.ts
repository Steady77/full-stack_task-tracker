export const SERVER_URL = `${import.meta.env.VITE_SERVER_URL}/api`;

export const getTasksUrl = () => `/tasks`;
export const getTaskUrl = () => `/task`;
export const getAdminUrl = (string: string) => `/admin${string}`;
export const getLoginUrl = () => `/auth/login`;

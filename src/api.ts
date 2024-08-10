import { getCustomers } from './utils';

const getErrorMessage = (status: number) => {
  return `Could not fetch org details: Error ${status}`;
};

export async function fetchCustomers() {
  try {
    const response = await getCustomers();
    if (response.status == 200) {
      const responseJson = response.data;
      return responseJson;
    }
    const errorMessage = getErrorMessage(response.status);
    return Promise.reject(errorMessage);
  } catch {
    return Promise.reject('Could not fetch org details');
  }
}

import { commonRequest } from './ApiCall';
import { BASE_URL } from './helper';

const getAllUsersFunc = async (searchUser) => {
  return await commonRequest(
    'GET',
    `${BASE_URL}/getAllUsers?search=${searchUser}`,
    ''
  );
};

const uploadCSVFunc = async (formData) => {
  const header = { 'Content-Type': 'multipart/form-data' };
  return await commonRequest(
    'POST',
    `${BASE_URL}/importUser`,
    formData,
    header
  );
};

export { getAllUsersFunc, uploadCSVFunc };

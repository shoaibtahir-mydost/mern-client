import { commonRequest } from './ApiCall';
import { BASE_URL } from './helper';

const getAllUsersFunc = async (searchUser, gender, country) => {
  return await commonRequest(
    'GET',
    `${BASE_URL}/getAllUsers?search=${searchUser}&gender=${gender}&country=${country}`,
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

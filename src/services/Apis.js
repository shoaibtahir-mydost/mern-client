import { commonRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

const getAllUsersFunc = async (
  appNumber,
  appYear,
  appName,
  title,
  abstract
) => {
  console.log(
    "appNumber",
    appNumber,
    "appYear",
    appYear,
    "appName",
    appName,
    title,
    abstract
  );
  return await commonRequest(
    "GET",
    `${BASE_URL}/getAllUsers?&appNumber=${appNumber}&appYear=${appYear}&appName=${appName}&title=${title}&abstract=${abstract}`,
    ""
  );
};

const uploadCSVFunc = async (formData) => {
  const header = { "Content-Type": "multipart/form-data" };
  return await commonRequest(
    "POST",
    `${BASE_URL}/importUser`,
    formData,
    header
  );
};

export { getAllUsersFunc, uploadCSVFunc };

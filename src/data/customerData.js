const _apiUrl = "/api/customers";

export const getCustomers = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getSingleCustomer = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

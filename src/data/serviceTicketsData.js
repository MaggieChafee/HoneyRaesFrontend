const _apiUrl = "/api/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getSingleServiceTicket = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

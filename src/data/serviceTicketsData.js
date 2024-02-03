const _apiUrl = "/api/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

export const getSingleServiceTicket = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

export const deleteServiceTicket = (id) => new Promise((resolve, reject) => {
  fetch(`${_apiUrl}/delete/${id}`), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }.then((data) => resolve(data))
     .catch(reject)
  };
})

export const createServiceTicket = (payload) => new Promise((resolve, reject) => {
  fetch(_apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, 
    body: JSON.stringify(payload)
  }).then((data) => resolve(data))
    .catch(reject)
});

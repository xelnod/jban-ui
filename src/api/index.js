export const getCurrentUser = () => new Promise((resolve, reject) => {
  fetch('http://localhost:8000/self/', {
    method: 'GET',
    credentials: 'include',
  }).then(response => response.json()).then((response) => {
    resolve(response);
  }).catch((err) => {
    reject(err);
  });
});

export const login = data => new Promise((resolve, reject) => {
  fetch('http://localhost:8000/rest-auth/login/', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(
      { username: data.username, password: data.password },
    ),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then((response) => {
    if (!response.ok) { throw response; }
    return response.json();
  }).then((json) => {
    resolve(json);
  }).catch((err) => {
    err.text().then((errorMessage) => {
      reject(errorMessage);
    });
  });
});

export const getBuild = buildId => new Promise((resolve, reject) => {
  fetch(`http://localhost:8000/build/${buildId}`, {
    method: 'GET',
    credentials: 'include',
  }).then(response => response.json()).then((response) => {
    resolve(response);
  }).catch((err) => {
    reject(err);
  });
});

function getCookie(name) {
  if (!document.cookie) {
    console.log('no cookie');
    return null;
  }

  // noinspection JSCheckFunctionSignatures
  const xsrfCookies = document.cookie.split(';')
    .map(c => c.trim())
    .filter(c => c.startsWith(`${name}=`));

  if (xsrfCookies.length === 0) {
    return null;
  }

  return decodeURIComponent(xsrfCookies[0].split('=')[1]);
}


export const getCurrentUser = () => new Promise((resolve, reject) => {
  const csrfToken = getCookie('csrftoken');
  fetch('http://localhost:8000/rest-auth/user/', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-csrftoken': csrfToken,
    },
  }).then((response) => {
    if (!response.ok) { throw response; }
    return response.json();
  }).then((json) => {
    resolve(json);
  }).catch((err) => {
    err.text().then((errorMessage) => {
      resolve({ anonymous: true, username: 'traveller', preferred_class: 'swordman' });
    });
  });
});

export const register = data => new Promise((resolve, reject) => {
  const csrfToken = getCookie('csrftoken');
  fetch('http://localhost:8000/register/', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(
      {
        username: data.username,
        password: data.password,
        password2: data.password2,
        preferred_class: data.preferred_class,
      },
    ),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-csrftoken': csrfToken,
    },
  }).then((response) => {
    if (!response.ok) { throw response; }
    return response.json();
  }).then((json) => {
    resolve(json);
  }).catch((err) => {
    err.text().then((errorMessage) => {
      reject(JSON.parse(errorMessage));
    });
  });
});

export const login = data => new Promise((resolve, reject) => {
  const csrfToken = getCookie('csrftoken');
  fetch('http://localhost:8000/rest-auth/login/', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(
      { username: data.username, password: data.password },
    ),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'x-csrftoken': csrfToken,
    },
  }).then((response) => {
    if (!response.ok) { throw response; }
    return response.json();
  }).then((json) => {
    resolve(json);
  }).catch((err) => {
    err.text().then((errorMessage) => {
      reject(JSON.parse(errorMessage));
    });
  });
});

export const logout = () => new Promise((resolve, reject) => {
  const csrfToken = getCookie('csrftoken');
  fetch('http://localhost:8000/rest-auth/logout/', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'x-www-form-urlencoded; charset=utf-8',
      'x-csrftoken': csrfToken,
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
  const csrfToken = getCookie('csrftoken');
  fetch(`http://localhost:8000/build/${buildId}`, {
    method: 'GET',
    credentials: 'include',
  }).then(response => response.json()).then((response) => {
    resolve(response);
  }).catch((err) => {
    reject(err);
  });
});

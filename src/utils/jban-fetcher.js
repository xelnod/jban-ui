/* eslint-disable no-underscore-dangle */
// using JavaScript fetch API requires writing repeating and rather nasty logic.
// I try to store the most disgusting parts here in order to see them as rarely as possible.


function getCookie(name) {
  if (!document.cookie) {
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

export class JbanFetch {
  constructor(csrfToken) {
    this.headers = { 'x-csrftoken': csrfToken,
      'Content-Type': 'application/json; charset=utf-8',
    };
  }

  get(url, params) {
    const _url = new URL(url);
    // noinspection JSValidateTypes
    _url.search = new URLSearchParams(params);
    return new Promise((resolve, reject) => {
      fetch(_url, {
        method: 'GET',
        credentials: 'include',
        headers: this.headers,
      }).then((response) => {
        if (!response.ok) { throw response; }
        return response.json();
      }).then((json) => {
        resolve(json);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: this.headers,
        body: JSON.stringify(data),
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
  //
  // put(url, params) {
  //   return new Promise((resolve, reject) => {
  //     this.axios.put(url, params)
  //       .then((response) => {
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         checkAuth(error);
  //         reject(error);
  //       });
  //   });
  // }
  //
  // delete(url, params) {
  //   return new Promise((resolve, reject) => {
  //     this.axios.delete(url, params)
  //       .then((response) => {
  //         resolve(response);
  //       })
  //       .catch((error) => {
  //         checkAuth(error);
  //         reject(error);
  //       });
  //   });
  }
}

export default new JbanFetch(getCookie('csrftoken'));


import JbanFetcher from '@/utils/jban-fetcher';

export const getCurrentUser = () => new Promise((resolve, reject) => {
  JbanFetcher.get('http://localhost:8000/rest-auth/user/')
    .then(response => resolve(response))
    .catch(response => reject(response));
});

export const register = data => new Promise((resolve, reject) => {
  JbanFetcher.post('http://localhost:8000/register/', data)
    .then(response => resolve(response))
    .catch(response => reject(response));
});

export const login = data => new Promise((resolve, reject) => {
  JbanFetcher.post('http://localhost:8000/rest-auth/login/', data)
    .then(response => resolve(response))
    .catch(response => reject(response));
});


export const logout = () => new Promise((resolve, reject) => {
  JbanFetcher.post('http://localhost:8000/rest-auth/logout/')
    .then(response => resolve(response))
    .catch(response => reject(response));
});

export const getBuild = buildId => new Promise((resolve, reject) => {
  JbanFetcher.get(`http://localhost:8000/build/${buildId}`)
    .then(response => resolve(response))
    .catch(response => reject(response));
});

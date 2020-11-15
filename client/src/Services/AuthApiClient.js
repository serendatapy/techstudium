// Declare the base url for the API
const BASE_URL = 'http://localhost:3001';

// Export the result of the API call based on the path
export default {
  register: (user) => {
    return fetchRequest('/register', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  },
  login: (user) => {
    return fetchRequest('/login', {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  },
  getCategories: () => { return fetchRequest('/categories') }
}

// Fetch the information from the API based on the base url and the path to certain data
const fetchRequest = (path, callback) => {
  try {
    return fetch(`${BASE_URL}${path}`, callback)
      .then(res => res.json())
  }
  catch (err) {
    console.error(`The API call to ${BASE_URL}${path} has failed with the following error message: ${err}`) // eslint-disable-line no-console
  }
}
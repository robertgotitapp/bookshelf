function client(endpoint, customConfig = {}) {
  return window.fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, {
    method: 'GET',
    ...customConfig
  }).then(response => response.json())
}

export {client}

/*






























💰 spoiler alert below...



























































const config = {
    method: 'GET',
    ...customConfig,
  }
*/

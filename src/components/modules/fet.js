let fet = async (url, method, body) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject("Invalid URL");
    }
    if (!method) method = "GET";
    //if (!body) body = {};
    fetch(url, {
      method,
      mode: "cors",
      credentials: "same-origin",
      body,
    })
      .then((data) => data.json())
      .then((data) => {
        //console.log(data);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { fet };

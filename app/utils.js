export default {
  $post(url, data, callback) {
    const xmlHttpRequest = new XMLHttpRequest();

    xmlHttpRequest.onreadystatechange = () => {
      if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
        let data = {};

        try {
          data = JSON.parse(xmlHttpRequest.responseText);
        } catch (err) {
          console.warn(err);
          return;
        }

        callback(data);
      }
    };

    xmlHttpRequest.open('POST', url, true);
    xmlHttpRequest.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xmlHttpRequest.send(JSON.stringify(data));
  }
};

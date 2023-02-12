import React from 'react';

const API_URL = 'https://hotword-compare-api.vercel.app/api/v1';
class MainApi extends React.Component {
  constructor(props) {
    super(props);
    this._url = props.baseUrl;
  }

  helloWorld() {
    return fetch(`${this._url}/`, {}).then((res) => this._getResponseData(res));
  }

  compareResumeAndJobSkills(data) {
    return fetch(`${this._url}/compare`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => this._getResponseData(res));
  }

  _getResponseData(res) {
    if (!res.ok && res.status === 429) {
      return Promise.reject(
        'Limited to 25 requests an hour, Please come back in an hour to continue using the hot words compare.',
      );
    } else if (!res.ok && res.url === `${API_URL}/compare`) {
      return Promise.reject(
        'Sorry. There was no keywords found in any of the texts',
      );
    } else if (!res.ok) {
      return Promise.reject('Something went wrong');
    }
    return res.json();
  }
}

const mainApi = new MainApi({
  baseUrl: API_URL,
});

export default mainApi;


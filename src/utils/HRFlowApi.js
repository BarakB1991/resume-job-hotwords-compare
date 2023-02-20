import React from 'react';

const HR_API_URL = 'https://api.hrflow.ai/v1';

class HRFlowApi extends React.Component {
  constructor(props) {
    super(props);
    this._url = props.baseUrl;
  }

  getSkillGap(text) {
    return fetch(`${this._url}/text/revealing`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'X-API-KEY': 'askw_2648f57accd6d3d9da068feb832df7c8',
        'X-USER-EMAIL': 'barakoyb@gmail.com',
      },
      body: JSON.stringify({
        text,
      }),
    }).then((res) => this._getResponseData(res));
  }

  _getResponseData(res) {
    if (!res.ok && res.status === 400) {
      return Promise.reject(res.message);
    }
    return res.json();
  }
}

const hrFlowApi = new HRFlowApi({
  baseUrl: HR_API_URL,
});

export default hrFlowApi;

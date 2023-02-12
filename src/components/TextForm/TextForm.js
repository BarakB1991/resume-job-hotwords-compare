import React, { useState } from 'react';
import mainApi from '../../utils/MainApi';
import './TextForm.css';

const TextForm = ({
  dataReceived,
  setDataReceived,
  errorMessage,
  setErrorMessage,
}) => {
  const [resume, setResume] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (e) => {
    setDataReceived(null);
    setErrorMessage(null);
    e.preventDefault();
    mainApi
      .compareResumeAndJobSkills([resume, jobDescription])
      .then((res) => {
        setDataReceived(res);
      })
      .catch((err) => {
        setDataReceived(null);
        return setErrorMessage(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-container'>
        <div className='form-group'>
          <label htmlFor='resume'>Resume:</label>
          <textarea
            type='text'
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            id='resume'
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='job-description'>Job Description:</label>
          <textarea
            type='textbox'
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            id='job-description'
            className='form-input'
          />
        </div>
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default TextForm;

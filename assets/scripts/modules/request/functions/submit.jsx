require('es6-promise').polyfill();
import axios from 'axios';
import { SubmissionError } from 'redux-form';

function submit(formData){
  console.log('form data',formData);
  let params = new URLSearchParams()
  params.append('action', 'requestCountryName')
  params.append('formData', formData)
  const url = experiensa_vars.ajaxurl;
  return axios
  .post(url,params)
  .then((response)=>{
    console.log('asdasd',response)
    if (response.error) {
      throw new SubmissionError({
        _error: response.message,
      });
    }
  })
  .catch((err)=>{
    console.log('un error', err);
    if (e instanceof SubmissionError) throw err;
    throw new SubmissionError({
      _error: "Am pierdut conexiunea cu server-ul",
    });
  })
}
export default submit;
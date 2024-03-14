const axios = require('axios');

const apiKey = 'cdec5067-2adf-11ee-addf-0200cd936042';

const sendOtp = async (phone) => {
  var val = Math.floor(1000 + Math.random() * 9000);

  try {
    const response = await axios({
      url: `https://2factor.in/API/V1/${apiKey}/SMS/${phone}/${val}`,
      method: 'get',
    });

    return response.data;
  } catch (err) {
    return { message: 'otp send failed' };
  }
};

const verifyOtp = async (session, otp) => {
  try {
    const response = await axios({
      url: `https://2factor.in/API/V1/${apiKey}/SMS/VERIFY/${session}/${otp}`,
      method: 'get',
    });

    return response.data;
  } catch (err) {
    return { message: 'otp verification failed' };
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
};

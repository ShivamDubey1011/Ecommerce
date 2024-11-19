const successResponse = (message, data) => {
  return { statusCode: 200, message, data };
};

const errorResponse = (message, error) => {
  return { statusCode: 400, message, error };
};

module.exports = { successResponse, errorResponse };

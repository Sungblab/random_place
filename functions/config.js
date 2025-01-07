exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/javascript",
    },
    body: `window.ENV = {
      KAKAO_APP_KEY: '${process.env.KAKAO_APP_KEY}'
    };`,
  };
};

const items = [
  {
    id: 1,
    name: "john",
  },
  {
    id: 2,
    name: "sky",
  },
];

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body:"hello people",
  };
};

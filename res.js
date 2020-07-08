'use strict';

exports.ok = function (values, res) {
  const data = {
    status: 200,
    values: values
  };
  res.json(data);
  res.end();
};

exports.error = function (code, message, res) {
  const data = {
    status: code,
    values: message
  }
  res.json(data);
  res.end();
}
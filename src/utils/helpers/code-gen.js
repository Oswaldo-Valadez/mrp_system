const moment = require("moment");

const { v4: uuidv4 } = require("uuid");

exports.codeGenerator = async (str, count, pad = 3) => {
  const normalized_str = normalize(str);

  count = padLeft(count + 1, pad);

  const code =
    normalized_str +
    "-" +
    moment().format("DD") +
    moment().format("MM") +
    moment().format("YY") +
    "-" +
    count;

  return code;
};

const normalize = (str) => {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
  var to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
  var mapping = {};

  for (var i = 0, j = from.length; i < j; i++)
    mapping[from.charAt(i)] = to.charAt(i);

  var ret = [];
  for (var i = 0, j = str.length; i < j; i++) {
    var c = str.charAt(i);
    if (mapping.hasOwnProperty(str.charAt(i))) ret.push(mapping[c]);
    else if (
      (str.charAt(i) != "-") & (str.charAt(i) != ".") &&
      str.charAt(i) != "_" &&
      str.charAt(i) != ","
    )
      ret.push(c);
  }
  return ret.join("").trim();
};

function padLeft(value, length) {
  return value.toString().length < length
    ? padLeft("0" + value, length)
    : value;
}

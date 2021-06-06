const ejs = require("ejs");

exports.pdfGenerator = async ({ data = {}, template = "default" }) => {
  try {
    const html = await ejs.renderFile(
      `./src/utils/filer/templates/${template}.ejs`,
      { data }
    );
    return html;
  } catch (err) {
    console.log("filer > filer - catch err: ", err);
  }
};

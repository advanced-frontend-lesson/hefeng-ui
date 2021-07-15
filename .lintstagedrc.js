module.exports = {
  "*.{js,ts,vue}": ["prettier --write", "eslint --fix"],
  "**/*.scss": ["prettier --write", "stylelint --syntax=scss"],
};

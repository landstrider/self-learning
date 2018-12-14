module.exports = {
  "extends": "airbnb",
  "rules": {
	"import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
	"react/jsx-filename-extension": [0],
	"react/destructuring-assignment": ["always", { "ignoreClassFields": true }],
	"no-tabs": 0,
	"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
	"no-use-before-define": ["error", { "functions": false, "classes": false }],
	"no-param-reassign": ["error", { "props": false }],
	"react/prefer-stateless-function": ["always", { "ignorePureComponents": false }]
  },
  "env": {
	"browser": true,
	"node": true
  }
};

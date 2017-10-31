module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "env": {
      "browser": true
    },
    "rules": {
        // "no-console":0,
        // "no-unused-vars": 0,

        "indent": [
          "error",
          4
        ],
        "linebreak-style": [
          "error",
          "windows"
        ],
        "quotes": [
          "error",
          "single"
        ],
        "semi": [
          "error",
          "always"
        ],

        "max-len": [1, 70, 2, {ignoreComments: true}],

        "camelcase": [2, {"properties": "always"}]
      }
};
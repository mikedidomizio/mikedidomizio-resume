module.exports = {
  // commented out because Jest was complaining about it, not entirely sure if still required
  // "presets": ['@vue/cli-plugin-babel/preset'],

  // required for Jest
  "env": {
    "test": {
      "presets": [["env", { "targets": { "node": "current" } }]]
    }
  }
}

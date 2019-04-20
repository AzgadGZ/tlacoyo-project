module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{css,ico,png,svg,html,js,json,txt}"
  ],
  "swDest": "dist\\sw.js",
  "runtimeCaching": [
    {
      "urlPattern": /https:\/\/talentland-restful-api\.azurewebsites\.net/,
      "handler": "networkFirst"
    }
  ]
};
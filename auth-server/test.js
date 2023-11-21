const { getCalendarEvents } = require("./handler");

getCalendarEvents({
  pathParameters: {
    access_token:
      "ya29.a0AfB_byDfZ3xB2PtFFReMpi5a7j_eUYsI_gdXLOoc7YPVhyf58Jkbn7bOCaOyyDKeoYv4OQzz0QHlJur73wEgjI0okdvhhd5ewwdn5cigiq9jS_j-tCAEQRRPI8MYCmG9qGaTyaxB25OR2NHic0pY1uSi7L-810pREgcaCgYKAQESARASFQHGX2MiIWwR7_dYcNd3askg5wJLuw0170",
  },
})
  .then(console.log)
  .catch(console.log);

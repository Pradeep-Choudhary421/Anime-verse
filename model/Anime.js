const mongoose = require("mongoose");

const AnimeSchema = new mongoose.Schema({
  animeName: { type: String, required: true },

  poster: {
    public_id: String,
    url: String,
  },
  details: [
    {
      description: {
        type: String,
      },

      Written_By: {
        type: String,
      },
      start: {
        type: String,
      },

      end: {
        type: String,
      },
      episodes:{
        type:String
      },
      country: {
        type: String,
      },
      rating: {
        type: Number,
        min: 1,
        max: 5,
        // required: true,
      },
    },
  ],
  characters: [
    {
      characterImg: {
        public_id: String,
        url: String,
      },
      name: {
        type: String,
      },
      charDescription: {
        type: String,
      }
    },
  ],
});

module.exports = mongoose.model("AnimeSchema", AnimeSchema);

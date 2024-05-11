const AnimeSchema = require("../model/Anime");
const cloudinary = require("cloudinary");

exports.addAnime = async (req, res) => {
  try {
    const { animeName, poster, details, characters } = req.body; 
    const existAnime = await AnimeSchema.findOne({ animeName });

    if (existAnime) {
      return res.status(409).json({ message: "This anime already exists" });
    } else {
      const myCloud = await cloudinary.v2.uploader.upload(poster, {
        folder: "poster",
      });

      const [
        {
          description,
          Written_By,
          start,
          end,
          episodes,
          country,
          rating,
        },
      ] = details;

      const nestedCharacters = [];

      for (const character of characters) {
        const { characterImg, name, charDescription } = character;
        const myCloudchar = await cloudinary.v2.uploader.upload(characterImg, {
          folder: "characterImg",
        });

        nestedCharacters.push({
          characterImg: {
            public_id: myCloudchar.public_id,
            url: myCloudchar.secure_url,
          },
          name,
          charDescription,
        });
      }

      const data = await AnimeSchema.create({
        animeName,
        poster: { public_id: myCloud.public_id, url: myCloud.secure_url },
        details: {
          description,
          Written_By,
          start,
          end,
          episodes,
          country,
          rating,
        },
        characters: nestedCharacters, 
      });

      return res.status(201).json({
        success: true,
        message: "Anime added successfully",
        data,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getData = async (req, res) => {
  try {
    const getAnime = await AnimeSchema.find({});
    if (!getAnime) {
      res.staus(404).json({ success: false, message: "No Data Found" });
    }
    res.status(200).json({
      success: true,
      message: "data  fetched successfully",
      count: getAnime.length,
      data: getAnime,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "error in fetching data",
    });
  }
};

exports.updateData = async (req, res) => {
  try {
    const data = await AnimeSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "No such record found" });
    }
    else {
      res.status(200).json({
        success: true,
        message: "Record updated Successfully",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const deleteData = await AnimeSchema.findByIdAndDelete({
      _id: req.params.id,
    });

    if (!deleteData) {
      return res.status(400).send("No Record Found");
    } else {
      res.status(200).json({
        success: true,
        message: "Deleted Succesfully",
        data: deleteData,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

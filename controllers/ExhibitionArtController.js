import ExhibitionArt from '../models/ExhibitionArt.js'
import { StatusCodes } from 'http-status-codes'

const saveExhibitionArt = async (req, res) => {
  req.body.createdBy = req.user.userId

  console.log(req.body)

  const art = await ExhibitionArt.create(req.body)
  res.status(StatusCodes.CREATED).json({ art })
}

const getAllUserArts = async (req, res) => {
  const arts = await ExhibitionArt.find({ createdBy: req.user.userId })
  res
    .status(StatusCodes.OK)
    .json({ arts, totalArts: arts.length, numOfPages: 1 })
}

export { saveExhibitionArt, getAllUserArts }

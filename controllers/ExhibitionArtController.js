import ExhibitionArt from '../models/ExhibitionArt.js'
import { StatusCodes } from 'http-status-codes'

const saveExhibitionArt = async (req, res) => {
  req.body.createdBy = req.user.userId

  console.log(req.body)

  const art = await ExhibitionArt.create(req.body)
  res.status(StatusCodes.CREATED).json({ art })
}

export { saveExhibitionArt }

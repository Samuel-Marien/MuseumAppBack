import ExhibitionArt from '../models/ExhibitionArt.js'
import { NotFounderror } from '../errors/index.js'
import { StatusCodes } from 'http-status-codes'
import checkPermissions from '../utils/checkPermissions.js'

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

const deleteExhibitionArt = async (req, res) => {
  const { id: artId } = req.params
  const art = await ExhibitionArt.findOne({ _id: artId })

  if (!art) {
    throw new NotFounderror(`No art with thisid: ${artId}`)
  }

  checkPermissions(req.user, art.createdBy)

  await art.remove()
  res.status(StatusCodes.OK).json({ msg: 'Art removed successfully!' })
}

export { saveExhibitionArt, getAllUserArts, deleteExhibitionArt }

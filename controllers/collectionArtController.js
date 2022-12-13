import CollectionArt from '../models/CollectionArt.js'
import { NotFounderror } from '../errors/index.js'
import { StatusCodes } from 'http-status-codes'
import checkPermissions from '../utils/checkPermissions.js'

const saveCollectionArt = async (req, res) => {
  req.body.createdBy = req.user.userId

  console.log(req.body)

  const art = await CollectionArt.create(req.body)
  res.status(StatusCodes.CREATED).json({ art })
}

const getAllCollectionUserArts = async (req, res) => {
  const artsCollec = await CollectionArt.find({ createdBy: req.user.userId })
  res.status(StatusCodes.OK).json({
    artsCollec,
    totalCollecArts: artsCollec.length,
    numOfCollecPages: 1
  })
}

const deleteCollectionUserArt = async (req, res) => {
  const { id: artId } = req.params
  const art = await CollectionArt.findOne({ _id: artId })

  if (!art) {
    throw new NotFounderror(`No artwork found with this id: ${artId}`)
  }

  checkPermissions(req.user, art.createdBy)

  await art.remove()
  res.status(StatusCodes.OK).json({ msg: 'Art deleted successfully' })
}

const addCollectionArtToFavorite = async (req, res) => {
  const { id: artId } = req.params
  const art = await CollectionArt.findOne({ id: artId })

  if (!art) {
    throw new NotFounderror(`No art found with thisid: ${artId}`)
  }

  checkPermissions(req.user, art.createdBy)

  const favoriteArt = await CollectionArt.findOneAndUpdate(
    { _id: artId },
    req.body,
    {
      new: true,
      runValidators: true
    }
  )

  res.status(StatusCodes.OK).json({ favoriteArt })
}

export {
  saveCollectionArt,
  getAllCollectionUserArts,
  deleteCollectionUserArt,
  addCollectionArtToFavorite
}

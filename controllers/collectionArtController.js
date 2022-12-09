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

export { saveCollectionArt }

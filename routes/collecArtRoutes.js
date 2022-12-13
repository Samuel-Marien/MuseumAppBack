import express from 'express'
const router = express.Router()

import {
  saveCollectionArt,
  getAllCollectionUserArts
} from '../controllers/collectionArtController.js'

router.route('/addUserCollectionArt').post(saveCollectionArt)
router.route('/getAllCollecUserArts').get(getAllCollectionUserArts)

export default router

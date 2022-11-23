import express from 'express'
const router = express.Router()

import {
  saveExhibitionArt,
  getAllUserArts
} from '../controllers/ExhibitionArtController.js'

router.route('/addUserArts').post(saveExhibitionArt)
router.route('/getAllUserArts').get(getAllUserArts)

export default router

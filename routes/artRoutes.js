import express from 'express'
const router = express.Router()

import {
  saveExhibitionArt,
  getAllUserArts,
  deleteExhibitionArt
} from '../controllers/ExhibitionArtController.js'

router.route('/addUserArts').post(saveExhibitionArt)
router.route('/getAllUserArts').get(getAllUserArts)
router.route('/:id').delete(deleteExhibitionArt)

export default router

import express from 'express'
const router = express.Router()

import { saveExhibitionArt } from '../controllers/ExhibitionArtController.js'

router.route('/addUserArts').post(saveExhibitionArt)

export default router

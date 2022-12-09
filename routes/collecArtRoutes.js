import express from 'express'
const router = express.Router()

import { saveCollectionArt } from '../controllers/collectionArtController.js'

router.route('/addUserCollectionArt').post(saveCollectionArt)

export default router

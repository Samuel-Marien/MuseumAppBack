import mongoose from 'mongoose'

const ExibitionArtSchema = new mongoose.Schema(
  {
    exibitionTitle: {
      type: String
    },
    exibitionId: {
      type: Number
    },
    imageCaption: {
      type: String
    },
    imageCitation: {
      type: String
    },
    imageCredit: {
      type: String
    },
    imageLargestUrl: {
      type: String
    },
    imageStandardUrl: {
      type: String
    },
    imageThumbnailUrl: {
      type: String
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user']
    }
  },
  { timestamps: true }
)

export default mongoose.model('ExibitionArt', ExibitionArtSchema)

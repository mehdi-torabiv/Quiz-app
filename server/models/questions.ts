import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  answers: [answerSchema],
  correctAnswer: { type: Number, required: true },
});

const Question = mongoose.model('Question', questionSchema);

export default Question;

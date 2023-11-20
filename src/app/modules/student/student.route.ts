import { StudentController } from './student.controller';
import express from 'express';
const router = express.Router();

//will call controller function
router.post('/create-student', StudentController.createStudent);
router.get('/collect-all-student-data', StudentController.getAllStudent);
router.get(
  '/single-student-info/:studentId',
  StudentController.getSingleStudent,
);

export const StudentRoutes = router;

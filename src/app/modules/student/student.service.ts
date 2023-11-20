import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const getStudentDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentDB = async (studentId: string) => {
  const result = await StudentModel.findOne({ id: studentId });
  return result;
};

const createStudentDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
export const StudentServices = {
  createStudentDB,
  getStudentDB,
  getSingleStudentDB,
};

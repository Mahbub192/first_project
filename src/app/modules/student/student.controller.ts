import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getStudentDB();
    res.status(200).json({
      success: true,
      message: 'all student data get successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentDB(studentId);
    res.status(200).json({
      success: true,
      message: 'a single student data get successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    //will call service function to send this data
    const result = await StudentServices.createStudentDB(studentData);
    // send response
    res.status(200).json({
      success: true,
      message: 'student create successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};

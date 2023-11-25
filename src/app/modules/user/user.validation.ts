import { z } from 'zod'

const userSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be String',
    })
    .max(20, { message: 'password can not be more then 20 character' })
    .optional(),
})

export const UserValidation = {
  userSchema,
}

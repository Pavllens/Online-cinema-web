import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Требуется ввести email!',
					pattern: {
						value: validEmail,
						message: 'Пожалуйста введите email',
					},
				})}
				placeholder="E-mail"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Требуется ввести пароль!',
								minLength: {
									value: 6,
									message: 'Минимальная длина пароля 6 символов!',
								},
						  }
						: {}
				)}
				placeholder="Пароль"
				type="password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields

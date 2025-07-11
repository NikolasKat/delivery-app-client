import React, { FC } from 'react'
import { Control } from 'react-hook-form'

import Field from '@/components/ui/field/Field'

import { IAuthFormData } from '@/types/auth.interface'

import { validEmail } from './email.regex'

interface IAuthFields {
	control: Control<IAuthFormData>
}

export const AuthFields: FC<IAuthFields> = ({ control }) => {
	return (
		<>
			<Field<IAuthFormData>
				control={control}
				name='email'
				placeholder='Enter email'
				rules={{
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				}}
				keyboardType='email-address'
			/>

			<Field<IAuthFormData>
				control={control}
				name='password'
				placeholder='Enter password'
				rules={{
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Password shouldn`t be shorter than 6 characters'
					},
					maxLength: {
						value: 15,
						message: 'Password shouldn`t be longer than 15 characters'
					}
				}}
			/>
		</>
	)
}

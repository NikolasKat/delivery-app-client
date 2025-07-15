import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import Loading from '@/components/ui/Loading'
import Button from '@/components/ui/button/Button'

import { IAuthFormData } from '@/types/auth.interface'

import { AuthFields } from './AuthFields'
import { useAuthMutation } from './useAuthMutation'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { isLoading, loginSync, registerSync } = useAuthMutation(reset)

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		if (isReg) registerSync(data)
		else loginSync(data)
	}

	return (
		<View className='mx-2 items-center justify-center h-full'>
			<View className='w-9/12'>
				<Text className='text-center text-black text-3xl font-medium mb-8'>
					{isReg ? 'Sign up' : 'Login'}
				</Text>
				{isLoading ? (
					<Loading />
				) : (
					<>
						<AuthFields control={control} />
						<Button onPress={handleSubmit(onSubmit)}>
							{isReg ? 'Sign up' : 'Login'}
						</Button>

						<Pressable onPress={() => setIsReg(!isReg)}>
							<Text className='text-center text-black text-base mt-6'>
								{isReg
									? 'Already have an account?'
									: 'Don`t have an account?'}
								<Text className='text-[#47AA52]'>
									{isReg ? 'Login' : 'Sign up'}
								</Text>
							</Text>
						</Pressable>
					</>
				)}
			</View>
		</View>
	)
}

export default Auth

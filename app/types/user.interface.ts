import { IProduct } from './product.interface'

export interface IUser {
	id: string
	email: string
	name: string
	password: string
	avatarPath: string
	favorites: IProduct[]
}

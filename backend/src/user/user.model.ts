import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
// eslint-disable-next-line
export interface UserModel extends Base {}
// eslint-disable-next-line
export class UserModel extends TimeStamps {
	@prop({ unique: true })
	email: string

	@prop()
	password: string

	@prop({ default: false })
	isAdmin?: boolean

	@prop({ default: [] })
	favorites?: []
}

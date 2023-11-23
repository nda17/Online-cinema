import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

// eslint-disable-next-line
export interface GenreModel extends Base {}
// eslint-disable-next-line
export class GenreModel extends TimeStamps {
	@prop()
	name: string

	@prop({ unique: true })
	slug: string

	@prop()
	description: string

	@prop()
	icon: string
}

import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
// eslint-disable-next-line
export interface ActorModel extends Base {}
// eslint-disable-next-line
export class ActorModel extends TimeStamps {
	@prop()
	name: string

	@prop({ unique: true })
	slug: string

	@prop()
	photo: string
}

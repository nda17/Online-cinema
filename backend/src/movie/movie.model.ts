import { Ref, prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { ActorModel } from 'src/actor/actor.model'
import { GenreModel } from 'src/genre/genre.model'
// eslint-disable-next-line
export interface MovieModel extends Base {}

export class Parameters {
	@prop()
	year: number

	@prop()
	duration: number

	@prop()
	country: string
}

// eslint-disable-next-line
export class MovieModel extends TimeStamps {
	@prop()
	poster: string

	@prop()
	bigPoster: string

	@prop()
	title: string

	@prop({ unique: true })
	slug: string

	@prop()
	parameters?: Parameters

	@prop({ default: 4.0 })
	rating?: number

	@prop()
	videoUrl: string

	@prop({ default: 0 })
	countOpened?: number

	@prop({ ref: () => GenreModel })
	genres: Ref<GenreModel>[]

	@prop({ ref: () => ActorModel })
	actors: Ref<ActorModel>[]
}

import { Injectable } from '@nestjs/common'
import { path } from 'app-root-path'
import { ensureDir, writeFile } from 'fs-extra'
import { IFileResponse } from './interfaces/file.interface'

@Injectable()
export class FileService {
	async saveFiles(
		files: Express.Multer.File[],
		folder: string = 'default'
	): Promise<IFileResponse[]> {
		const uploadFolder = `${path}/uploads/${folder}`
		await ensureDir(uploadFolder)

		const res: IFileResponse[] = await Promise.all(
			files.map(async file => {
				await writeFile(`${uploadFolder}/${file.originalname}`, file.buffer)

				return {
					url: `/uploads/${folder}/${file.originalname}`,
					name: file.originalname
				}
			})
		)

		return res
	}
}

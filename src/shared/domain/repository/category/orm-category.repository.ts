import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CategoryEntity } from '../../entity';
import { IOrmCategoryRepository } from './orm-category.repository.iterface';
import { IGetCategoryRepositoryDto } from '../../dto/category-repository.dto';

@Injectable()
export class OrmCategoryRepository
    extends Repository<CategoryEntity>
    implements IOrmCategoryRepository
{
    constructor(dataSource: DataSource) {
        super(CategoryEntity, dataSource.createEntityManager());
    }

    async getAllCategories(): Promise<IGetCategoryRepositoryDto[]> {
        return await this.find();
    }

    async getCategory(categoryId: string): Promise<IGetCategoryRepositoryDto> {
        return await this.findOneBy({
            categoryId,
        });
    }

    async saveCategory(
        newCategory: IGetCategoryRepositoryDto,
    ): Promise<void> {
        await this.save(newCategory);
    }

    async updateCategory(
        categoryId: string,
        updatedCategory: IGetCategoryRepositoryDto,
    ): Promise<void> {
        await this.update(categoryId, updatedCategory);
    }

    async deleteCategory(categoryId: string): Promise<void> {
        await this.delete(categoryId);
    }
}

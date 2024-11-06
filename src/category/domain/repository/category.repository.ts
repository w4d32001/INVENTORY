import { Inject } from "@nestjs/common";
import { ICategoryRepositoryModel } from "../models/category-repository.model";
import { ICategoryResponseModelOmit, ICrudCategoryRepository } from "./category.interface";
import { OrmCategoryRepository } from "src/shared/domain/repository/category/orm-category.repository";
import { IOrmCategoryRepository } from "src/shared/domain/repository/category/orm-category.repository.iterface";
import { v4 as uuidv4 } from 'uuid';



export class CategoryRepository implements ICrudCategoryRepository {

    constructor(
        @Inject(OrmCategoryRepository)
        private readonly ormCategoryRepository: IOrmCategoryRepository
    ){}

    async getAllCategories(): Promise<ICategoryResponseModelOmit[]> {
        const allCategories = await this.ormCategoryRepository.getAllCategories();
        return allCategories.map(({ updatedAt, createdAt, ...rest }) => rest); // Omit updatedAt and createdAt
    }

    async getCategory(categoryId: string): Promise<ICategoryResponseModelOmit> {
        const category = await this.ormCategoryRepository.getCategory(categoryId);
        return {
            categoryId: category.categoryId,
            name: category.name,
            description: category.description
        };
    }

    async saveCategory(newCategory: ICategoryRepositoryModel): Promise<void> {
        await this.ormCategoryRepository.saveCategory({
            categoryId: uuidv4(),
            name: newCategory.name,
            description: newCategory.description,
            updatedAt: new Date(),
            createdAt: new Date()
        });
    }

    async updateCategory(categoryId: string, updatedCategory: ICategoryRepositoryModel): Promise<void> {
        await this.ormCategoryRepository.updateCategory(categoryId, updatedCategory);
    }

    async deleteCategory(categoryId: string): Promise<void> {
        await this.ormCategoryRepository.deleteCategory(categoryId);
    }
}
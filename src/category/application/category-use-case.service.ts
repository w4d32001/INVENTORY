import { Inject } from '@nestjs/common';
import { CategoryDto } from '../infraestructure/dto/category.dto';
import { CategoryDtoOmit, IUseCaseCategoryService } from './category-use-case.interface';
import { CategoryRepository } from '../domain/repository/category.repository';
import { IReponse } from '../infraestructure/response/response.iterface';

export class CategoryUseCaseService implements IUseCaseCategoryService {
    constructor(
        @Inject(CategoryRepository)
        private readonly categoryRepository: CategoryRepository,
    ) {}

    async getAllCategories(): Promise<IReponse<CategoryDtoOmit[]>> {
        const categories = await this.categoryRepository.getAllCategories();
        return {
            message: 'Categorías obtenidas exitosamente',
            code: 200,
            data: categories,
            timestamp: new Date().toISOString(),
        };
    }

    async getCategory(categoryId: string): Promise<IReponse<CategoryDtoOmit>> {
        const category = await this.categoryRepository.getCategory(categoryId);
        return {
            message: 'Categoría obtenida exitosamente',
            code: 200,
            data: category,
            timestamp: new Date().toISOString(),
        };
    }

    async saveCategory(newCategory: CategoryDto): Promise<IReponse<CategoryDtoOmit>> {
        await this.categoryRepository.saveCategory(newCategory);
        return {
            message: 'Categoría guardada exitosamente',
            code: 201,
            timestamp: new Date().toISOString(),
        };
    }

    async updateCategory(categoryId: string, category: CategoryDto): Promise<IReponse<CategoryDtoOmit>> {
        await this.categoryRepository.updateCategory(categoryId, category);
        return {
            message: 'Categoría actualizada exitosamente',
            code: 200,
            timestamp: new Date().toISOString(),
        };
    }

    async deleteCategory(categoryId: string): Promise<IReponse> {
        await this.categoryRepository.deleteCategory(categoryId);
        return {
            message: 'Categoría eliminada exitosamente',
            code: 200,
            timestamp: new Date().toISOString(),
        };
    }
}

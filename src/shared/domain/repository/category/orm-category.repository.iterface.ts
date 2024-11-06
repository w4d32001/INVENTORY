import { IGetCategoryRepositoryDto } from '../../dto/category-repository.dto';

export interface IOrmCategoryRepository {
    getAllCategories(): Promise<IGetCategoryRepositoryDto[]>;
    getCategory(categoryId: string): Promise<IGetCategoryRepositoryDto>;
    saveCategory(
        newCategory: IGetCategoryRepositoryDto,
    ): Promise<void>;
    updateCategory(
        categoryId: string,
        updatedCategory: IGetCategoryRepositoryDto,
    ): Promise<void>;
    deleteCategory(categoryId: string): Promise<void>;
}

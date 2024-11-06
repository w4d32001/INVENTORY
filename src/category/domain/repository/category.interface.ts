import { ICategoryRepositoryModel } from '../models/category-repository.model';

export type ICategoryResponseModelOmit = Omit<ICategoryRepositoryModel, 'updatedAt' | 'createdAt'>;
export interface ICrudCategoryRepository {
    getAllCategories(): Promise<ICategoryResponseModelOmit[]>;
    getCategory(categoryId: string): Promise<ICategoryResponseModelOmit>;
    saveCategory(newCategory: ICategoryRepositoryModel): Promise<void>;
    updateCategory(
        categoryId: string,
        updatedCategory: ICategoryRepositoryModel,
    ): Promise<void>;
    deleteCategory(categoryId: string): Promise<void>;
}

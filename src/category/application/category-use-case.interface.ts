import { CategoryDto } from "../infraestructure/dto/category.dto";
import { IReponse } from "../infraestructure/response/response.iterface";

export type CategoryDtoOmit = Omit<CategoryDto, 'updatedAt' | 'createdAt'>;

export interface IUseCaseCategoryService {
    getAllCategories(): Promise<IReponse<CategoryDtoOmit[]>>;
    getCategory(CategoryId: string): Promise<IReponse<CategoryDtoOmit>>;
    saveCategory(newCategory: CategoryDto): Promise<IReponse<CategoryDtoOmit>>;
    updateCategory(categoryId: string, category: CategoryDto): Promise<IReponse<CategoryDtoOmit>>;
    deleteCategory(categoryId: string): Promise<IReponse<CategoryDtoOmit>>
}


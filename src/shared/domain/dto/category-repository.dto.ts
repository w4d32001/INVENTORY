export interface ICategoryRepositoryDto {
    name: string;
    description: string;
}

export interface IGetCategoryRepositoryDto extends ICategoryRepositoryDto {
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
}
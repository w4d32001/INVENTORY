export interface ICategoryRepositoryModel {
    categoryId: string;
    name: string
    description: string;
    updatedAt: Date;
    createdAt: Date;
}

export type ICategoryResponseModelOmit = Omit<ICategoryRepositoryModel, 'updatedAt' | 'createdAt'>;

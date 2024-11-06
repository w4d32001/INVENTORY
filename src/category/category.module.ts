import { Module } from "@nestjs/common";
import { CategoryController } from "./infraestructure/category.controller";
import { CategoryUseCaseService } from "./application/category-use-case.service";
import { CategoryRepository } from "./domain/repository/category.repository";
import { OrmCategoryRepository } from "src/shared/domain/repository/category/orm-category.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "src/shared/domain/entity";

@Module({
    imports: [TypeOrmModule.forFeature([CategoryEntity])],
    controllers: [CategoryController],
    providers: [CategoryUseCaseService, CategoryRepository, OrmCategoryRepository],
    exports: [],
})
export class CategoryModule {}
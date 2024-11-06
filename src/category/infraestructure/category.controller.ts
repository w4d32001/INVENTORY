import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { CategoryUseCaseService } from "../application/category-use-case.service";
import { IUseCaseCategoryService } from "../application/category-use-case.interface";
import { CategoryDto } from "./dto/category.dto";
import { IReponse } from "./response/response.iterface";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("category")
@Controller("category")
export class CategoryController {
    constructor(
        @Inject(CategoryUseCaseService)
        private readonly _categoryService: IUseCaseCategoryService
    ){}

    @ApiOperation({ summary: "all categories" })
    @Get()
    async getCategories(){
        return await this._categoryService.getAllCategories();
    }

    @ApiOperation({ summary: "one category" })
    @Get(':id')
    async getCategory(@Param('id') id: string){
        return await this._categoryService.getCategory(id);
    }

    @ApiOperation({ summary: "create category" })
    @Post()
    async saveCategory(@Body() category: CategoryDto ){
        return await this._categoryService.saveCategory(category)
    }

    @ApiOperation({ summary: "update category" })
    @Put(':id')
    async updateCategory(@Param('id') id: string, @Body() category: CategoryDto){
        return await this._categoryService.updateCategory(id, category);
    }

    @ApiOperation({ summary: "delete category" })
    @Delete(':id')
    async deleteCategory(@Param('id') id:string){
        return await this._categoryService.deleteCategory(id);
    }
}
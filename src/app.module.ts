import { Module } from "@nestjs/common";
import { CONFIG_DATABASE } from "./shared/infraestructure/config-database";
import { CategoryModule } from "./category/category.module";

@Module({
    imports: [CONFIG_DATABASE(), CategoryModule],
    controllers: [],
    providers: []
})
export class AppModule {}
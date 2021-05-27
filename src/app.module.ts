import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [MembersModule, UsersModule, PostsModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

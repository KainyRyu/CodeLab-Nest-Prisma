import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ArticleModule } from './articles/articles.module';
import { TagsModule } from './tags/tags.module';
import { BooklistsModule } from './booklists/booklists.module';

@Module({
  imports: [
    MembersModule,
    UsersModule,
    PostsModule,
    ArticleModule,
    TagsModule,
    BooklistsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

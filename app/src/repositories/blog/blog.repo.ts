import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import BlogService from '../../services/blog/blog.svc';

export default class BlogRepository extends BaseRepository {
	constructor(private blogService: BlogService) {
        super();
    }
	posts: Array<any>;
	getPosts(): async.IThenable<Array<models.IPost>> {
		// var post = {
		// 	title: strtitle,
		// 	author: strauthor,
		// 	content: strcontent
		// };
		// this.posts.push(post);
		return this.blogService.getPosts();
	};
}

register.injectable('blog-repo', BlogRepository, [BlogService]);

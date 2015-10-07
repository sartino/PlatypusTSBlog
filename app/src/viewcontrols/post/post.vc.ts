import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';
import BlogRepository from '../../repositories/blog/blog.repo';

export default class PostViewControl extends BaseViewControl {
    templateString: string = require('./post.vc.html');

    constructor(private blogRepo: BlogRepository) {
        super();
    }

    context: any = {
        title: <string> '',
        author: <string> 'Author',
        content: <string> 'Blog Content'
    };

    post(): void {
        console.log(this.context.title + " " + this.context.author + " " + this.context.content);
        var post = {
            title: this.context.title,
            author: this.context.author,
            content: this.context.content
        };

        this.blogRepo.Postblog(post);
        this.navigator.navigate(HomeViewControl);

    }
}

register.viewControl('post-vc', PostViewControl, [BlogRepository]);

import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostViewControl from '../post/post.vc';
import BlogRepository from '../../repositories/blog/blog.repo'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    
    constructor(private blogRepo: BlogRepository) {
        super();
    }

navigatedTo(): void {
    this.blogRepo.getPosts().then((posts) => {
        this.context.posts = posts;
    });
}

    context: any = {
        posts: []
    };
    
    createpost(): void {
        this.navigator.navigate(PostViewControl);
    }
}

register.viewControl('home-vc', HomeViewControl, [BlogRepository]);

import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostViewControl from '../post/post.vc';
import BlogRepository from '../../repositories/blog/blog.repo'

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    
//         context: contexts.IHome = {
//     products: <Array<models.IPost>>[]
// };
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


/// <reference path='../../references.d.ts' />

// import {register, ui} from 'platypus';
// import PostsRepository from '../../repositories/posts/posts.repository';

// class PostsViewControl extends ui.ViewControl {
//     templateString: string = require('./posts.viewcontrol.html');

//     context = {
//         posts: <Array<models.IPost>>undefined
//     };

//     constructor(private repository: PostsRepository) {
//         super();
//     }
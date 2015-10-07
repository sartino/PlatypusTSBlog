import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc';

export default class PostViewControl extends BaseViewControl {
    templateString: string = require('./post.vc.html');

    context: any = {};
    
    post(): void {
        this.navigator.navigate(HomeViewControl);
    }
}

register.viewControl('post-vc', PostViewControl);

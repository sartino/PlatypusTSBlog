import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class BlogService extends BaseService {

    getPosts(): async.IThenable<Array<models.IPost>> {
        return this.http.json<Array<any>>({
            method: 'GET',
            headers: {
                "X-Parse-Application-Id": "6rZg6mtybKd1tbGtxIRJJj3D1haFGSa0ldA79buN",
                "X-Parse-REST-API-Key": "qTU8XwEM8kF3giEdtCc2dbNz6QW2aiVMQaiDuN2l",
                "Content-Type": "application/json"
            },
            url: this.host
        }).then((success) => {
            console.log(success);
            var res: any = success;
            return <Array<models.IPost>>res.response.results;
        });


    }
    // getPosts(): async.IThenable<Array<models.IPost>> {
    //     return this.http.json<Array<any>>({
    //         method: 'POST',
    //         headers: {
    //             "X-Parse-Application-Id": "6rZg6mtybKd1tbGtxIRJJj3D1haFGSa0ldA79buN",
    //             "X-Parse-REST-API-Key": "qTU8XwEM8kF3giEdtCc2dbNz6QW2aiVMQaiDuN2l",
    //             "Content-Type": "application/json"
    //         },
    //         url: this.host
    //     }).then((success) => {
    //         console.log(success);
    //         var res: any = success;
    //         return <Array<models.IPost>>res.response.results;
    //     });

        // placeOrder(order: models.IOrder): async.IThenable<boolean> {
        //     order.userid = this.userRepository.userid;
        //     return this.http.json<models.IResponse>({
        //         method: 'POST',
        //         url: this.host + '/orders/create',
        //         data: order
        //     }).then(
        //         (success) => {
        //             return true;
        //         },
        //         (error: async.AjaxError): any => {
        //             throw error.response.message;
        //         }
        //     );
        // }

    }

    register.injectable('blog-svc', BlogService);



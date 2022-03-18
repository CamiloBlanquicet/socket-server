import expres from 'express';
import { SERVER_PORT } from '../global/enviroment';

export default class server{

    public app: expres.Application; 
    public port : number;

    constructor(){
        this.app = expres();
        this.port = SERVER_PORT;

    }

    start(callback : any ){
        this.app.listen(this.port, callback);
    }

}
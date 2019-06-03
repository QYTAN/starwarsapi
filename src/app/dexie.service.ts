import { Injectable, EventEmitter } from '@angular/core';
import Dexie from  'dexie';
import { Comments } from './model';


@Injectable()
export class DexieService{
    
    onNewComment = new EventEmitter<Comments>();

    contactDB: Dexie;

    constructor(){
        this.contactDB = new Dexie('contact');
        this.contactDB.version(1).stores({
            comments:'comment'
        })
    }

    //returns a type promise
    addComment(comment: Comments): Promise<any>{
        return(
            this.contactDB.table('comments').put(comment)
                .then((result) =>{
                    //putting comment into event emmiter so that it can be passed to subscribe  
                    this.onNewComment.next(comment);
                    return (result);
                })
            )
    }

    getComment(): Promise<any>{
        return(
            this.contactDB.table('comments').toArray()
        )
    }
}
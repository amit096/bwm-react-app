
import { camelCase } from "camel-case";

let instance = null;
export class Cacher{
   constructor(){
    if(!instance){
        instance=this; // making the class singletone
    }
   }
    cache = {};

    isValuedCached(key){
      return this.getCachedValue(key);
    }

    cacheValue(key,value){
     this.cache[camelCase(key)]=value;
    }

    getCachedValue(key){
        return this.cache[camelCase(key)];
    }
}
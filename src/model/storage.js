/**
 * Created by zhouhangfeng on 2019/8/26.
 */
var storage = {
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
        return JSON.parse(localStorage.getItem(key));
    },
    remove(key){
         localStorage.removeItem(key)
    }
}
export default storage;
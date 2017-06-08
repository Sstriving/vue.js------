/**
 * Created by 81964 on 2017/6/1.
 */
/*注册表格组件*/
var tableComponent = Vue.extend({
    props: ['headData', 'dataInfo','currentPage','limitNum'],

    template: "#form-component"
});
Vue.component('my-form', tableComponent);
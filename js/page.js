/**
 * Created by 81964 on 2017/6/1.
 */
//    分页组件
var pageComponent = Vue.extend({
    props: ['totalPage', "currentPage"],
    template:"#page-component",
    computed: {
        indexs: function () {
            var left = 1;
            var right = this.totalPage;
            var ar = [];
            //点击时处理页码的显示
            if (this.totalPage >= 9) {
                if (this.currentPage > 4 && this.currentPage < this.totalPage -3 ) {
                    left = this.currentPage - 4;
                    right = this.currentPage + 3
                } else {
                    if (this.currentPage <= 4) {
                        left = 1;
                        right = 8
                    } else {
                        right = this.totalPage;
                        left = this.totalPage - 7
                    }
                }
            }
            //往数组里面填页码数
            while (left <= right) {
                ar.push(left);
                left++
            }
            //数据多时显示...号
            if (ar[0] > 1) {
                ar[0] = 1;
                ar[1] = -1;
            }
            if (ar[ar.length - 1] < this.totalPage) {
                ar[ar.length - 1] = this.totalPage;
                ar[ar.length - 2] = 0;
            }
            return ar
        }
    },
    methods: {
        /*点击页码*/
        numClick: function (data) {
            var num = document.getElementsByClassName("num-input")[0];
            if (data < 1) return;
            if (data != this.currentPage) {
                this.currentPage = data;
                /*派发事件，事件沿着父链冒泡*/
                this.$dispatch('num-click', data)
            }
            if(data==12){
                messageBox("warn","已经是最后一页啦！");
            }
            num.value = data;
        },
        //点击上一页
        upPage:function(data){
            if (data <= 1) return;
            this.numClick(data - 1);
        },
        //点击下一页
        downPage:function(data){
            if (data >= this.totalPage ) return;
            this.numClick(data + 1);
        },
        jump:function(){
            //获取输入框的数字
            var num = document.getElementsByClassName("num-input")[0];
            if(num.value<=this.totalPage&&num.value>=1){
                this.numClick(Number(num.value));
            }else{
                num.value=this.currentPage;
                messageBox("error","输入页码已经超过总页码！");
            }
        }
    }
});
Vue.component('my-page',pageComponent);
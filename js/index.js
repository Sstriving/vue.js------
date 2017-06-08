/**
 * Created by 81964 on 2017/6/1.
 */
/*表格组件*/
var num = 0;
layoutRespose();
var app = new Vue({
    el: "#app",
    ready: function () {
        /*请求数据*/
        this.$http.post("data/test.json", function (data) {
            this.$set("listInfo", data);
            /*计算总页数*/
            this.totalPage = Math.ceil(this.listInfo.length / this.limitNum);
            this.limitInfo = this.listInfo.slice(1, this.limitNum+1);
        })
    },
    data: {
//            当前页数
        currentPage: 1,
//            每页显示多少条
        limitNum: num,
//            总页数
        totalPage: "",
//            每页显示数据
        limitInfo: [],
//            总数据
        listInfo: []
    },
    methods: {
        listen: function (data) {
            // 翻页会触发此事件
            //alert(this.limitNum)
            if(data==1){
                this.limitInfo = this.listInfo.slice(1, this.limitNum+1);
            }else{
                this.limitInfo = this.listInfo.slice((data-1)*this.limitNum+1,data*this.limitNum+1)
            }

        }
    }
});
//    函数能实现根据不同屏幕大小展示不同行数表格的功能
function layoutRespose() {
    /*取得浏览器的页面视口高*/
    var height = document.documentElement.clientHeight;
//        每页显示多少条
    num = Math.floor(height / 45 -2);
    messageBox("info","当前设备分辨率下每页可显示"+num+"行")
}
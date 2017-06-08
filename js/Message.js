/**
 * Created by 81964 on 2017/6/2.
 */
//消息提示函数
function messageBox(type,text){
    //创建提示框
    var box = document.createElement("div");
    box.id="box";
    //创建标题
    var boxType = document.createElement("p");
    boxType.id="boxType";
    if(type=="error"){
        boxType.style.cssText="background:red"
    }
    if(type=="warn"){
        boxType.style.cssText="background:orange"
    }
    if(type=="info"){
        boxType.style.cssText="background:white"
    }
    boxType.innerHTML="提示:"+type;
    //创建关闭按钮
    var btn = document.createElement("span");
    btn.innerHTML="X";
    btn.id="btn";

    //创建提示内容
    var boxText = document.createElement("p");
    boxText.id="boxText";
    boxText.innerHTML=text;
    //创建确定按钮
    var btnSure = document.createElement("button");
    btnSure.innerHTML="确定";
    btnSure.id="sure";
    btnSure.class="btn";
    //添加元素
    boxType.appendChild(btn);
    box.appendChild(boxType);
    box.appendChild(boxText);
    box.appendChild(btnSure);
    document.body.appendChild(box);
    //点击关闭按钮
    btn.onclick = function(){
        document.body.removeChild(box)
    };
    btnSure.onclick= function(){
        document.body.removeChild(box)
    }
}
function ConnectSever(obj) {
    // 创建对象
    var xml;
    if(window.XMLHttpRequest){
        xml = new XMLHttpRequest();
    }else{
        xml = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // open()、send();
    if(obj.type == "get"){
        xml.open("GET","Sever.php?product="+obj.data,true);
        xml.send();
    }else{
        xml.open("POST","Sever.php",true);
        xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xml.send(obj.data);
    }
    // 监听
    xml.onreadystatechange = function () {
        if(xml.readyState===4){
            if(xml.status>=200 && xml.status<300 || xml.status===304){
                obj.success(xml);
            }else{
                obj.error(xml);
            }
        }
    };
    
    
}
	var div = document.createElement("div");
	var span1 = document.createElement("span");
    	var span2 = document.createElement("span");
	span1.className="timeDate";
    	span2.className="times";
	div.appendChild(span1);
	div.appendChild(span2);
	var style = document.createAttribute("style");
	div.setAttributeNode(style);
	div.style.fontSize=14pt;
    	div.style.height=30px;
   	 div.style.lineHeight=30px;
   	 div.style.height=30px;
   	 div.style.fontWeight=bold;
   	 div.style.textAlign=center;
	document.getElementsByTagName("body").item(0).appendChild(div);    
   	 var now = new Date();
    	function createtime(){
        var grt= new Date("10/01/2021 00:00:00");
        now.setTime(now.getTime()+250);
        days = (now - grt ) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if(String(hnum).length ==1 ){hnum = "0" + hnum;}
        minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if(String(mnum).length ==1 ){mnum = "0" + mnum;}
        seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if(String(snum).length ==1 ){snum = "0" + snum;}
   document.getElementById("timeDate").innerHTML = "风雨兼程，小站已稳定运行"+dnum+"天";
        document.getElementById("times").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒";
    }
    setInterval("createtime()",250); 

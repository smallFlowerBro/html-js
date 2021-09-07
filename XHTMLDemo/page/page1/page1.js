	const getMore =function(){
							let preFreshHeight=0;
							let timeoutInt; 
							setTimeout(function(){
								if(timeoutInt!=undefined){
									window.clearTimeout(timeoutInt);
								}
								timeoutInt = setTimeout(function(){
									if(getScrollHeight()==(getDocumentTop()+getWindowHeight()+preFreshHeight)){
										event();
									}
								},150)
							},100)
				}
				//（浏览器窗口上边界内容高度）
			　　const getDocumentTop=function() {
			　　　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
			　　　　if (document.body) {
			　　　　　　bodyScrollTop = document.body.scrollTop;
			　　　　}
			　　　　if (document.documentElement) {
			　　　　　　documentScrollTop = document.documentElement.scrollTop;
			　　　　}
			　　　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
			　　　　console.log("scrollTop:"+scrollTop);
			　　　　return Math.round(scrollTop);
			　　}
				/*可视窗口高度（屏幕可以看见的高度）*/
			　　const getWindowHeight=function() {
			　　　　var windowHeight = 0;
			　　　　if (document.compatMode == "CSS1Compat") {
			　　　　　　windowHeight = document.documentElement.clientHeight;
			　　　　} else {
			　　　　　　windowHeight = document.body.clientHeight;
			　　　　}
			　　　　console.log("windowHeight:"+windowHeight);
			　　　　return Math.round(windowHeight) ;
			　　}
				/*获取滚动条高度*/
				const getScrollHeight=function(){
					let scrollHeight=0,bodyScrollHeight=0,documentScrollHeight=0;
					 if(document.body){
						bodyScrollHeight = document.body.scroll;
					 }
					 if(document.documentElement){
						 documentScrollHeight = document.documentElement.scrollHeight;
					 }
					 scrollHeight=(bodyScrollHeight-documentScrollHeight>0)?bodyScrollHeight:documentScrollHeight;
					 console.log("scrollheight",scrollHeight);
					 return Math.round(scrollHeight);
				}
				/*事件*/
				const event = function(){
					let new_node= document.createElement("div");
					new_node.style.height="100px"
					document.body.appendChild(new_node);
				}
				
				window.onscroll = function(){
					let preFreshHeight=0;
					let timeoutInt; 
					setTimeout(function(){
						if(timeoutInt!=undefined){
							window.clearTimeout(timeoutInt);
						}
						timeoutInt = setTimeout(function(){
							if(getScrollHeight()==(getDocumentTop()+getWindowHeight()+preFreshHeight)){
								event();
							}
						},150)
					},100)
				}
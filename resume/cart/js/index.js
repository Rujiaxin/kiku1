$(function () {

    /*初始化fullpage组件*/
    /*1.设置每一个屏幕的背景颜色*/
    /*2.设置屏幕内容的对齐方式  默认是垂直居中的  改成顶部对齐*/
    /*3.设置导航 设置指示器 点容器*/
    /*4.监听进入某一屏的时候 回调*/
    $('.fullpage').fullpage({
        /*配置参数*/
        
        verticalCentered: false,
       
        loopBottom: true,
        navigationTooltips: ["封面","我的简介","工作技能","我的梦想"],
        anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage'],
        menu: '#myMenu',
        afterLoad:function(anchorLink,index){
           if(index==1){

            $('.nav').css("display","none");
           }else {
            $('.nav').css("display","block");
                
           }
          
        }
})

 
   //第一页
   var index=0;

     var time = setInterval(function() {

        index++;
             
            
            $('.box').css("transform","rotateY("+(-index*90)+"deg)");
           
     
  
    
        }, 3000);


var flag=true;
            $('.arrow a').click(function() {
                if (flag) {
                    flag=false;
                     $('.nav').stop().animate({right:0}, 300)
               $('.arrow a span').removeClass('fa fa-arrow-left').addClass('fa fa-arrow-right');
                 return;
                }
               $('.nav').stop().animate({right:-160}, 300)
                $('.arrow a span').removeClass('fa fa-arrow-right').addClass('fa fa-arrow-left');
                flag=true;
               //flag=true; 
            });


            $('.ap_box .runbox_up').mouseenter(function() {
             
                $(this).animate({}, function(){
                    $(this).css({
                        transform: 'rotateY(180deg)',
                    });
                })
                    
                    
             

            });
             $('.ap_box .runbox_up').mouseleave(function() {
                
              $(this).animate({}, function(){
                    $(this).css({
                        transform: 'rotateY(0deg)',
                    });
                })
                    
                
                
            });
$('[data-toggle="tooltip"]').tooltip()
});
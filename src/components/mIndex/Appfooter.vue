<template>
    <div class="m-app-footer">
       <div class="m-title"><a href="/AboutUs?status=1">关于恩启</a></div>
        <div class="m-link">
            <a href="/AboutUs?status=2"><span>IDEA理念</span></a>
            <a href="/AboutUs?status=4"><span>发展历程</span></a>
            <a href="/AboutUs?status=5"><span>公司事件</span></a>
            <a href="/AboutUs?status=6"><span>责任与公益</span></a>
        </div>
        <div class="m-link">
            <a href="/AboutUs?status=0"><span>合作伙伴</span></a>
            <a href="/AboutUs?status=3"><span>企业荣誉</span></a>
            <a href="/Contact?name=sunhe"><span>联系我们</span></a>
        </div>
        <div class="m-title"><a href="/Contact?name=sunhe">联系我们</a></div>
        <div class="m-link">
            <a href="/Site"><span>直营连锁</span></a>
            <a href="/Contact?name=sunhe"><span>中心地址</span></a>
            <a href="/Partner"><span>招聘信息</span></a>
        </div>
        <div class="m-title"><a href="/Product">相关产品</a></div>
        <div class="m-link2">
            <a href="http://www.ingclass.org/"><span style="padding:13px 0 0 7px">恩启云课堂</span></a>
            <a href="/Product"><span style="padding:13px 0 0 38px">恩启特教平台</span></a>
            <a href="http://home.vbmapp.cn/webstage/common/login/index.do?redirectUrl=http://www.vbmapp.cn/"><span style="padding:13px 0 0 38px">VB-MAPP评估助手</span></a>
        </div>
        <div class="m-link2">
            <a href="http://www.ingbbs.com/"><span style="padding:13px 0 0 7px">恩启社区</span></a>
            <a href="/Product"><span style="padding:13px 0 0 50px">IDEA在家</span></a>
            <a href="/Product"><span style="padding:13px 0 0 59px">OpenK</span></a>
        </div>
        <div class="m-title"><router-link to=""></router-link></div>
        <div class="m-relation">
            <span>恩启特教平台公众号</span>
            <img src="../../../public/images/erweima.png" alt="">
        </div>
        <div class="m-icp">
            版权所有：北京正在关怀科技有限公司 京ICP备14040965号-1
        </div>
    </div>
</template>

<script>
    export default {
        name: "Appfooter.vue"
    }
</script>

<style lang="scss">
.m-app-footer{
    width: 100%;
    background: #2BB7B3;
}
.m-title{
        width: 340px;
        margin: 0 auto;
        border-bottom: 0.5px solid #fff;
        padding: 22px 0 12px 7px;
       a{
           color: #FFFFFF;
           font-size: 12px;
           font-weight: bold;
       }
    }
.m-link{
    width: 340px;
    display: flex;
    margin: 0 auto;
    span{
       font-size: 12px;
        color: #F0F2F2;
        display: block;
        padding: 13px 10px 0 7px;
    }
}
.m-link2{
    width: 340px;
    display: flex;
    margin: 0 auto;
    a{
        span{
            font-size: 12px;
            color: #F0F2F2;
            display: block;
        }
    }
}
.m-relation{
    width: 100%;
    text-align: center;
    color: #fff;
    span{
        display: block;
        padding: 20px 0 12px 0;
        font-size: 12px;
        font-weight: 500;
    }
    img{
        display: block;
        margin: 0 auto;
        width: 134px;
        height: 134px;
        margin-bottom: 22px;
    }
}
.m-icp{
    width: 100%;
    height: 36px;
    background: #28AFAB;
    text-align: center;
    line-height: 36px;
    font-size: 12px;
    color: #fff;
}
</style>
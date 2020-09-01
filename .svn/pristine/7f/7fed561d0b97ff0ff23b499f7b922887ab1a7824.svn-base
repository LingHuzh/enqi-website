<template>
	<main>
		<Nav v-if="windowWidth>800"></Nav>
		<div class="contact" data-scroll>
			<div class="public_banner">
				<img src="../../../public/images/inlove.png" alt="">
			</div>
			<div class="box-content">
				<div class="contact-title">
					<span>北京正在关怀科技有限公司</span>
					<p>BeiJing INGcare</p>
				</div>
				<div class="contact-up">
					<div class="contact-up-left">
						<span>联系我们</span>
						<p>Contact Us</p>
					</div>
					<div class="contact-up-right" v-if="windowWidth>800">
						<span>公众号</span>
						<p>WeChat Official Accounts</p>
					</div>
				</div>
				<div class="contact-down">
					<div class="contact-down-left">
						<ul>
							<li style="background: #EC804D;">
								<img src="../../../public/images/map.png" alt="恩启/地址">
								<span style="padding-top: 33px">地址:</span>
								<p style="width: 95%;">中国·北京市朝阳区京沈路弘园5号</p>
							</li>
							<li style="background: #1BC4B7;margin-top: 28px;">
								<img src="../../../public/images/phone.png" alt="恩启/服务热线">
								<span>服务热线:</span>
								<p>400-606-2105</p>
							</li>
							<li style="background: #3B8FEE;margin-top: 28px;">
								<img src="../../../public/images/clock.png" alt="恩启/服务时间">
								<span>服务时间</span>
								<p>周一至周五: 9:00 - 18:00</p>
							</li>
						</ul>
					</div>
					<div class="contact-up m-contact-up" v-if="windowWidth<800">
						<div class="contact-up-right">
							<span>公众号</span>
							<p>WeChat Official Accounts</p>
						</div>
					</div>
					<div class="contact-down-right">
						<img src="../../../public/images/tejiao.png" alt="恩启特教平台微信公众号">
						<p>恩启特教平台微信公众号</p>
					</div>
				</div>
				<Map></Map>
			</div>
			<Footer v-if="windowWidth>800"></Footer>
			<Appfooter v-if="windowWidth<800"></Appfooter>
		</div>
	</main>
</template>

<script>
	import Nav from "../index/Nav.vue"
	import Map from "../index/Map.vue"
	import Footer from "../index/Footer.vue"
	import Appfooter from "../mIndex/Appfooter.vue"
    import {shows} from "../../js/scrollHtml.js"
	export default {
		name: '',
		data(){
			return{
				windowWidth:window.innerWidth
			}
		},
		components: {
			Nav,
			Map,
			Footer,
			Appfooter
		},
		mounted() {
			if(window.innerWidth>800){
				shows();
				this.aboutusScroll();
			}
		},
		methods:{
			aboutusScroll(){
				let url = location.href;
				let index = url.lastIndexOf("=");
				console.log(index)
				let subBack = url.substring(index + 1, url.length);
				if (subBack == 1) {
					setTimeout(()=>{
						document.documentElement.scrollTop = 1000	
					},500)
				}
			}
		}
	}
</script>

<style lang="scss">
	.contact {
		position: absolute;
		width: 100%;
		height: auto;
		background: #fff;
	}

	.contact-title {
		width: 100%;
		text-align: center;
		margin: 92px auto;

		span {
			font-size: 25px;
			color: #333333;
		}

		p {
			font-size: 16px;
			margin-top: 8px;
		}
	}

	.contact-up {
		width: 1060px;
		height: 60px;
		margin: 0 auto;
		display: flex;
	}

	.contact-down {
		width: 1060px;
		height: 398px;
		margin: 0 auto 100px;
		display: flex;
	}

	.contact-up-left {
		width: 425px;
		height: 60px;
	}

	.contact-down-left {
		width: 425px;
		height: 398px;

		ul {
			li {
				width: 425px;
				height: 114px;
				border-radius: 9px;
				color: #fff;
				font-size: 16px;

				img {
					display: block;
					width: 74px;
					height: 74px;
					margin: 20px;
					float: left;
				}

				span {
					display: inline-block;
					padding-top: 36px;
				}

				p {
					margin-top: 2px;
				}
			}
		}
	}
	.contact-down-left ul li:first-child span{
		padding-top: 25px;
	}
	.contact-down-right {
		width: 600px;
		height: 398px;
		margin-left: 3.5%;
		background: #FFD75C;
		border-radius: 9px;
		text-align: center;

		img {
			display: block;
			width: 238px;
			height: 238px;
			margin: 67px auto 0;
		}

		p {
			color: #333333;
			font-size: 15px;
			margin-top: 26px;
		}
	}

	.contact-up-right {
		width: 600px;
		height: 60px;
		margin-left: 3.5%;
	}

	.contact-up-left span,
	.contact-up-right span {
		color: #333333;
		font-size: 16px;
		font-weight: 700;
	}

	.contact-up-left p,
	.contact-up-right p {
		color: #333333;
		font-size: 13px;
		margin-top: 3px;
	}
	@media screen and (max-width:1366px){
		.contact-up,.contact-down{
			width: 85%;
		}
	}
	// 移动端
	@media screen and (max-width: 800px){
		.public_banner {
			margin-top: 0;
		}
		.product{
			position: relative;
		}
		.public_banner{
			width: 100%;
			height: 103px;
			min-width: inherit;
		}
		.contact-up,
		.contact-down{
			padding: 0 20px;
			box-sizing: border-box;
		}
		.contact-title span{
			font-size: 16px;
			color: #444;
		}
		.contact-title p{
			font-size: 14px;
			color: #444;
		}
		.contact-title{
			margin: 50px 0 32px 0;
		}
		.contact-down-left,
		.contact-down-right{
			width: 100%;
		}
		.contact-down{
			display: inline-block;
		}
		.contact-down-left ul li,
		.contact-up, .contact-down{
			width: 100%;
		}
		.contact-up-left span, .contact-up-right span{
			font-size: 16px;
			color: #444;
			font-weight: normal;
		}
		.contact-up-left p, .contact-up-right p{
			font-size: 14px;
			color: #444;
		}
		.contact-down-left ul li{
			height: 64px;
			border-radius: 6px;
			line-height: 64px;
			font-size: 14px;
			margin-top: 8px!important;
		}
		.contact-down-left ul li:first-child{
			margin-top: 15px!important;
		}
		.contact-down-left ul li img{
			width: 35px;
			height: 35px;
			margin: 15px 21px;
		}
		.contact-down-left ul li p{
			display: inline-block;
			width: auto!important;
		}
		.contact-down-left ul li span{
			padding-top: 0!important;
		}
		.contact-up,
		.contact-up-left,
		.contact-down-left,
		.contact-down-right,
		.contact-down,
		.contact-up-right{
			height: auto;
		}
		.contact-down-right{
			margin-left: 0;
			padding: 32px 0;
			border-radius: 6px;
		}
		.contact-down-right img{
			margin: 0;
			width: 136px;
			height: 136px;
			margin: 0 auto;
		}
		.contact-down-right p{
			color: #fff;
			font-size: 14px;
			margin-top: 12px;
		}
		.m-contact-up{
			margin: 42px 0 16px 0;
		}
		.contact-down{
			margin-bottom: 0;
		}
		.map{
			margin: 40px 0 62px 0;
		}
		.contact{
			position: relative;
		}
		.m-contact-up{
			padding: 0;
		}
		.contact-up-right{
			margin-left: 0;
		}
	}
</style>

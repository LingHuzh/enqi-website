<template>
	<main>
		<Nav v-if="windowWidth > 800"></Nav>
		<div class="train" data-scroll>
			<div class="public_banner" v-if="windowWidth > 800">
				<img src="../../../public/images/jiaoshipeixun.jpg" alt="">
			</div>
			<div class="m-public_banner" v-if="windowWidth < 800">
				<img src="../../../public/images/jiaoshipeixun.jpg" alt="">
			</div>
			<div class="train-label" v-if="windowWidth > 800">
				<div class="train-label-left">
					<span>教师</span>
					<ul>
						<li>
							<img src="../../../public/images/duu3.png" alt="">
							<p>利用碎片化时间</p>
						</li>
						<li>
							<img src="../../../public/images/duu3.png" alt="">
							<p>获得专业技术</p>
						</li>
						<li>
							<img src="../../../public/images/duu3.png" alt="">
							<p>考证获得证书</p>
						</li>
					</ul>
				</div>
				<div class="train-label-right">
					<span>机构</span>
					<ul>
						<li>
							<img src="../../../public/images/duu6.png" alt="">
							<p>提升品牌形象</p>
						</li>
						<li>
							<img src="../../../public/images/duu6.png" alt="">
							<p>提高专业竞争力</p>
						</li>
						<li>
							<img src="../../../public/images/duu6.png" alt="">
							<p>新教师培训</p>
						</li>
					</ul>
				</div>
			</div>

			<div class="ingclass-curriculum" v-if="windowWidth > 800">
				<ul>
					<li>
						<div class="ingclass-curriculum-title" style="background: #2BB7B3;">IDEA基础理论课程</div>
						<img src="../../../public/images/jichulilun.png" alt="">
						<div class="ingclass-curriculum-content" style="padding: 40px 23px;">恩启特教平台通过三年多的时间积累， 近二十期的新教师岗前培训的经验和素材； 由恩启讲师团队精心整理与讲授</div>
						<div class="ingclass-curriculum-link">
							<a href="http://www.ingclass.org/webstage/train/course_find_58.html" target="_blank" style="color: #2BB7B3;">￥198 &nbsp; 去学习</a>
							<img src="../../../public/images/lianjie3.png" alt="">
						</div>
					<!-- 	<div class="ingclass-curriculum-price" style="background: #2BB7B3;">
							<span>￥198</span>
						</div> -->
					</li>
					<li>
						<div class="ingclass-curriculum-title" style="background: #EA7D43;">VB-MAPP软件评估师课程</div>
						<img src="../../../public/images/ruanjian.png" alt="">
						<div class="ingclass-curriculum-content">VB-MAPP软件评估师课程，采用“浸入式”学习的方法，带领大家边看课程边操作。最大程度还原工作中的实际场景，共同领略VB-Mapp评估给我们带来的教学新启发。</div>
						<div class="ingclass-curriculum-link">
							<a href="http://www.ingclass.org/webstage/train/course_find_60.html" target="_blank" style="color: #EA7D43;">￥5380 &nbsp; 去学习</a>
							<img src="../../../public/images/rj.png" alt="">
						</div>
						<!-- <div class="ingclass-curriculum-price" style="background: #EA7D43;">
							<span>￥5380</span>
						</div> -->
					</li>
				</ul>
			</div>
<!--			移动端-->
			<div class="m-train" v-if="windowWidth < 800">
				<div class="m-train-centre">
					<span>教师</span>
					<ul>
						<li>
							<img src="../../../public/images/duu3.png" alt="">
							<p class="m-teacher-color">利用碎片化时间</p>
						</li>
						<li>
							<img src="../../../public/images/duu3.png" alt="">
							<p class="m-teacher-color">获得专业技术</p>
						</li>
						<li>
							<img src="../../../public/images/duu3.png" alt="">
							<p class="m-teacher-color">考证获得证书</p>
						</li>
					</ul>
				</div>
				<div class="m-train-down">
					<div class="ingclass-curriculum-title" style="background: #2BB7B3;">IDEA基础理论课程</div>
					<img src="../../../public/images/jichulilun.jpg" alt="">
					<div class="ingclass-curriculum-content">恩启特教平台通过三年多的时间积累， 近二十期的新教师岗前培训的经验和素材； 由恩启讲师团队精心整理与讲授</div>
					<div class="ingclass-curriculum-link">
						<a href="http://www.ingclass.org/webstage/train/course_find_58.html" target="_blank" style="color: #2BB7B3;">去学习</a>
						<img src="../../../public/images/lianjie3.png" alt="">
					</div>
					<div class="ingclass-curriculum-price" style="background: #2BB7B3;">
						<span>￥198</span>
					</div>
				</div>

				<div class="m-train-centre">
					<span>机构</span>
					<ul>
						<li>
							<img src="../../../public/images/duu6.png" alt="">
							<p class="m-organization-color">提升品牌形象</p>
						</li>
						<li>
							<img src="../../../public/images/duu6.png" alt="">
							<p class="m-organization-color">提高专业竞争力</p>
						</li>
						<li>
							<img src="../../../public/images/duu6.png" alt="">
							<p class="m-organization-color">新教师培训</p>
						</li>
					</ul>
				</div>
				<div class="m-train-down">
					<div class="ingclass-curriculum-title" style="background: #EA7D43;">VB-MAPP软件评估师课程</div>
					<img src="../../../public/images/ruanjian.jpg" alt="">
					<div class="ingclass-curriculum-content">VB-MAPP软件评估师课程，采用“浸入式”学习的方法，带领大家边看课程边操作。最大程度还原工作中的实际场景，共同领略VB-Mapp评估给我们带来的教学新启发。</div>
					<div class="ingclass-curriculum-link">
						<a href="http://www.ingclass.org/webstage/train/course_find_60.html" target="_blank" style="color: #EA7D43;">去学习</a>
						<img src="../../../public/images/rj.png" alt="">
					</div>
					<div class="ingclass-curriculum-price" style="background: #EA7D43;">
						<span>￥5380</span>
					</div>
				</div>
			</div>
			<div style="width:100%;height: 35px" v-if="windowWidth <800"> </div>
			<div class="home-site-title" style="margin-top: -119px;">
				<span class="home-site-left"></span>
				<div class="home-site-title-centre" @click="ingclass()">
					<i>访问恩启云课堂，学习更多内容</i>
					<img src="../../../public/images/dianji.png" alt="">
				</div>
				<span class="home-site-right"></span>
			</div>
			<div style="width:100%;height: 85px" v-if="windowWidth <800"> </div>
			<Appfooter v-if="windowWidth < 800"></Appfooter>
			<Footer v-if="windowWidth > 800"></Footer>
			<div class="page-height" v-if="windowWidth < 800"></div>
		</div>
	</main>
</template>

<script>
	import Nav from "../index/Nav.vue";
	import Footer from "../index/Footer.vue";
	import Appfooter from "../mIndex/Appfooter";
	import {
		shows
	} from "../../js/scrollHtml.js"
	export default {
		name: 'train',
		components: {
			Nav,
			Footer,
			Appfooter
		},
		data() {
			return {
				ingclassUrl: 'http://www.ingclass.org/',
				windowWidth:window.innerWidth
			}
		},
		mounted() {
			this.windowWidth > 800 ? shows() : '';
		},
		methods: {
			ingclass() {
				window.open(this.ingclassUrl);
			}
		}
	}
</script>

<style lang="scss">
	.home-site-title-centre {
		display: flex;
		align-items: center;
		justify-content: space-around;
		cursor: pointer;

		i {
			font-size: 16px;
			font-family: Microsoft YaHei;
			font-weight: 400;
			font-style: italic;
			text-decoration: underline;
			color: rgba(29, 191, 186, 1);
			font-style: inherit;
		}

		img {
			display: block;
			width: 38px;
			height: 28px;
			margin-left: -100px;
		}
	}


	.home-site-title {
		width: 1026px;
	}

	.home-site-left,
	.home-site-right {
		width: 31%;
	}

	.home-site-left {
		background: linear-gradient(to right, rgba(237, 245, 245, 0.5), rgba(66, 170, 165, 0.5));
	}

	.home-site-right {
		background: linear-gradient(to left, rgba(237, 245, 245, 0.5), rgba(66, 170, 165, 0.5));
	}

	.train {
		width: 100%;
		height: auto;
		position: absolute;
		background: #fff;
	}

	.train-label {
		width: 832px;
		display: flex;
		margin: 99px auto 40px;
		justify-content: space-between;
	}
	.m-train-centre{
		display: flex;
		margin: 58px auto 28px;
		span{
			display: inline-block;
			width: 100px;
			margin-left: 25%;
			font-size: 16px;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			line-height: 70px;
		}
		ul {
			width: 100%;

			li {
				display: flex;
				font-size: 14px;
				font-weight: 400;
				line-height: 27px;
				align-items: center;

				img {
					display: block;
					width: 14px;
					height: 12px;
					margin-right: 11px;
					margin-top: -3px;
				}
			}
		}
	}
	.train-label-left,
	.train-label-right {
		display: flex;
		width: 318px;

		span {
			display: inline-block;
			width: 100px;
			margin-left: 13%;
			font-size: 18px;
			font-family: Microsoft YaHei;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			line-height: 67px;
		}

		ul {
			width: 100%;

			li {
				display: flex;
				font-size: 16px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				line-height: 27px;
				align-items: center;

				img {
					display: block;
					width: 14px;
					height: 12px;
					margin-right: 17px;
				}
			}
		}
	}

	.train-label-left ul li {
		color: #2BB7B3
	}

	.train-label-right ul li {
		color: #EA7D43
	}

	.ingclass-curriculum {
		width: 832px;
		margin: 0 auto 105px;

		ul {
			width: 100%;
			display: flex;
			justify-content: space-between;

			li {
				width: 318px;
				height: 425px;
				box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
				border-radius: 20px 20px 20px 20px;
				position: relative;
				overflow: hidden;

				img {
					display: block;
					width: 318px;
					height: 186px;
					transition-duration: .8s;
				}
			}
		}
	}

	.ingclass-curriculum ul li:hover img {
		transform: scale(1.05);
		transition-duration: .8s;
		transition-timing-function: linear;
	}

	.ingclass-curriculum-title {
		width: 100%;
		height: 47px;
		text-align: center;
		color: #fff;
		font-size: 15px;
		font-weight: bold;
		line-height: 47px;
		border-radius: 20px 20px 0px 0px;
		letter-spacing: 1px;
	}

	.ingclass-curriculum-content {
		width: 289px;
		height: 140px;
		margin: 0 auto;
		padding: 25px 23px;
		font-size: 14px;
		font-weight: 400;
		color: #666666;
		line-height: 18px;
		border-bottom: 1px solid #EEEEEE;
	}

	.ingclass-curriculum-link {
		width: 100%;
		height: 53px;
		line-height: 55px;
		display: flex;
		align-items: center;
		justify-content: center;
		a {
			text-decoration: underline;
			display: block;
		}

		img {
			display: block;
			width: 17px !important;
			height: 17px !important;
			margin-left: 10px;
		}
	}

	.ingclass-curriculum-price {
		position: absolute;
		top: 49%;
		right: 3%;
		width: 100px;
		height: 46px;
		background: rgba(48, 127, 209, 1);
		box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);
		border-radius: 13px;
		color: rgba(255, 255, 255, 1);
		line-height: 46px;
		text-align: center;
		display: flex;
		justify-content: space-around;
		span {
			font-size: 16px;
			font-weight: bold;
			// margin-left: 15px;
		}

		i {
			font-size: 14px;
			font-weight: 400;
			margin-right: 15px;
		}
	}
	@media screen and (max-width: 800px){
		.m-train-down{
			width: 260px;
			box-shadow: 0 0 0.9375rem 0 rgba(0,0,0,.2);
			border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
			position: relative;
			overflow: hidden;
			margin: 0 auto;
			img{
				width: 100%;
				height: 152px;
			}
		}
		.ingclass-curriculum-title{
			height: 34px;
			line-height: 34px;
			font-size: 16px;
		}
		.ingclass-curriculum-content{
			width: 100%;
			padding: 44px 16px 20px;
			font-size: 12px;
			color: #444444;
			height: auto;
		}
		.ingclass-curriculum-price{
			top: 43%;
			width: 73px;
			height: 42px;
		}
		.m-teacher-color{
			color:#2BB7B3 ;
		}
		.m-organization-color{
			color: #EA7D43;
		}
		.ingclass-curriculum-link img{
			width: 14px !important;
			height: 14px !important;
		}
		.home-site-left, .home-site-right{
			width: 7%;
			font-size: 12px;
		}
		.home-site-title-centre img{
			width: 30px;
			height: 21px;
			margin-left: -1px;
		}
	}
</style>

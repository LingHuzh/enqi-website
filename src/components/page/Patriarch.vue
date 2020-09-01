<template>
	<main>
		<Nav v-if="windowWidth > 800"></Nav>
		<div class="patriarch" data-scroll>
			<div class="public_banner" v-if="windowWidth > 800">
				<img src="../../../public/images/jiazhangtongshike.jpg" alt="">
			</div>
			<div class="m-public_banner" v-if="windowWidth < 800">
				<img src="../../../public/images/jiazhangtongshike.jpg" alt="">
			</div>
			<!-- 课堂介绍 -->
			<div class="home-site-title home-site-title1" style="margin-top: 50px;" v-if="windowWidth > 800">
				<span class="home-site-left" :class="leftClass" style="width: 40%;"></span>
				<div class="home-site-title-centre">
					<p><span style="margin-top: 23px;font-weight: normal;" :class="topClass">课程介绍</span></p>
					<p class="active-p imgwidth"><img :class="topClass" src="../../../public/images/a1.png"
						 alt=""></p>
				</div>
				<span class="home-site-right" :class="rightClass" style="width: 40%;"></span>
			</div>
<!--			移动端-->
			<div class="m-page-title" v-if="windowWidth < 800">
				<p></p>
				<span>课程介绍</span>
				<p></p>
			</div>
			<div class="m-title-image" v-if="windowWidth < 800">
				<img src="../../../public/images/a1.png" alt="">
			</div>
			<div class="idea-course-introduce" style="margin-top: 30px;">
				《IDEA孤独症教育通识课》是恩启沉淀5年，集结BCBA-D、BCBA、BCaBA、言语治疗师、融合教育老师等，共同研发的家庭干预基础课程。从基础理论出发，配合大量的实操视频与干预案例，内容覆盖家庭干预规划、家庭干预误区、自然情景教学、问题行为、桌面教学、游戏、泛化、生活自
				理、社交、评估，以及家长、老师沟通指南等多个板块。融入生活情境，帮你轻松读懂老师，教明白孩子。
			</div>
			<!-- 视频 -->
			<div class="video-class">
				<img src="../../../public/images/play.png" alt="" v-show="myVideoImage" @click="playVideo()">
				<video id="speakVideo" controls="controls" > <!-- controls="controls" -->
					<source src="../../video/enqi.mp4"></source>
				</video>
				<div class="hide-video-box" @click="hidePlay()"></div>
			</div>
			<!-- 为什么要学习这门课程 -->
			<div class="home-site-title home-site-title2" style="margin-top: 80px;" v-if="windowWidth > 800">
				<span class="home-site-left" :class="leftClassTwo" style="width: 34%;"></span>
				<div class="home-site-title-centre">
					<p><span style="margin-top: 23px;font-weight: normal;" :class="topClassTwo">为什么要学习这门课程</span></p>
					<p class="active-p imgwidth" ><img :class="topClassTwo" src="../../../public/images/a2.png"
						 alt=""></p>
				</div>
				<span class="home-site-right" :class="rightClassTwo" style="width: 34%;"></span>
			</div>
			<!--			移动端-->
			<div class="m-page-title" v-if="windowWidth < 800">
				<p style="width: 70px"></p>
				<span>为什么要学习这门课程</span>
				<p style="width: 70px"></p>
			</div>
			<div class="m-title-image" v-if="windowWidth < 800">
				<img src="../../../public/images/a2.png" alt="">
			</div>
			<div class="about-Us-duty" v-if="windowWidth > 800">
				<img src="../../../public/images/le.png" alt="" style="margin-left: 50px;">
				<i>经过调研，我们发现大多数家长在给自闭症孩子做干预的时候，都会遇到这样几个难题：</i>
				<img src="../../../public/images/ri.png" alt="" style="margin-right: 50px;">
			</div>

			<div class="m-about-Us-duty" v-if="windowWidth < 800">
				<img src="../../../public/images/le.png" alt="" class="m-s1">
				<p>经过调研，我们发现大多数家长在给自闭症孩子</p>
				<p>做干预的时候，都会遇到这样几个难题：</p>
				<img src="../../../public/images/ri.png" alt="" class="m-s2">
			</div>
			<div class="statistics">
				<ul>
					<li>
						<i style="color: #3680EE;">1.没指导</i>
						<p>84%的家庭表示急需家庭 干预课程</p>
						<img src="../../../public/images/meizhidao.png" alt="">
					</li>
					<li>
						<i style="color: #EE8D36;">2.不系统</i>
						<p>63%的家庭表示缺乏系统指导 学到的知识用不起来</p>
						<img src="../../../public/images/buxitong.png" alt="">
					</li>
					<li>
						<i style="color: #14B3AE;">3.供需不平衡</i>
						<p>79%的家庭表示，机构课程难满足 家庭干预需要，希望机构能提供 额外的家长培训</p>
						<img src="../../../public/images/gongxu.png" alt="">
					</li>
					<li>
						<i style="color: #F5CC0F;">4.难沟通</i>
						<p>家长和机构难沟通，没办法 给孩子最全面的支持</p>
						<img src="../../../public/images/nan.png" alt="">
					</li>
				</ul>
			</div>
			<div class="about-Us-duty" style="background: #62A1EE;margin-top: 58px;" v-if="windowWidth > 800">
				<img src="../../../public/images/le.png" alt="" style="margin-left: 50px;">
				<span>因此，我们希望做一门人人都看得懂、学得会的系统家庭干预课程 ，帮助家长、老师、机构达成一致，解决家庭干预的难题</span>
				<img src="../../../public/images/ri.png" alt="" style="margin-right: 50px;">
			</div>

			<div class="m-about-Us-duty" style="background: #62A1EE" v-if="windowWidth < 800">
				<img src="../../../public/images/le.png" alt="" class="m-s1">
				<span>因此，我们希望做一门人人都看得懂、学得会的系统家庭干预课程 ，帮助家长、老师、机构达成一致，解决家庭干预的难题</span>
				<img src="../../../public/images/ri.png" alt="" class="m-s2">
			</div>

			<div class="circulation">
				<span v-if="windowWidth > 800">机构</span>
				<span v-if="windowWidth > 800">老师</span>
			</div>
			<!-- 你能得到什么 -->
			<div class="home-site-title home-site-title3" style="margin-top: 80px;" v-if="windowWidth > 800">
				<span class="home-site-left" :class="leftClassThree" style="width: 38%;"></span>
				<div class="home-site-title-centre">
					<p><span style="margin-top: 23px;font-weight: normal;" :class="topClassThree">你能得到什么</span></p>
					<p class="active-p imgwidth"><img :class="topClassThree" src="../../../public/images/a2.png"
						 alt=""></p>
				</div>
				<span class="home-site-right" :class="rightClassThree" style="width: 38%;"></span>
			</div>

			<div class="m-page-title" v-if="windowWidth < 800">
				<p style="width: 90px"></p>
				<span>你能得到什么</span>
				<p style="width: 90px"></p>
			</div>
			<div class="m-title-image" v-if="windowWidth < 800">
				<img src="../../../public/images/a2.png" alt="">
			</div>

			<div class="get-images" >
				<div><img src="../../../public/images/ooo1.jpg" alt=""><div class="smallTiele" style="color: #4F8EDC;"><span>102节</span><p>视频课程</p></div></div>
				<em class="m-class-centre" v-if="windowWidth < 800">
					<span style="color: #FB9336" class="m-font">102节视频课程，即学即用</span>
					<ul>
						<li>
							<p>1.</p>
							<span>3年细致打磨的恩启内部家培课程，帮你赢得在 干预起跑线</span>
						</li>
						<li>
							<p>2.</p>
							<span>从基础理论出发，配合视频讲解，迈出家庭干 预第一步</span>
						</li>
						<li>
							<p>3.</p>
							<span>3.掌握家庭干预的正确方法，学得会用得上</span>
						</li>
					</ul>
				</em>
				<div><img src="../../../public/images/ooo2.jpg" alt=""><div class="smallTiele" style="color: #42AAA5;"><span>50+个</span><p>实操视频</p></div></div>
				<em class="m-class-centre" v-if="windowWidth < 800">
					<span style="color: #42AAA5" class="m-font">50+个实操视频，真人示范</span>
					<ul>
						<li>
							<p>1.</p>
							<span>实操篇真人演示，将干预难题放入生活情境 中，帮你把家庭干预真正做起来</span>
						</li>
						<li>
							<p>2.</p>
							<span>独家课程作业，参与每日课程打卡巩固新知</span>
						</li>
					</ul>
				</em>
				<div><img src="../../../public/images/ooo3.jpg" alt=""><div class="smallTiele" style="color: #FB9130;"><span>每日</span><p>课程福利</p></div></div>
				<em class="m-class-centre" v-if="windowWidth < 800">
					<span style="color: #FB9336" class="m-font">每日课程福利，学习更轻松</span>
					<ul>
						<li>
							<p>1.</p>
							<span>加入专属课程学习群，和志同道合的家长共同进步</span>
						</li>
						<li>
							<p>2.</p>
							<span>分步指导教学，零基础也能做好家庭干预</span>
						</li>
						<li>
							<p>3.</p>
							<span>授课教师不定期直播、群内答疑，解决个性化家庭 干预难题</span>
						</li>
						<li>
							<p>4.</p>
							<span>学员笔记共享，互相学习学习更轻松</span>
						</li>
					</ul>
				</em>
				<div><img src="../../../public/images/ooo4.jpg" alt=""><div class="smallTiele" style="color: #F8B83D;"><span>证书</span><p>见证成长</p></div></div>
				<em class="m-class-centre" v-if="windowWidth < 800">
					<span style="color: #F8B83D" class="m-font">50+个实操视频，真人示范</span>
					<ul>
						<li>
							<p>1.</p>
							<span>阶段证书检验每一模块学习成果</span>
						</li>
						<li>
							<p>2.</p>
							<span>结课证书见证每个人努力与付出</span>
						</li>
					</ul>
				</em>
			</div>
			<div class="get-title" v-if="windowWidth > 800">
				<div>
					<span style="color:#4F8EDC ;">102节视频课程，即学即用</span>
					<p>1.3年细致打磨的恩启内部家培课程，帮你赢得在 干预起跑线</p>
					<p>2.从基础理论出发，配合视频讲解，迈出家庭干 预第一步</p>
					<p>3.掌握家庭干预的正确方法，学得会用得上</p>
				</div>
				<div>
					<span style="color: #42AAA5;">50+个实操视频，真人示范</span>
					<p>1.实操篇真人演示，将干预难题放入生活情境 中，帮你把家庭干预真正做起来</p>
					<p>2.分步指导教学，零基础也能做好家庭干预</p>
				</div>
				<div>
					<span style="color:#FB9336 ;">每日课程福利，学习更轻松</span>
					<p>1.加入专属课程学习群，和志同道合的家长共同进步</p>
					<p>2.独家课程作业，参与每日课程打卡巩固新知</p>
					<p>3.授课教师不定期直播、群内答疑，解决个性化家庭 干预难题</p>
					<p>4.学员笔记共享，互相学习学习更轻松</p>
				</div>
				<div>
					<span style="color:#F8B83D ;">102节视频课程，即学即用</span>
					<p>1.阶段证书检验每一模块学习成果 </p>
					<p>2.结课证书见证每个人努力与付出</p>
				</div>
			</div>

			<!-- 这些人都在学 -->
			<div class="home-site-title home-site-title4" style="margin-top: 80px;" v-if="windowWidth > 800">
				<span class="home-site-left" :class="leftClassFour" style="width: 36%;"></span>
				<div class="home-site-title-centre">
					<p><span style="margin-top: 23px;font-weight: normal;" :class="topClassFour">这些人都在学</span></p>
					<p class="active-p imgwidth"><img :class="topClassFour" src="../../../public/images/a2.png"
						 alt=""></p>
				</div>
				<span class="home-site-right" style="width: 36%;" :class="rightClassFour"></span>
			</div>



<!--			移动端-->
			<div class="m-code" v-if="windowWidth < 800">
				<img src="../../../public/images/erweim.png" alt="">
			</div>
			<div class="m-buy-title" v-if="windowWidth < 800">
				扫码购买课程,加入专属答疑群
			</div>

			<div class="m-page-title" v-if="windowWidth < 800">
				<p style="width: 90px"></p>
				<span>这些人在学什么</span>
				<p style="width: 90px"></p>
			</div>
			<div class="m-title-image" v-if="windowWidth < 800">
				<img src="../../../public/images/a2.png" alt="">
			</div>
<!--			PC端-->
			<div class="study" v-if="windowWidth > 800">
				<div class="study-left">
					<div class="study-left-content">
						<img src="../../../public/images/duu3.png" alt="">
						<p>首期课程上线以来，已有<font style="color: #3EC7BC;">13000+</font>家长和老师报名学习，学员覆盖全国</p>
					</div>
					<div class="study-left-content">
						<img src="../../../public/images/duu3.png" alt="">
						<p>各平台累计打卡突破<font style="color: #3EC7BC;">28000次</font>。首次阶段测评吸引超过<font style="color: #3EC7BC;">5000人</font>参与测试<font
							 style="color: #3EC7BC;">80.3%</font>的学员成绩合格获得阶段证书。</p>
					</div>
					<div class="study-left-content">
						<img src="../../../public/images/duu3.png" alt="">
						<p>来自<font style="color: #3EC7BC;">132个</font>机构的8000余名家长，在<font style="color: #3EC7BC;">500余个</font>学习群学习群共同学习。</p>
					</div>
					<div class="study-left-content">
						<img src="../../../public/images/duu3.png" alt="">
						<p>除了家庭干预主力军<font style="color: #DD7136;">“妈妈”</font>以外9.8%的家庭成员也参与到了学习中。</p>
					</div>
				</div>
				<div class="study-right"></div>
			</div>
<!--			移动端-->
			<div class="m-study" v-if="windowWidth < 800">
				<div class="m-statistics"></div>
				<div class="three-content">
					<img src="../../../public/images/duu3.png" alt="">
					<div>首期课程上线以来，已有<font style="color: #3EC7BC;">13000+</font>家长和老师报名学习，学员覆盖全国</div>
				</div>
				<div class="three-content">
					<img src="../../../public/images/duu3.png" alt="">
					<div>各平台累计打卡突破<font style="color: #3EC7BC;">28000次</font>。首次阶段测评吸引超过<font style="color: #3EC7BC;">5000人</font>参与测试<font style="color: #3EC7BC;">80.3%</font>的学员成绩合格获得阶段证书。</div>
				</div>
				<div class="three-content">
					<img src="../../../public/images/duu3.png" alt="">
					<div>来自<font style="color: #3EC7BC;">132个</font>机构的8000余名家长，在<font style="color: #3EC7BC;">500余个</font>学习群学习群共同学习。</div>
				</div>
				<div class="three-content">
					<img src="../../../public/images/duu3.png" alt="">
					<div>除了家庭干预主力军<font style="color: #DD7136;">“妈妈”</font>以外9.8%的家庭成员也参与到了学习中。</div>
				</div>
			</div>

			<div class="attend">
				<div>
					<img src="../../../public/images/s1.jpg" alt="">
					<p style="color:#4F8DDB">1.想做家庭干预但不知道如何做的家长</p>
				</div>
				<div>
					<img src="../../../public/images/s2.jpg" alt="">
					<p style="color:#29C5D7">2.想解决孩子情绪和行为问题的家长</p>
				</div>
				<div>
					<img src="../../../public/images/s3.jpg" alt="">
					<p style="color:#F3B77B">3.想提升孩子社交和生活自理能力的家长</p>
				</div>
				<div>
					<img src="../../../public/images/s4.jpg" alt="">
					<p style="color:#F3CF3F">4.想让孩子顺利上幼儿园上学的家长</p>
				</div>
				<div>
					<img src="../../../public/images/s5.jpg" alt="">
					<p style="color:#4F8DDB">5.想了解家庭干预的老师</p>
				</div>
			</div>

			<div class="m-page-title" v-if="windowWidth < 800">
				<p></p>
				<span>课程大纲</span>
				<p></p>
			</div>
			<div class="m-title-image">
				<img src="../../../public/images/a1.png" alt="">
			</div>
			<!-- 课程大纲 -->
			<div class="home-site-title home-site-title5" style="margin-top: 80px;" v-if="windowWidth > 800">
				<span class="home-site-left" :class="leftClassFive" style="width: 41%;"></span>
				<div class="home-site-title-centre">
					<p><span style="margin-top: 23px;font-weight: normal;" :class="topClassFive">课程大纲</span></p>
					<p class="active-p imgwidth"><img :class="topClassFive" src="../../../public/images/a1.png"
						 alt=""></p>
				</div>
				<span class="home-site-right" style="width: 41%;" :class="rightClassFive"></span>
			</div>
			<div class="course-header">1.课程全景规划</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>照顾孤独症孩子需要有行为分析思维</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>你看到的问题只是表象</p>
					</li>
				</ul>
			</div>
			<div class="course-header">2.IDEA如何帮助自闭症孩子？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>什么是IDEA和EIS</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>怎样看待孩子的个体差异性？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>用数据来对康复进行决策和评价</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>怎样选择适合的康复方法？</p>
					</li>
					<li><span style="background:#2B7DC7">5</span>
						<p>怎样选择适合的教学目标？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">3.哪些有循证支持的干预方法可以帮助自闭症孩子？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>哪些是经过证实有效的干预方法？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>自然情境教学和关键反应训练</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>如何让身边的人正确帮助自闭症孩子？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>哪些方法可以辅助在家教学？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">4.让干预少走弯路！</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>这些早期发育异常不能被忽视</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>干预前应该做什么准备？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>自闭症孩子技能倒退了怎么办？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">5.家庭干预该如何规划？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>你知道孩子的发展关键期吗？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>什么样的家庭干预更适合自闭症孩子成长？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>家庭成员如何一起解决孩子的问题？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>自闭症孩子需要什么样的陪伴？</p>
					</li>
					<li><span style="background:#2B7DC7">5</span>
						<p>孩子上学需要具备哪些技能？</p>
					</li>
					<li><span style="background:#1DBFB3">6</span>
						<p>过了黄金干预期（6岁后），没有机构支持怎么办？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">6.如何有效进行家庭干预？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>为什么要做家庭干预？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>家庭干预的重点是什么？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>什么样的家庭干预是有效的？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">7.什么是ABA？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>为什么ABA可以帮助自闭症孩子？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>你用的ABA是科学的吗？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>ABA是如何帮助自闭症孩子的？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>学了ABA，可以做什么？</p>
					</li>
					<li><span style="background:#2B7DC7">5</span>
						<p>真正的ABA有什么特点？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">8.使用ABA前，你一定要知道的事</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>我们一直说的行为，你真的了解吗？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>行为也需要分类吗？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>ABA是如何改变行为的？上</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>ABA是如何改变行为的？下</p>
					</li>
					<li><span style="background:#2B7DC7">5</span>
						<p>为什么干预方法一样，效果却不同？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">9.VB是什么——用ABA来看语言</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>Verbal Behavior：什么是语言行为？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>从ABA的角度来看语言</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>语言有哪几种？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">10.孩子出现问题行为怎么办？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>什么是问题行为？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>孩子为什么会出现问题行为？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>自闭症孩子的问题行为如何干预？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>案例：教导替代行为</p>
					</li>
					<li><span style="background:#2B7DC7">5</span>
						<p>案例：问题行为的干预实例</p>
					</li>
				</ul>
			</div>
			<div class="course-header">11.感兴趣进步飞速，没兴趣不学还退步？强化的力量有多大？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>什么是强化物？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>找不到孩子的强化物怎么办？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>如何挖掘更多的强化物？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>如何利用强化物塑造孩子的行为？</p>
					</li>
					<li><span style="background:#1DBFB3">5</span>
						<p>不同的强化物如何搭配使用？</p>
					</li>
					<li><span style="background:#FFD337">6</span>
						<p>使用强化这些细节一定要注意！</p>
					</li>
					<li><span style="background:#EB7F4D">7</span>
						<p>你会使用代币吗？</p>
					</li>
					<li><span style="background:#2B7DC7">8</span>
						<p>强化和贿赂，傻傻分不清楚？</p>
					</li>
					<li><span style="background:#1DBFB3">9</span>
						<p>强化，我有特别的小技巧！</p>
					</li>
					<li><span style="background:#FFD337">10</span>
						<p>自闭症孩子需要这些口头表扬！</p>
					</li>
				</ul>
			</div>
			<div class="course-header">12.孩子完不成任务，你该怎么办？——辅助及其应用</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>什么是辅助？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>在家如何使用辅助？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>拒绝依赖！辅助应该如何撤除？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>案例：常见的家庭情景分析：抓住辅助的好时机！</p>
					</li>
				</ul>
			</div>
			<div class="course-header">13.如何教孩子玩游戏？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>什么是互动游戏？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>你真的会和孩子玩游戏吗？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>不同阶段的孩子可以玩什么类型的互动游戏？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">14.为什么孩子总是不听你的？——让指令更有效</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>为什么孩子总是不听话？指令控制要用对！</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>什么时候需要给孩子下指令？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>如何让自闭症孩子听你的？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">15.桌面教学（DTT）的正确姿势！</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>你做的桌面教学，可能是错的！</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>如何帮助孩子完成训练目标？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>如何避免孩子在干预过程中出错？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>孩子出现错误怎么办？</p>
					</li>
					<li><span style="background:#2B7DC7">5</span>
						<p>在家做DTT，要这样用指令和强化</p>
					</li>
					<li><span style="background:#1DBFB3">6</span>
						<p>案例：实际生活中如何进行桌面教学？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">16.孩子太任性总哭闹？可能是他还不会正确提要求！</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>自闭症孩子学会提要求有多重要？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>如何教孩子提要求？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>要求不能随便提？什么样的目标适合孩子？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>案例：生活情境中的提要求实例</p>
					</li>
				</ul>
			</div>
			<div class="course-header">17.生活中干预太生硬！怎样在自然情境中教学（NET）？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>什么是自然情境教学？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>生活中如何做好自然情境教学？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>不同的孩子如何选择适合自己的学习目标？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>这样做让自然情境教学更有效！</p>
					</li>
					<li><span style="background:#2B7DC7">5</span>
						<p>案例：家庭常见的自然情景教学场景分析</p>
					</li>
				</ul>
			</div>
			<div class="course-header">18.为什么孩子学了记不住？——培养孩子的维持和泛化能力</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>什么是行为的维持和泛化？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>如何维持和泛化孩子的行为？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>案例：自闭症孩子行为维持和泛化实例</p>
					</li>
				</ul>
			</div>
			<div class="course-header">19.怎样教孩子生活自理？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>教孩子生活自理之前，你必须知道的事</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>生活自理，先教什么？后教什么？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>如何判断孩子是“不会自理”还是“不想自理”？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>孩子“不想自理”你该怎么办？</p>
					</li>
					<li><span style="background:#2B7DC7">5</span>
						<p>孩子“不会自理”你能怎么办？</p>
					</li>
					<li><span style="background:#1DBFB3">6</span>
						<p>从生活出发，看看孩子能做什么？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">20.如何培养孩子的社交能力？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>如何教孩子打招呼？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>如何教会孩子辨别情绪？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>你会讲社交故事吗？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>社交故事对孩子有什么帮助？</p>
					</li>
					<li><span style="background:#2B7DC7">5</span>
						<p>你会给孩子写社交故事吗？</p>
					</li>
					<li><span style="background:#1DBFB3">6</span>
						<p>家庭中可使用的社交故事范例</p>
					</li>
				</ul>
			</div>
			<div class="course-header">21.数据，孩子进步的晴雨表</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>数据，让成长看得见</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>在家如何记录孩子的教学数据和其他重要数据？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">22.家长如何与老师沟通？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>家长如何配合老师制定孩子的干预目标？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>如何科学观察孩子在家的行为？</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>家庭内部目标不一致，怎么办？</p>
					</li>
				</ul>
			</div>
			<div class="course-header">23.常见的评估有哪些？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>了解常见评估工具</p>
					</li>
				</ul>
			</div>
			<div class="course-header">24.为什么VB-MAPP更适合你的孩子？</div>
			<div class="timetable">
				<ul>
					<li><span style="background:#1DBFB3">1</span>
						<p>170个里程碑如何让你更了解孩子？</p>
					</li>
					<li><span style="background:#FFD337">2</span>
						<p>了解自闭症孩子最常见的24个障碍</p>
					</li>
					<li><span style="background:#EB7F4D">3</span>
						<p>我的孩子能从机构毕业吗？</p>
					</li>
					<li><span style="background:#2B7DC7">4</span>
						<p>分解能力，获得更适合孩子的课程指南！</p>
					</li>
					<li><span style="background:#2B7DC7">5</span>
						<p>如何安置和设计孩子的个别化教育计划？</p>
					</li>
				</ul>
			</div>
			<!-- 专业的课程导师团队 -->
			<div class="home-site-title home-site-title6" style="margin-top: 0;" v-if="windowWidth > 800 ">
				<span class="home-site-left" style="width: 35%;" :class="leftClassSix"></span>
				<div class="home-site-title-centre">
					<p><span style="margin-top: 23px;font-weight: normal;" :class="topClassSix">专业的课程导师团队</span></p>
					<p class="active-p imgwidth"><img :class="topClassSix" src="../../../public/images/a2.png"
						 alt=""></p>
				</div>
				<span class="home-site-right" :class="rightClassSix" style="width: 35%;"></span>
			</div>

			<div class="m-page-title" v-if="windowWidth < 800">
				<p style="width: 80px"></p>
				<span>专业的课程导师团队</span>
				<p style="width: 80px"></p>
			</div>
			<div class="m-title-image" v-if="windowWidth < 800">
				<img src="../../../public/images/a2.png" alt="">
			</div>
<!--			PC端-->
			<div class="idea-teacher" style="margin-top: 33px;" v-if="windowWidth > 800 ">
				<div class="idea-teacher-left">
					<div class="idea-teacher-left-image"><img src="../../../public/images/z.png" alt=""></div>
					<div class="idea-teacher-left-introduce">
						<span style="color:#1DBFB3 ;">徐紫薇</span>
						<p style="font-size:14px;color:#555555;line-height:10px;">恩启教研总监</p>
						<em style="display: inline-block;width: 245px;border-top:1px solid #ddd;"></em>
						<div style="width: 100%;height: 15px;"></div>
						<p>国际认证行为分析师-博士级（BCBA-D）</p>
						<p>美国俄亥俄州立大学特殊教育专业博士</p>
						<div>清华大学无障碍发展研究院孤独症康复研究项目学术负责人</div>
					</div>
				</div>
				<div class="idea-teacher-right">
					<div class="idea-teacher-left-image"><img src="../../../public/images/w.png" alt=""></div>
					<div class="idea-teacher-left-introduce">
						<span style="color: #FAAB1D;">王学钢</span>
						<p style="font-size:14px;color:#555555;line-height:10px;">恩启培训部主任</p>
						<em style="display: inline-block;width: 245px;border-top:1px solid #ddd;"></em>
						<div style="width: 100%;height: 15px;"></div>
						<p>国际认证副行为分析师（BCaBA）</p>
						<p>邯郸学院外聘教师</p>
					</div>
				</div>
			</div>
			<div class="idea-teacher" style="margin-top: 45px;"  v-if="windowWidth > 800 ">
				<div class="idea-teacher-left">
					<div class="idea-teacher-left-image"><img src="../../../public/images/wz.png" alt=""></div>
					<div class="idea-teacher-left-introduce">
						<span style="color: #2C7EC7;">王震</span>
						<p style="font-size:14px;color:#555555;line-height:10px;">恩启教学督导</p>
						<em style="display: inline-block;width: 245px;border-top:1px solid #ddd;"></em>
						<div style="width: 100%;height: 15px;"></div>
						<p>国际认证副行为分析师（BCaBA）</p>
					</div>
				</div>
				<div class="idea-teacher-right">
					<div class="idea-teacher-left-image"><img src="../../../public/images/l.png" alt=""></div>
					<div class="idea-teacher-left-introduce">
						<span style="color: #EC804D;">李丽芳</span>
						<p style="font-size:14px;color:#555555;line-height:10px;">恩启主管言语治疗师</p>
						<em style="display: inline-block;width: 245px;border-top:1px solid #ddd;"></em>
						<div style="width: 100%;height: 15px;"></div>
						<p>原中南大学湘雅二医院言语治疗师</p>
						<div>中国国际言语语言治疗协会青年学术委员会委员</div>
					</div>
				</div>
			</div>

			<div class="idea-teacher" style="margin-top: 45px;"  v-if="windowWidth > 800 ">
				<div class="idea-teacher-left">
					<div class="idea-teacher-left-image"><img src="../../../public/images/f.jpg" alt=""></div>
					<div class="idea-teacher-left-introduce">
						<span style="color: #FAAB1D;">方晓嫣</span>
						<p style="font-size:14px;color:#555555;line-height:10px;">恩启教学督导</p>
						<em style="display: inline-block;width: 245px;border-top:1px solid #ddd;"></em>
						<div style="width: 100%;height: 15px;"></div>
						<p>国际认证行为分析师（BCBA）</p>
						<p>美国密苏里州大学应用行为分析硕士</p>
					</div>
				</div>
				<div class="idea-teacher-right">
					<div class="idea-teacher-left-image"><img src="../../../public/images/lipeiling.jpg" alt=""></div>
					<div class="idea-teacher-left-introduce">
						<span style="color: #2C7EC7;">李沛玲</span>
						<p style="font-size:14px;color:#555555;line-height:10px;">恩启主管言语治疗师</p>
						<em style="display: inline-block;width: 245px;border-top:1px solid #ddd;"></em>
						<div style="width: 100%;height: 15px;"></div>
						<p>国际认证行为分析师（BCBA）</p>
						<p>美国麻省大学波士顿分校教育硕士</p>
						<p>西南大学应用心理硕士</p>
					</div>
				</div>
			</div>

			<div class="idea-teacher" style="margin-top: 45px;"  v-if="windowWidth > 800 ">
				<div class="idea-teacher-left">
					<div class="idea-teacher-left-image"><img src="../../../public/images/yuxi.jpg" alt=""></div>
					<div class="idea-teacher-left-introduce">
						<span style="color: #1DBFB3;">余溪</span>
						<p style="font-size:14px;color:#555555;line-height:10px;">恩启融合教育督导</p>
						<em style="display: inline-block;width: 245px;border-top:1px solid #ddd;"></em>
						<div style="width: 100%;height: 15px;"></div>
						<p>美国斯旺西大学儿童教育专业优等硕士</p>
					</div>
				</div>
				<div class="idea-teacher-right">
					<div class="idea-teacher-left-image"><img src="../../../public/images/liu.jpg" alt=""></div>
					<div class="idea-teacher-left-introduce">
						<span style="color: #2C7EC7;">刘春蕾</span>
						<p style="font-size:14px;color:#555555;line-height:10px;">恩启主管言语治疗师</p>
						<em style="display: inline-block;width: 245px;border-top:1px solid #ddd;"></em>
						<div style="width: 100%;height: 15px;"></div>
						<p>恩启IDEA教研中心教学主管</p>
					</div>
				</div>
			</div>
			<div class="idea-teacher" style="margin-top: 45px;"  v-if="windowWidth > 800 ">
				<div class="idea-teacher-left">
					<div class="idea-teacher-left-image"><img src="../../../public/images/t.jpg" alt=""></div>
					<div class="idea-teacher-left-introduce">
						<span style="color: #2C7EC7;">谭内莉</span>
						<p style="font-size:14px;color:#555555;line-height:10px;">恩启教研团队成员</p>
						<em style="display: inline-block;width: 245px;border-top:1px solid #ddd;"></em>
						<div style="width: 100%;height: 15px;"></div>
						<p>恩启IDEA教研中心教学主管</p>
					</div>
				</div>
				<div class="idea-teacher-right">
					<div class="idea-teacher-left-image"><img src="../../../public/images/m.jpg" alt=""></div>
					<div class="idea-teacher-left-introduce">
						<span style="color: #EC804D;">马有若</span>
						<p style="font-size:14px;color:#555555;line-height:10px;">恩启教研团队成员</p>
						<em style="display: inline-block;width: 245px;border-top:1px solid #ddd;"></em>
						<div style="width: 100%;height: 15px;"></div>
						<p>哥伦比亚大学特殊教育硕士</p>
					</div>
				</div>
			</div>
<!--			移动端-->
			<div class="m-idea-teacher" v-if="windowWidth < 800">
				<div class="m-idea-teacher-list">
					<ul>
						<li>
							<img src="../../../public/images/z.png" alt="">
						</li>
						<li>
							<p><em>徐紫薇</em><span>恩启教研总监</span></p>
							<p>国际认证行为分析师-博士级</p>
							<p>美国俄亥俄州立大学特殊教育专业博士</p>
							<p>清华大学无障碍发展研究院孤独症康复研究项目学术负责人</p>
						</li>
					</ul>
				</div>
				<div class="m-idea-teacher-list">
					<ul>
						<li>
							<img src="../../../public/images/w.png" alt="">
						</li>
						<li>
							<p><em>王学钢</em><span>恩启培训部主任</span></p>
							<p>国际认证副行为分析师</p>
							<p>邯郸学院外聘教师</p>
						</li>
					</ul>
				</div>
				<div class="m-idea-teacher-list">
					<ul>
						<li>
							<img src="../../../public/images/wz.png" alt="">
						</li>
						<li>
							<p><em>王震</em><span>恩启教学督导</span></p>
							<p>国际认证副行为分析师</p>
						</li>
					</ul>
				</div>
				<div class="m-idea-teacher-list">
					<ul>
						<li>
							<img src="../../../public/images/l.png" alt="">
						</li>
						<li>
							<p><em>李丽芳</em><span>恩启主管言语治疗师</span></p>
							<p>原中南大学湘雅二医院言语治疗师</p>
							<p>中国国际言语语言治疗协会青年学术委员会委员</p>
						</li>
					</ul>
				</div>
				<div class="m-idea-teacher-list">
					<ul>
						<li>
							<img src="../../../public/images/f.jpg" alt="">
						</li>
						<li>
							<p><em>方晓嫣</em><span>恩启教学督导</span></p>
							<p>国际认证行为分析师</p>
							<p>美国密苏里州大学应用行为分析博士</p>
						</li>
					</ul>
				</div>
				<div class="m-idea-teacher-list">
					<ul>
						<li>
							<img src="../../../public/images/lipeiling.jpg" alt="">
						</li>
						<li>
							<p><em>李沛玲</em><span>恩启主管言语治疗师</span></p>
							<p>美国麻省大学波士顿分校教育硕士</p>
							<p>西南大学应用心理硕士</p>
						</li>
					</ul>
				</div>
				<div class="m-idea-teacher-list">
					<ul>
						<li>
							<img src="../../../public/images/yuxi.jpg" alt="">
						</li>
						<li>
							<p><em>余溪</em><span>恩启融合教育督导</span></p>
							<p>美国斯旺西大学儿童教育专业优等硕士</p>
						</li>
					</ul>
				</div>
				<div class="m-idea-teacher-list">
					<ul>
						<li>
							<img src="../../../public/images/liu.jpg" alt="">
						</li>
						<li>
							<p><em>刘春蕾</em><span>恩启主管言语治疗师</span></p>
							<p>恩启IDEA教研中心教学主管</p>
						</li>
					</ul>
				</div>
				<div class="m-idea-teacher-list">
					<ul>
						<li>
							<img src="../../../public/images/t.jpg" alt="">
						</li>
						<li>
							<p><em>谭内莉</em><span>恩启教研团队成员</span></p>
							<p>恩启IDEA教研中心教学主管</p>
						</li>
					</ul>
				</div>
				<div class="m-idea-teacher-list">
					<ul>
						<li>
							<img src="../../../public/images/m.jpg" alt="">
						</li>
						<li>
							<p><em>马有若</em><span>恩启教研团队成员</span></p>
							<p>哥伦比亚大学特殊教育硕士</p>
						</li>
					</ul>
				</div>
			</div>

			<!-- 限时购买 -->
			<div class="home-site-title home-site-title7" style="margin-top: 80px;" v-if="windowWidth > 800">
				<span class="home-site-left" :class="leftClassSeven" style="width: 41%;"></span>
				<div class="home-site-title-centre">
					<p><span style="margin-top: 23px;font-weight: normal;" :class="topClassSeven">限时购买</span></p>
					<p class="active-p imgwidth"><img :class="topClassSeven" src="../../../public/images/3333.png"
						 alt=""></p>
				</div>
				<span class="home-site-right" :class="rightClassSeven" style="width: 41%;"></span>
			</div>

			<div class="m-page-title" v-if="windowWidth < 800">
				<p></p>
				<span>限时购买</span>
				<p></p>
			</div>
			<div class="m-title-image" v-if="windowWidth < 800">
				<img src="../../../public/images/3333.png" alt="">
			</div>

			<div class="buytxt">不到一支口红的价格，收获<font style="color:#1DBFBA;">影响孩子一生</font>的机会</div>
			<div class="buyimage"></div>
			<div class="erweim" v-if="windowWidth > 800">
				<img src="../../../public/images/erweim.png" alt="">
				<span>扫码购买课程,加入专属答疑群</span>
			</div>
<!--			移动端-->
			<div class="m-code" v-if="windowWidth < 800">
				<img src="../../../public/images/erweim.png" alt="">
			</div>
			<div class="m-buy-title" v-if="windowWidth < 800">
				扫码购买课程,加入专属答疑群
			</div>
			<!-- 购课须知 -->
			<div class="home-site-title home-site-title8" style="margin-top: 80px;" v-if="windowWidth > 800">
				<span class="home-site-left" :class="leftClassEight" style="width: 41%;"></span>
				<div class="home-site-title-centre">
					<p><span style="margin-top: 23px;font-weight: normal;" :class="topClassEight">购课须知</span></p>
					<p class="active-p imgwidth"><img :class="topClassEight" src="../../../public/images/3333.png"
						 alt=""></p>
				</div>
				<span class="home-site-right" :class="rightClassEight" style="width: 41%;"></span>
			</div>

			<div class="m-page-title" v-if="windowWidth < 800">
				<p></p>
				<span>购课须知</span>
				<p></p>
			</div>
			<div class="m-title-image" v-if="windowWidth < 800">
				<img src="../../../public/images/3333.png" alt="">
			</div>
			<div class="buy-inform" v-for="(item,index) in titleInfo">
				<span :class="index==5?'':'fa-ban' ">{{item.title}}</span>
				<p>{{item.p}}</p>
			</div>
			<div style="width: 100%;height: 80px;" v-if="windowWidth > 800 "></div>
			<div class="home-site-title home-site-title1" style="margin-top: -77px;">
				<span class="home-site-left" style="width: 31%;"></span>
				<div class="home-site-title-centre footer_link" style="justify-content: center">
					<a href="http://www.ingclass.org/" target="_blank">访问恩启云课堂，学习更多内容</a>
					<img src="../../../public/images/dianji.png" alt="">
				</div>
				<span class="home-site-right" style="width: 31%;"></span>
			</div>
			<div style="width: 100%;height: 20px" v-if="windowWidth <800"></div>
			<Footer v-if="windowWidth > 800"></Footer>
			<Appfooter v-if="windowWidth < 800 "></Appfooter>
			<div class="page-height" v-if="windowWidth < 800"></div>
		</div>
		<Top></Top>
	</main>
</template>

<script>
	import Nav from "../index/Nav.vue"
	import Top from "../index/Top.vue"
	import Footer from "../index/Footer.vue"
	import Appfooter from "../mIndex/Appfooter";
	import {
		shows
	} from "../../js/scrollHtml.js"
	export default {
		name: 'patriarch',
		components: {
			Nav,
			Top,
			Footer,
			Appfooter
		},
		data() {
			return {
				titleInfo: [{
						title: '1.购买了课程后，如何学习？',
						p: '《IDEA孤独症教育通识课》是恩启全新视频课程，周一至周五中午12点更新一节。关注公众号“恩启特教平台”，点 击“菜单栏-关于我们-IDEA孤独症通识课”即可随时学习。'
					},
					{
						title: '2.课程可以重复收听吗？',
						p: '已经购买的课程永久有效，可反复多次收听。'
					},
					{
						title: '3.课程遇到疑问怎么办？',
						p: '购买课程后，请依据提示加入专属家长答疑群，有问题可以在群内提问，有专业的老师解答。 课程还会开展不定期直播答疑，也可以解决你的问题。'
					},
					{
						title: '4.课程价格说明',
						p: '划线价：建议零售价/曾经展示过的售价，并非原价，仅供参考。 未划线价格：实时标价。具体成交价格根据商品参加活动，或使用优惠券等情况变化，以订单页结算价格为准。 此说明仅当出现价格比较时有效。'
					},
					{
						title: '版权声明',
						p: '本课程相关知识产权归恩启所有，与本课程有关的所有课程视频、文字、图片等知识产权均归属于恩启。'
					},
				],
				topClass: '',
				topClassTwo: '',
				topClassThree: '',
				topClassFour: '',
				topClassFive: '',
				topClassSix: '',
				topClassSeven: '',
				topClassEight: '',
				leftClass: '',
				leftClassTwo: '',
				leftClassThree: '',
				leftClassFour: '',
				leftClassFive: '',
				leftClassSix: '',
				leftClassSeven: '',
				leftClassEight: '',
				rightClass: '',
				rightClassTwo: '',
				rightClassThree: '',
				rightClassFour: '',
				rightClassFive: '',
				rightClassSix: '',
				rightClassSeven: '',
				rightClassEight: '',
				myVideoImage:true,
				windowWidth:window.innerWidth
			}
		},
		mounted() {
			const w = $(window).width();
			if( w <= 1024 ){
				$('.video-class img').hide();
			}
			this.$nextTick(()=>{
				$('.index-nav>a:eq(2)').addClass('borderBottomActive');
			})
			this.windowWidth > 800 ?shows() : '';
			if (window.outerHeight > 800) {
				this.scrollnumber($('.home-site-title1'), 'font_active_up', 50, 1);
			}
			window.addEventListener('scroll', this.NavScrollFunction, true);
			const myVideo = document.getElementById("speakVideo");
		},
		methods: {
			NavScrollFunction() {
				this.scrollnumber($('.home-site-title1'), 'font_active_up', 50, 1);
				this.scrollnumber($('.home-site-title2'), 'font_active_up', 50, 2);
				this.scrollnumber($('.home-site-title3'), 'font_active_up', 50, 3);
				this.scrollnumber($('.home-site-title4'), 'font_active_up', 50, 4);
				this.scrollnumber($('.home-site-title5'), 'font_active_up', 50, 5);
				this.scrollnumber($('.home-site-title6'), 'font_active_up', 50, 6);
				this.scrollnumber($('.home-site-title7'), 'font_active_up', 50, 7);
				this.scrollnumber($('.home-site-title8'), 'font_active_up', 50, 8);
			},
			playVideo(){
				const myVideo = document.getElementById("speakVideo");
				this.myVideoImage = false;
				myVideo.play();
				$('.hide-video-box').hide();
			},
			hidePlay(){
				const myVideo2 = document.getElementById("speakVideo");
				this.myVideoImage = false;
				myVideo2.play();
				$('.hide-video-box').hide();
			},
			scrollnumber(element, cssname, offset, type) {
				let a, b, c, d;
				this.windowWidth > 800 ? d = $(element).offset().top : '';
				a = eval(d + offset);
				b = $(window).scrollTop();
				c = $(window).height();
				if (b + c > a) {
					if (type == 1 && this.topClass == "") {
						this.topClass = 'font_active_up';
						this.leftClass = 'font_active_left';
						this.rightClass = 'font_active_right';
					} else if (type == 2 && this.topClassTwo == "") {
						this.topClassTwo = 'font_active_up';
						this.leftClassTwo = 'font_active_left';
						this.rightClassTwo = 'font_active_right';
					} else if (type == 3 && this.topClassThree == "") {
						this.topClassThree = 'font_active_up';
						this.leftClassThree = 'font_active_left';
						this.rightClassThree = 'font_active_right';
					} else if (type == 4 && this.topClassFour == "") {
						this.topClassFour = 'font_active_up';
						this.leftClassFour = 'font_active_left';
						this.rightClassFour = 'font_active_right';
					} else if (type == 5 && this.topClassFive == "") {
						this.topClassFive = 'font_active_up';
						this.leftClassFive = 'font_active_left';
						this.rightClassFive = 'font_active_right';
					} else if (type == 6 && this.topClassSix == "") {
						this.topClassSix = 'font_active_up';
						this.leftClassSix = 'font_active_left';
						this.rightClassSix = 'font_active_right';
					} else if (type == 7 && this.topClassSeven == "") {
						this.topClassSeven = 'font_active_up';
						this.leftClassSeven = 'font_active_left';
						this.rightClassSeven = 'font_active_right';
					} else if (type == 8 && this.topClassEight == "") {
						this.topClassEight = 'font_active_up';
						this.leftClassEight = 'font_active_left';
						this.rightClassEight = 'font_active_right';
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	/*移动端*/
	.m-about-Us-duty{
		width: 88%;
		background: #2BB7B3;
		margin: 30px auto 13px;
		text-align: center;
		padding: 14px 0;
		font-size: 12px;
		color: #fff;
		position: relative;
		span{
			display: block;
			width: 70%;
			margin: 0 auto;
		}
		img{
			display: block;
			width: 13px;
			height: 10px;
			position: absolute;
		}
	}
	.m-s1{
		left: 15px;
		top: 16px;
	}
	.m-s2{
		right: 15px;
		bottom: 16px;
	}
	.m-class-centre{
		width: 88%;
		margin: 0 auto;
		font-size: 16px;
		color: #444444;
		display: block;
		font-style: inherit;
		ul{
			li{
				display: flex;
				p{
					/*padding-top: 4px;*/
				}
			}
		}
	}
	.m-code{
		width:88%;
		margin: 18px auto 8px;
		background: #EEEEEE;
		img{
			display: block;
			width: 208px;
			height: 208px;
			margin: 0 auto;
			padding: 21px 0;
		}
	}
	.m-buy-title{
		width: 88%;
		text-align: center;
		font-size: 14px;
		color: #fff;
		padding: 7px 0;
		background: #2C7EC7;
		border-radius: 6px;
		margin: 0 auto;
	}
	.m-study{
		width: 88%;
		margin:0 auto;
	}
	.m-statistics{
		width: 186px;
		height: 186px;
		background: url(../../../public/images/bing.png) no-repeat;
		background-size: 100% 100%;
		margin: 31px auto 18px;
	}
	.three-content{
		display: flex;
		width: 100%;
		margin: 0 auto 4px;
		font-size: 12px;
		color: #444444;
		img{
			display: block;
			width: 11px;
			height: 9px;
			margin-top: 4px;
		}
		>div{
			padding-left: 8px;
		}
	}
	/*pc端*/
	.patriarch {
		width: 100%;
		height: auto;
		position: absolute;
		background: #fff;
	}
	.hide-video-box{
		position: absolute;
		width: 75.3%;
		height: 370px;
		left: 50%;
		top: 50%;
		margin: -214px 0 0 -329px;
		z-index: 4;
	}
	.home-site-title {
		width: 1026px;
		display: flex;
		align-items: center;
	}

	.fa-ban {
		font-size: 16px !important;
		color: #555555 !important;
	}

	.home-site-left,
	.home-site-right {
		display: inline-block;
		width: 31%;
		height: 2px;
	}

	.home-site-left {
		background: linear-gradient(to right, rgba(237, 245, 245, 0.5), rgba(66, 170, 165, 0.5));
	}

	.home-site-right {
		background: linear-gradient(to left, rgba(237, 245, 245, 0.5), rgba(66, 170, 165, 0.5));
	}

	.home-site-title-centre {
		flex: 1;
		text-align: center;
		p {
			height: 16px;
			margin-top: 10px;

			img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}

	.video-class {
		width: 869px;
		height: 501px;
		margin: 80px auto 0;
		background: url(../../../public/images/video.png) no-repeat;
		background-size: 100% 100%;
		position: relative;
		img{
			display: block;
			width: 100px;
			height: 100px;
			position: absolute;
			left: 50%;
			top: 50%;
			z-index: 5;
			margin-left: -50px;
			margin-top: -86px;
			cursor: pointer;
		}
	}
	.video-class video{
		width: 75.3%;
		height: 370px;
		position: absolute;
		left: 50%;
		top: 50%;
		margin:-214px 0 0 -329px;
	}
	.video-js {
		margin: 0 auto !important;
		background: rgba(0, 0, 0, 0) !important;

	}

	.video-js .vjs-tech {
		top: 13px;
		left: -1px;
	}

	.video-js .vjs-control-bar {
		bottom: -32px !important;
		left: -1px !important;
	}

	.video-js .vjs-big-play-button {
		top: 59%;
		margin-left: -42px;
		left: 50%;
		margin-top: -50px;
	}

	.about-Us-duty {
		width: 1026px;
		height: 70px;
		margin: 62px auto 0;
		background: #2BB7B3;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: space-around;

		i {
			font-size: 14px;
			color: #fff;
			font-style: inherit;
		}

		span {
			font-size: 14px;
			color: #fff;
		}

		img {
			display: block;
			width: 35px;
			height: 25px;
		}
	}

	.statistics {
		width: 1026px;
		margin: 65px auto 0;

		ul {
			width: 100%;
			display: flex;
			justify-content: space-between;

			li {
				width: 150px;
				text-align: center;

				img {
					display: block;
					width: 125px;
					height: 123px;
					margin: 28px auto 0;
				}

				i {
					font-size: 17px;
					font-weight: bold;
					font-style: italic;
					color: rgba(54, 128, 238, 1);
					font-style: inherit;
				}

				p {
					width: 100%;
					height: 60px;
					font-size: 12px;
					color: #555555;
					padding-top: 15px;
				}
			}
		}
	}

	.circulation {
		width: 705px;
		height: 407px;
		background: url(../../../public/images/tutut.png) no-repeat;
		background-size: 100% 100%;
		margin: 83px auto 0;
		font-size: 23px;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		position: relative;
	}

	.circulation span:first-child {
		position: absolute;
		bottom: 15.8%;
		left: 3.6%;
	}

	.circulation span:last-child {
		position: absolute;
		right: 4.1%;
		bottom: 15.8%;
	}

	.get-images {
		width: 1026px;
		display: flex;
		justify-content: space-between;
		margin: 25px auto 0;
		position: relative;
		div {
			// width: 265px;
			height: 177px;
			position: relative;
			img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
	.smallTiele{
		width: 84px;
		height: 46px !important;
		background: #fff;
		position: absolute !important;
		top: 14px;
		left: 19px;
		border-radius: 5px;
		text-align: center;
		span{
			font-size: 18px;
			font-weight: bold;
		}
		p{
			font-size: 12px;
		}
	}
	.get-title {
		width: 1026px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;

		div {
			width: 265px;
			height: 177px;

			span {
				font-size: 14px;
				line-height: 20px;
				display: inline-block;
				padding: 10px 0 0 18px;
			}

			p {
				font-size: 13px;
				color: #555555;
				line-height: 19px;
				padding-left: 18px;
				width: 93%;
			}
		}
	}

	.erweim {
		width: 1026px;
		height: 333px;
		background: rgba(169, 169, 169, 0.2);
		border-radius: 4px;
		margin: 40px auto 0;

		img {
			display: block;
			width: 217px;
			height: 217px;
			margin: 46px auto 20px;
			padding-top: 46px;
		}

		span {
			display: block;
			width: 249px;
			height: 22;
			background: rgba(30, 192, 255, 1);
			box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);
			border-radius: 4px;
			font-size: 12px;
			font-family: Heiti SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
			line-height: 21px;
			margin: 0 auto;
			text-align: center;
		}
	}

	.study {
		width: 1026px;
		display: flex;
		margin: 25px auto 0;
	}

	.study-left {
		margin-left: 3%;
	}

	.study-right {
		width: 225px;
		height: 226px;
		background: url(../../../public/images/bing.png) no-repeat;
		background-size: 100% 100%;
		margin-left: -4%;
	}

	.study-left-content {
		display: flex;
		margin-top: 14px;

		img {
			display: block;
			width: 14px;
			height: 12px;
			margin: 5px 20px 0;
		}

		p {
			width: 79%;
			font-size: 14px;
			font-weight: 400;
			color:#555555;
			line-height: 22px;
		}
	}

	.attend {
		width: 1026px;
		margin: 58px auto 0;
		display: flex;
		justify-content: space-between;

		div {
			width: 207px;

			img {
				display: block;
				width: 100%;
				height: 164px;
			}

			p {
				width: 96%;
				text-align: center;
				font-size: 14px;
			}
		}
	}

	.course-header {
		width: 100%;
		text-align: center;
		font-size: 17px;
		color: rgba(29, 191, 179, 1);
	}

	.timetable {
		width: 1026px;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 31px 0px rgba(0, 0, 0, 0.14);
		margin: 20px auto 54px;
		border-radius: 8px;
		padding: 13px 0;
		ul {
			display: flex;
			flex-wrap: wrap;

			li {
				width: 50%;
				display: flex;
				align-items: center;
				padding: 7px 0;

				span {
					display: inline-block;
					margin-left: 55px;
					width: 24px;
					height: 24px;
					text-align: center;
					line-height: 24px;
					font-size: 19px;
					font-weight: 400;
					border-radius: 4px;
					color: rgba(255, 255, 255, 1);
				}

				p {
					padding-left: 8px;
					font-size: 15px;
					color: #555555;
				}
			}
		}
	}

	.buytxt {
		width: 100%;
		margin: 25px auto 105px;
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
	}

	.buyimage {
		width: 712px;
		height: 385px;
		margin: 0 auto 103px;
		background: url(../../../public/images/buy.png)no-repeat;
		background-size: 100% 100%;
	}

	.buy-inform {
		width: 1026px;
		margin: 20px auto;
		span {
			font-size: 18px;
			color: rgba(0, 0, 0, 1);
			padding-left: 30px;
		}

		p {
			font-size: 16px;
			color: #555555;
			line-height: 22px;
			padding: 10px 0 0 30px;
			line-height: 20px;
		}
	}
	.home-site-title-centre p:last-child span {
		color: #333 !important;
		font-weight: normal;
		font-size: 14px !important;
		margin-top: 0 !important;
	}
	.home-site-title-centre p:last-child span {
		color: #333 !important;
		font-weight: normal;
		font-size: 14px !important;
		margin-top: 0 !important;
	}
	@media screen and (max-width:1300px){
		.home-site-title,.idea-course-introduce,.about-Us-duty,.statistics,.get-images,.get-title,.study,.attend,.timetable,.idea-teacher,.buy-inform{
			width: 85%;
		}
		.home-site-title-centre p:first-child span{
			font-size: 23px !important;
		}
		.myVideo-dimensions {
		    width: 606px !important;
		}



		.get-images div {
		    height: 145px;
		}
		.attend div img{
			height: 122px;
		}
		.idea-teacher-left-image{
			width: 160px;
			height: 170px;
		}
		.idea-teacher-left-introduce{
			width: auto;
			margin: -10px 0 0 12px;
		}
		.idea-teacher-left-introduce span{
			font-size: 18px;
		}
		.idea-teacher-left-introduce p{
			font-size: 12px;
		}
		.idea-teacher-left-introduce div{
			font-size: 12px;
		}
		.idea-teacher-right{
			margin-left: 3%;
		}
		.idea-schedule img{
			width: 100%;
		}
		.footer_link a{
			font-size: 13px;
		}
		.buyimage{
		    width: 632px;
		    height: 305px;	
		}
	}
	@media screen and (min-width: 1380px)and(max-width: 1500px){
		.idea-teacher-left-introduce p{
			width: 300px;
		}
	}
	@media screen and (max-width: 1024px){
		.buyimage{
			width: 463px;
			height: 250px;
		}
		.circulation{
			width: 458px;
			height: 265px;
		}
		.about-Us-duty span,.about-Us-duty i{
			font-size:10px;
		}
		.video-class{
			width: 565px;
			height: 326px;
		}
		.video-class video{
			width: 75.4%;
			height: 240.5px;
			margin: -139px 0 0 -214px;
		}
		.get-title div p{
			font-size: 11px;
		}
		.study-right{
			width: 146px;
			height: 143px;
		}
		.buy-inform p{
			font-size: 14px;
		}
	}
	/*移动端*/
	@media screen and(max-width: 800px){
		.home-site-left,
		.home-site-right {
			height: 1px;
		}
		.idea-course-introduce{
			font-size: 12px;
			color: #444444;
			line-height: 17px;
		}
		.video-class{
			width: 85%;
			height: 196px;
			margin-bottom: 62px;
		}
		.video-class video{
			width: 231px;
			height: 145px;
			margin: -84px 0 0 -116px;
		}
		.statistics{
			margin: 0 auto;
		}
		.statistics ul{
			flex-wrap: wrap;
			li{
				margin-top: 20px;
				i{
					font-size: 14px;
				}
				p{
					font-size: 12px;
					padding-top: 10px;
				}
				img{
					width: 79px;
					height: 77px;
					margin: 19px auto 0;
				}
			}
		}
		.circulation{
			width: 82%;
			height: 176px;
			margin:17px auto 0;
			background: url(../../../public/mImages/tutut.png) no-repeat;
			background-size: 100% 100%;
		}
		.get-images{
			flex-wrap: wrap;
			div{
				margin: 0 auto;
				height: 199px;
			}
		}
		.attend{
			display: block;
			>div{
				width: 294px;
				margin: 0 auto;
			}
		}
		.attend div img{
			height: 231px;
		}
		.attend div p{
			font-size: 14px;
			padding: 4px 0 18px;
		}
		.timetable ul{
			display: block;
			li{
				width: 100%;
				padding: 5px 18px;
				span{
					margin-left: 0;
					font-size: 14px;
					width: 19px;
					height: 19px;
					line-height: 19px;
				}
				p{
					font-size: 14px;
					color: #444444;
				}
			}
		}
		.course-header{
			width: 88%;
			margin: 10px auto -20px;
			font-size: 14px;
		}
		.m-idea-teacher{
			padding: 0 20px;
			box-sizing: border-box;
		}
		.m-idea-teacher-list{
			overflow: hidden;
			margin-top: 24px;
		}
		.m-idea-teacher-list ul li{
			float: left;
			width: 40%;
			box-sizing: border-box;
			font-size: 12px;
			color: #444;
			img{
				max-width: 100%;
			}
		}
		.m-idea-teacher-list ul li:last-child{
			width: 60%;
			padding-left: 3%;
		}
		.m-idea-teacher-list ul li p em{
			font-style: normal;
		}
		.m-idea-teacher-list ul li p span{
			font-size: 10px;
			margin-left: 10px;
		}
		.m-idea-teacher-list ul li p:nth-child(1){
			padding: 7px 0;
			border-bottom: .5px solid #eee;
		}
		.m-idea-teacher-list ul li p:first-child~p{
			margin-top: 8px;
		}
		.m-idea-teacher .m-idea-teacher-list:nth-child(1) ul li p em,
		.m-idea-teacher .m-idea-teacher-list:nth-child(7) ul li p em{
			color: #1DBFB3;
		}
		.m-idea-teacher .m-idea-teacher-list:nth-child(2) ul li p em,
		.m-idea-teacher .m-idea-teacher-list:nth-child(5) ul li p em{
			color: #FAAB1D;
		}
		.m-idea-teacher .m-idea-teacher-list:nth-child(3) ul li p em,
		.m-idea-teacher .m-idea-teacher-list:nth-child(6) ul li p em{
			color: #2C7EC7;
		}
		.m-idea-teacher .m-idea-teacher-list:nth-child(4) ul li p em{
			color: #EC804D;
		}
		.buytxt{
			width: 88%;
			font-size: 14px;
			color: #444444;
			margin: 30px auto 18px;
		}
		.buyimage{
			width: 323px;
			height: 175px;
			margin: 0 auto 20px;
		}
		.buy-inform{
			width: 88%;
			span{
				padding-left: 0;
				font-size: 14px !important;
				color: #444444 !important;
			}
			p{
				padding: 4px 0 0 10px;
				font-size: 14px !important;
				color: #444444 !important;
			}
		}
		.home-site-left, .home-site-right{
			width: 11% !important;
		}
		.footer_link a{
			font-size: 14px;
		}
		.footer_link img{
			margin-left: 5px;
			width: 33px!important;
			height: 24px!important;
		}
		.timetable{
			box-shadow:initial;
			margin: 20px auto 0;
		}
		.buy-inform{
		    margin: 10px auto;
		}
		.home-site-title1{
			margin: 63px 0 !important;
		}
		.m-font{
			font-size: 14px;
		}
		.m-class-centre ul li{
			font-size: 12px;
			span{
				/*padding-top: 3px;*/
			}
		}
		.m-class-centre ul li:first-child{
			margin-top: 6px;
		}
		.m-class-centre ul li:last-child{
			margin-bottom: 24px;
		}
	}
</style>

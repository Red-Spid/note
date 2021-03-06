
const xState = {
    count: 0,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ],

    list:[

        {
            text:"简历",
            url:"/personal/resume",
        },
        {
            text:"点滴",
            url:"/personal/dropBYdrop",
        },
        {
            text:"留言",
            url:"/personal/comments",
        }

    ],

    my:{
		url:"https://github.com/Red-Spid",
		title:"Fork me on GitHub",
		headportrait:"https://avatars.githubusercontent.com/u/67768597?v=4",
		name:"Simon"
	},

    personalInformation: {

        my: {  // 个人信息
            name: "个人信息",
            push: " | ",

            arr: [
                [
                    [
                        {
                            tips: "马兆国",
                            sex: "男",
                            val: "1998"
                        },
                        {
                            tips: "专科",
                            sex: "国家开放大学",
                            val: "计算机网络技术",
                            // 计算机网络技术
                        },
                        {
                            tips: "前端开发",
                            sex: "1",
                            val: " 年工作经验"
                        },
                    ],
                    [
                        {
                            tips: "期望职位",
                            push: "：",
                            val: "前端开发"
                        },
                        {
                            tips: "期望城市",
                            push: "：",
                            val: "北京"
                        },
                    ],
                    [
                        {
                            tips: "Github",
                            push: "：",
                            val: "https://github.com/Red-Spid",
                            url: "https://github.com/Red-Spid"
                        }
    
                    ]
                ]
            ]


        },

        communication: { // 联系方式
            name: "联系方式",
            push: "：",
            arr: [
                [
                    [
                        {
                            tips: "电话",
                            val: "17610199318"
                        },
                        {
                            tips: "邮箱",
                            val: "mainc@foxmail.com"
                        },
                        {
                            tips: "网站",
                            val: "red-spid.github.io//curriculumVitae/",
                            url: "red-spid.github.io//curriculumVitae/"
                        }
                    ],
                ]
            ]

        },

        openSourceProject: { // 开源项目
            name: "开源项目",
            push: "",
            arr: [
                [
                    [
                        {
                            tips: "",
                            val: "个人博客 - 使用 vue + vuex + js 构建的个人网站，个人简历、文章及留言版展示",
                            url: "red-spid.github.io//curriculumVitae/"
                        },
                    ],
                ]
            ]
        },

        MasterSkills: { // 技能掌握
            name: "技能掌握",
            push: "",
            arr: [
                [
                    [
                        {
                            tips: "",
                            val: "- HTML/CSS能与UI对接，重构网站静态页面。 "
                            // - 五年前端开发经验，两年项目管理经验
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 基础技能：掌握HTML/HTML5、(css/css3)、JavaScript(ES6+), 掌握NodeJS。"
                        }
                    ],
                    [
                        {
                            tips: "",
                            val: "- 业务交互：掌握Git、uni-app，掌握Vue基础原理和使用。"
                        }
                    ],
                    [
                        {
                            tips: "",
                            val: "- 长期维护线上个人技术博客，能独立完成项目开发，前后端通调"
                        }
                    ]
                ]
            ]

        },

        handsOnBackground: { // 工作经验
            name: "工作经验",
            push: "",
            arr: [

                [
                    [
                        {
                            tips: "",
                            val: "北京哈彼树科技有限公司 （ 2019年4月 ~  2020年10月 ）",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "前端工程师",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 主导开发多端项目",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 主要负责技术选型、核心开发、性能优化、前端工程化，制定并规范团队协作模式",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 项目技术难点突破，承担核心功能开发",
                        },
                    ],
                ],

                [
                    [
                        {
                            tips: "",
                            val: "北京雀科科技有限公司 （ 2019年10月 ~  2020年2月 ）",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "前端工程师",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 负责公司业务与活动静态页开发及数据交互",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 移动端、PC端各浏览器兼容适配",
                        },
                    ],
                ]
                
            ]
        },

        projectExperience: { //项目经验
            name: "项目经验",
            push: "",
            arr: [
                [
                    [
                        {
                            tips: "",
                            val: "Quick Loan Pro （ 2020-4 ~  2020-10 ）",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "项目负责人/前端开发",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "一款跨国提供贷款的app,帮您解决急需用钱的需求",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "工作内容：",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 项目基础框架搭建，核心功能开发。",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: " - 参与基础包、公共组件库的建设，采用组件化和函数式编程，对公共模块进行抽离封装。",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: " - 负责功能：登录流程、首页展示、东游记、作业、我的。",
                        },
                    ],
                    [
                        {
                            tips:"",
                            val:"主要成就：",
                            bold: true,

                        }
                    ],
                    [
                        {
                            tips:"",
                            val:"- 累计注册用户申请总额到 ₹7,000,00"
                        }
                    ]
                ],

                [
                    [
                        {
                            tips: "",
                            val: "东东记单词app （ 2018-10 ~  2020-2 ）",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "项目负责人/前端开发",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "东东记单词是一款专业的学习英语软件，拥有非常丰富的学习主题，用户可以随意使用，一键规划学习方案，针对不同的孩子，提供最合适的学习计划，高效学习，针对薄弱方面进行高效学习。",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "工作内容：",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 参与项目需求研讨、项目架构、技术选型",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 使用 APICloud + Axios 等技术栈开发 App",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: " - 负责功能：登录流程、首页展示、东游记、作业、我的。",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "解决难点：",
                            bold: true,

                        },
                    ],
                    [
                        {
                            tips:"",
                            val:"- 用户权限分级，多层嵌套菜单树热渲染，人物关系可视化图谱，全局数据维护"
                        }
                    ]
                ]
            ]
        },

        selfEvaluation: { // 自我评价
            name: "自我评价",
            push: "",
            arr: [
                [
                    [
                        {
                            tips: "",
                            val: "细节把握细致，性格外向开朗，敢于承担责任。"
                        },
                    ],
                    // [
                    //     {
                    //         tips: "",
                    //         val: " 团队配合能力:善于沟通,有一定团队协作经验,具备一定的活动策划和组织协调能力。 "
                    //     }
                    // ],
                    // [
                    //     {
                    //         tips: "",
                    //         val: " 工作态度评价:良好的心态和责任感,吃苦耐劳,擅于管理时间,勇于面对变化和挑战。 "
                    //     }
                    // ],
                    // [
                    //     {
                    //         tips: "",
                    //         val: " 自主学习能力:习惯制定切实可行的学习计划,上岗后能积极主动学习岗位所需知识技能 "
                    //     }
                    // ]
                ]
            ]

        },

    },

    dropBYdrop:[
        {
            date:"2019.03.20",
            url:"/detail?id=5e9efd26601bd82819211a1e",
            img:"./img/uploads1.jpg",
            alt:"文章配图",
            tips:"ubuntu 从零搭建环境，部署项目",
            introduce:"从零开始搭建服务器环境的步骤"
        },
        {
            date:"2017.07.25",
            url:"/detail?id=5e9efd26601bd82819211a1e",
            img:"./img/uploads2.jpg",
            alt:"文章配图",
            tips:"express+mongoDB建立与前端通信的数据库",
            introduce:"学习过程中所记录的笔记，按着步骤来可以自己搭建一个能通信的服务器，遇到不懂的地方问度娘。在 我的码云和github上有搭建完成后的代码，前端用的Vue框架。 不完善的地方还在修改ing~"
        },
        {
            date:"2019.03.20",
            url:"/detail?id=5e9efd26601bd82819211a1e",
            img:"./img/uploads3.jpg",
            tips:"神奇的Cordova -- 利用H5进行APP开发",
            introduce:" 一直以来app的开发都分为android版本和ios版本,同一款app需要写两种版本，版本有差异不说，耗费的成本加成。cordova的出现就是一股清流，它能实现将h5页面打包成android或ios版本，实现了android、ios、pc端页面的统一。"
        },
        {
            date:"2019.03.20",
            url:"/detail?id=5e9efd26601bd82819211a1e",
            img:"./img/uploads4.jpg",
            tips:"谷歌地图初触电",
            introduce:"最近的项目里面用到了谷歌地图，以前开发过百度地图，但是都涉足很浅很浅，虽然这次也只用到了drawingManager下面几个画图组件。氮素！写几百行的代码实现出功能，这样充实的学习过程很令人满足讷。"
        },
        {
            date:"2019.03.20",
            url:"/detail?id=5e9efd26601bd82819211a1e",
            img:"./img/uploads5.jpg",
            tips:"快一个月没写文章总结了",
            introduce:"最近换工作，忙着找房子+搬家+努力生活，忙得已经近一个月没写总结了，虽然没写，但是我对前端滴热情一如以往。最近在学习微信小程序，微信小程序是个坑啊，才推出一两个月，api已经废除了好多了。"
        }
    ],

    commentsUer:{
        name:"昵称必填",
        mailbox:"xx@xx.xx",
        www:"http(s)://xx.xx",
        tips:"留言板",
        userIs:false,
        stateFalse:[
            "先登录吧！",
            "登录"
        ],
        stateTrue:[
            "谢谢你的留言",
            "退出"
        ]
    },

    comments:[

        {
            floor:{
                text:"楼",
                reply:"回复",
                num:1
            },
            
            user:{
                name:"simon",
                mailbox:"xx@xx.xx",
                www:"http(s)://xx.xx",
                content:"1111",
                releaseTime:"2021-11-12",
                is:true
            },

            antComment:[
                {
                    floor:{
                        reply:"回复",
                        num:1
                    },
                    
                    user:{
                        name:"simon",
                        mailbox:"xx@xx.xx",
                        www:"http(s)://xx.xx",
                        content:"2222---回复",
                        releaseTime:"2021-11-12",
                        is:true
                    },
                }
            ]

        },

        {
            floor:{
                text:"楼",
                reply:"回复",
                num:2
            },
            
            user:{
                name:"simon",
                mailbox:"xx@xx.xx",
                www:"http(s)://xx.xx",
                content:"222222",
                releaseTime:"2021-11-12",
                is:true
            },

            antComment:[
                {
                    floor:{
                        reply:"回复",
                        num:1
                    },
                    
                    user:{
                        name:"simon",
                        mailbox:"xx@xx.xx",
                        www:"http(s)://xx.xx",
                        content:" 333333  ---回复",
                        releaseTime:"2021-11-12",
                        is:true
                    },
                },
                {
                    floor:{
                        reply:"回复",
                        num:1
                    },
                    
                    user:{
                        name:"simon",
                        mailbox:"xx@xx.xx",
                        www:"http(s)://xx.xx",
                        content:" 4444444  ---回复",
                        releaseTime:"2021-11-12",
                        is:true
                    },
                }
            ]

        }
        
    ],

    signIn:{
        is:true,
        loadMore:"加载更多",
        loadOnly:5
    }

};

const getters = {

    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    }
}

const mutations = {

    computedDate(state,val){
        //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
        val.is = false;
        let dateBegin = new Date(val.releaseTime.replace(/-/g, "/"));//将-转化为/，使用new Date
        let dateEnd = new Date();//获取当前时间
        let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
        let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
        let leave1=dateDiff%(24*3600*1000) //计算天数后剩余的毫秒数
        let hours=Math.floor(leave1/(3600*1000))//计算出小时数
        //计算相差分钟数
        let leave2=leave1%(3600*1000) //计算小时数后剩余的毫秒数
        let minutes=Math.floor(leave2/(60*1000))//计算相差分钟数
        //计算相差秒数
        let leave3=leave2%(60*1000) //计算分钟数后剩余的毫秒数
        let seconds=Math.round(leave3/1000);

        //这里的dayDiff就是上文计算出的天数差
        let monthDiff=Math.floor(dayDiff/30);//以30天为一个月不够精准严谨


        let yearDiff=Math.floor(monthDiff/12);//获取相差的年份
        if(yearDiff>=1){
            val.interpolation=yearDiff+"年前";
            console.log( val.interpolation )
            return val.interpolation
        }
        
        //获取相差的月份
        if (monthDiff<12 && monthDiff > 0){
            val.interpolation=monthDiff+"个月前";//获取相差的月份
            console.log( val.interpolation )
            return val.interpolation
        }

        // 获取相差的天数
        if( dayDiff>=1 ){
            val.interpolation = dayDiff + "天前";
            console.log( val.interpolation )
            return val.interpolation
            console.log(" 相差 "+dayDiff+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
        }

        // 获取相差的小时
        if( hours >=1 ){
            val.interpolation = hours + "小时前";
            console.log( val.interpolation )
            return val.interpolation
        }

        if( minutes >= 1){
            val.interpolation = minutes + "小时前";
            console.log( val.interpolation )
            return val.interpolation
        }

        if( seconds >=1 ){
            val.interpolation = "刚刚发布";
            console.log( val.interpolation )
            return val.interpolation;
            // console.log(dateDiff+"时间差的毫秒数",dayDiff+"计算出相差天数",leave1+"计算天数后剩余的毫秒数"
            // ,hours+"计算出小时数",minutes+"计算相差分钟数",seconds+"计算相差秒数");
        }

    },

    increment(state) {
        // 变更状态
        state.count++
    },

    forlist(state,a){
      Object.keys(state.list).forEach(function(key){
        if(key == a){
            state.list[key].active = true;

        }else{
            state.list[key].active = false
        }
      })
    }
}

const actions = {

    computedDate(context,a){
        context.commit("computedDate",a);
    },

    forlist(context,a){
        context.commit("forlist",a);
    },
    increment(context) {
        context.commit('increment')
    }
}

const moduleA = {
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {}
}

const moduleB = {
    state: () => ({}),
    mutations: {},
    actions: {}
}

const xStore = new Vuex.Store({
    state: xState,
    getters: getters,
    mutations: mutations,
    actions: actions,
    module: {
        a: moduleA,
        b: moduleB
    }
});

export {
    xStore,xState
}
<template>
  <div>
    <Col align="left">
    <div>
      <div id="tab1" :style="{minHeight: '80vh',margin:'0 14px 0 0'}">
        <Tabs type="card">
          <Tab-pane label="数据透视" :style="{fontSize: '18px',minHeight: '85vh'}">
            <!-- <Draw></Draw> -->
            <Collapse accordion v-model="show" :style="{border:'none',maxHeight: '85vh',minHeight: '80vh',backgroundColor: 'rgba(0, 0, 0, 0.01)',overflowY:'scroll'}">
              <div>
                <div :style="{borderBottom:'1px solid rgba(54, 102, 116, 0.5)',margin:'0 30px 0 14px',}">
                  <p style="color:#ccffff;font-family: MicrosoftYaHei;font-size: 18px;">
                    <i class="icon iconfont icon-triangle-bottom" style="color:rgba(51, 255, 255, .4);padding-right:6px;"></i>实体（10）
                    <i class="icon iconfont icon-more" style="float:right"></i>
                  </p>
                </div>
                <Panel key="2" :style="{margin:'5px 30px 5px 30px'}" hide-arrow>
                  <Row type="flex" justify="space-between" class="code-row-bg" align="middle">
                    <Col span="10" align="left">
                    <p>人物
                      <Icon class="icon iconfont icon-triangle-bottom" style="color:#ccffff;opacity: 0.5;padding-left:6px" size="5"></Icon>
                    </p>
                    </Col>
                    <Col span="6" align="middle">
                    <p>39.3万</p>
                    </Col>
                    <Col span="8" align="left">
                    <div class="bar1" :style="{width: '100%'}"></div>
                    </Col>
                  </Row>
                  <div slot="content">
                    <Row type="flex" justify="space-between" class="code-row-bg" align="middle">
                      <Col span="10" align="left">
                      <p>外交官</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>3.7万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '18.3%'}"></div>
                      </Col>
                      <Col span="10" align="left">
                      <p>政治家</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>19.4万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '96%'}"></div>
                      </Col>
                      <Col span="10" align="left">
                      <p>军人</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>20.2万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '100%'}"></div>
                      </Col>
                      <Col span="10" align="left">
                      <p>恐怖分子</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>12.5万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '61.9%'}"></div>
                      </Col>
                    </Row>
                  </div>
                </Panel>
                <Panel key="3" :style="{margin:'5px 30px 5px 30px'}" hide-arrow>
                  <Row type="flex" justify="space-between" class="code-row-bg" align="middle">
                    <Col span="10" align="left">
                    <p>地点
                      <Icon class="icon iconfont icon-triangle-bottom" style="color:#ccffff;opacity: 0.5;padding-left:6px" size="5"></Icon>
                    </p>
                    </Col>
                    <Col span="6" align="middle">
                    <p>274.7万</p>
                    </Col>
                    <Col span="8" align="left">
                    <div class="bar1" :style="{width: '70%'}"></div>
                    </Col>
                  </Row>
                  <div slot="content">
                    <Row type="flex" justify="space-between" class="code-row-bg" align="middle">
                      <Col span="10" align="left">
                      <p>国家</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>102万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '37.1%'}"></div>
                      </Col>
                      <Col span="10" align="left">
                      <p>地理坐标</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>172.7万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '63.9%'}"></div>
                      </Col>
                    </Row>
                  </div>
                </Panel>
                <Panel key="4" :style="{margin:'5px 30px 5px 30px'}" hide-arrow>
                  <Row type="flex" justify="space-between" class="code-row-bg" align="middle">
                    <Col span="10" align="left">
                    <p>机构
                      <Icon class="icon iconfont icon-triangle-bottom" style="color:#ccffff;opacity: 0.5;padding-left:6px" size="5"></Icon>
                    </p>
                    </Col>
                    <Col span="6" align="middle">
                    <p>130万</p>
                    </Col>
                    <Col span="8" align="left">
                    <div class="bar1" :style="{width: '68%'}"></div>
                    </Col>
                  </Row>
                  <div slot="content">
                    <Row type="flex" justify="space-between" class="code-row-bg" align="middle">
                      <Col span="10" align="left">
                      <p>政党</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>7.17万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '55%'}"></div>
                      </Col>
                      <Col span="10" align="left">
                      <p>国际组织</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>12.01万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '70%'}"></div>
                      </Col>
                      <Col span="10" align="left">
                      <p>军事同盟</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>1.02万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '68%'}"></div>
                      </Col>
                      <Col span="10" align="left">
                      <p>区域组织</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>1.02万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '45%'}"></div>
                      </Col>
                      <Col span="10" align="left">
                      <p>组织</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>1.02万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '60%'}"></div>
                      </Col>
                      <Col span="10" align="left">
                      <p>企业</p>
                      </Col>
                      <Col span="6" align="middle">
                      <p>1.02万</p>
                      </Col>
                      <Col span="8" align="left">
                      <div class="bar1" :style="{width: '90%'}"></div>
                      </Col>
                    </Row>
                  </div>
                </Panel>
              </div>
              <div>
                <div :style="{borderBottom:'1px solid rgba(54, 102, 116, 0.5)',margin:'0 30px 0 14px'}">
                  <p style="color:#ccffff;font-family: MicrosoftYaHei;font-size: 18px;">
                    <i class="icon iconfont icon-triangle-bottom" style="color:rgba(51, 255, 255, .4);padding-right:6px"></i>事件（20）</p>
                </div>
                <Row type="flex" justify="space-between" class="code-row-bg" align="middle" :style="{margin:'0 30px 0 30px'}">
                  <Col span="10" align="left">
                  <p class="p-collapse">贸易战</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">9800</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar2" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">微软股票升值</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">9800</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar2" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">比尔盖 茨马云会面</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">492</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar2" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">全新XONE手柄</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">18229</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar2" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">下架Your Phone</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">18229</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar2" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">微软与亚马逊</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">18229</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar2" :style="{width: '68%'}"></div>
                  </Col>
                </Row>
              </div>
              <div>
                <div :style="{borderBottom:'1px solid rgba(54, 102, 116, 0.5)',margin:'0 30px 0 14px'}">
                  <p style="font-size:20px;color:#ccffff"><i class="icon iconfont icon-triangle-bottom" style="color:rgba(51, 255, 255, .4);padding-right:6px"></i>话题（20）</p>
                </div>
                <Row type="flex" justify="space-between" class="code-row-bg" align="middle" :style="{margin:'0 30px 0 30px'}">
                  <Col span="10" align="left">
                  <p class="p-collapse">政治</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">9800</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar3" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">经济</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">492</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar3" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">文化</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">18229</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar3" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">社会</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">9800</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar3" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">教育</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">492</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar3" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">军事</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">18229</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar3" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">安全</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">18229</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar3" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">科学</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">18229</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar3" :style="{width: '68%'}"></div>
                  </Col>
                  <Col span="10" align="left">
                  <p class="p-collapse">自然</p>
                  </Col>
                  <Col span="6" align="middle">
                  <p class="p-collapse">18229</p>
                  </Col>
                  <Col span="8" align="left">
                  <div class="bar3" :style="{width: '68%'}"></div>
                  </Col>
                </Row>
              </div>
            </Collapse>
          </Tab-pane>
          <Tab-pane label="目标详情">
            <!-- <div class="target-detail-div">
                  <p class="target-detail-title">普京回应美国对俄新一轮制裁适得其反 毫无意义</p>
                  <p class="target-detail-content">
                    <Icon size="16" class="icon iconfont icon-time target-detail-img">
                    </Icon>2018-04-21 12:34 | British
                  </p>
                </div>
                <div class="target-detail-div">
                  <p class="target-detail-title">普京回应美国对俄新一轮制裁适得其反 毫无意义</p>
                  <p class="target-detail-content">
                    <Icon size="16" class="icon iconfont icon-time target-detail-img">
                    </Icon>2018-04-21 12:34 | British
                  </p>
                </div>
                <div class="target-detail-div">
                  <p class="target-detail-title">普京回应美国对俄新一轮制裁适得其反 毫无意义</p>
                  <p class="target-detail-content">
                    <Icon size="16" class="icon iconfont icon-time target-detail-img">
                    </Icon>2018-04-21 12:34 | British
                  </p>
                </div>
                <div class="target-detail-div">
                  <p class="target-detail-title">普京回应美国对俄新一轮制裁适得其反 毫无意义</p>
                  <p class="target-detail-content">
                    <Icon size="16" class="icon iconfont icon-time target-detail-img">
                    </Icon>2018-04-21 12:34 | British
                  </p>
                </div>
                <div class="target-detail-div">
                  <p class="target-detail-title">普京回应美国对俄新一轮制裁适得其反 毫无意义</p>
                  <p class="target-detail-content">
                    <Icon size="16" class="icon iconfont icon-time target-detail-img">
                    </Icon>2018-04-21 12:34 | British
                  </p>
                </div> -->
            <div :style="{maxHeight: '85vh',minHeight: '80vh',backgroundColor: 'rgba(0, 0, 0, 0.01)',overflowY:'scroll'}">
              <!-- 人物信息 -->
              <!-- <Row type="flex" justify="space-between" class="code-row-bg" align="middle" :style="{margin:'0'}" v-for="info in itemInfo"> -->
              <Row type="flex" justify="start" align="start" class="code-row-bg" :style="{margin:'0',padding:'0 10px'}" v-for="info in infos" v-show="singlePerson">
                <Col span="16">
                <h1 class="infoName" style="padding-left: 10px;">{{info.name}}</h1>
                </Col>
                <Col span="8" :style="{margin:'0'}">
                <img :src="info.img" :style="{borderRadius:'20px',top:'0',right:'30px',maxHeight:'120px',position:'absolute'}">
                </Col>
                <Col span="3" class="infoKey">国家</Col>
                <Col span="10" class="infoValue">{{info.country}}</Col>
                <Col span="11"></Col>
                <Col span="3" class="infoKey">机构</Col>
                <Col span="10" class="infoValue">{{info.org}}</Col>
                <Col span="11"></Col>
                <Col span="3" class="infoKey">配偶</Col>
                <Col span="10" class="infoValue">{{info.spouse}}</Col>
                <Col span="11"></Col>
                <Col span="3" class="infoKey">学校</Col>
                <Col span="10" class="infoValue">{{info.school}}</Col>
                <Col span="11"></Col>
                <Col span="3" class="infoKey">标签</Col>
                <Col span="21" class="infoValue">{{info.tag}}</Col>
                <Col span="3" class="infoKey">简介</Col>
                <Col span="21" class="infoValue">{{info.introduction}}</Col>
                <Col span="24">
                  <h2 class="infoTitle">倾向性分析</h2>
                  <Row type="flex" justify="space-around" align='middle' class="code-row-bg" :style="{ borderBottom:'solid 1px rgba(51, 255, 255, 0.2) !important;',margin:'0'}">
                    <Col span="5">
                    <Circle :percent="80" :size='80' >
                      <span class="demo-Circle-inner" style="font-size:14px">80%<br>负面</span>
                    </Circle>
                    </Col>
                    <Col span="5">
                    <Circle :percent="80" :size='80' stroke-color="#ff5500" >
                      <span class="demo-Circle-inner" style="font-size:14px">80%<br>中立</span>
                    </Circle>
                    </Col>
                    <Col span="5">
                    <Circle :percent="80" :size='80' >
                      <span class="demo-Circle-inner" style="font-size:14px">80%<br>正面</span>
                    </Circle>
                    </Col>
                  </Row>
                </Col>
                <Col span="24" :style="{height:'10vh'}">
                <Divider />
                </Col>
              </Row>
              <Row type="flex" justify="start" align="start" class="code-row-bg" :style="{margin:'0',padding:'0 10px'}" v-for="info in infos" v-show="!singlePerson">
              111
              </Row>
            </div>
          </Tab-pane>
        </Tabs>
      </div>
      <Modal v-model="modal01" width="80%" footer-hide>
        <Row type="flex" justify="space-between" class="code-row-bg" align="middle" :style="{margin:'0'}">
          <Col span="7" class="leftModal" type="flex" justify="space-between" align="middle">
          <!-- 搜索框 -->
          <div style="width:80%" id="idNumber2">
            <i class="icon iconfont icon-search" style="position: absolute;
                    color: rgb(51, 255, 255);
                    width:50px;
                    left:10px;
                    opacity: 0.4;"></i>
            <input type="text" />
          </div>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          <p class="p-collapse">政治</p>
          </Col>
          <Col span="17" align="middle" class="rightModal">
          <p class="p-collapse">9800</p>
          </Col>
        </Row>
      </Modal>
    </div>
    </Col>
  </div>
</template>
<script>
  /* eslint-disable */
  export default {
    // props: {
    //   eventData: {
    //     type: Array,
    //     default: [0, 0, 0] //这样可以指定默认的值
    //   },
    //   detailData:{
    //     type: Array,
    //     default: [0, 0, 0] //这样可以指定默认的值
    //   }
    // },
    data() {
      return {
        show: [],
        eventheighttdiv: 0,
        eventheight: 0,
        modal01: false,
        closable: true,
        singlePerson: false,
        infos: [{
            name: "普京",
            img: "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=53e28aef2f2dd42a4b0409f9625230d0/4a36acaf2edda3ccf81167a60be93901203f92bb.jpg",
            country: '俄罗斯',
            org: '俄罗斯联邦',
            spouse: '柳德米拉·什克列布涅娃',
            school: '列宁格勒国立大学',
            tag: '俄罗斯联邦政府总统／ 俄罗斯第2任总统／第7届俄罗斯总理／第11届俄罗斯总理',
            introduction: `弗拉基米尔·弗拉基米罗维奇·普京，俄罗斯第2任、第4任总统。曾担任俄罗斯总理、统一俄罗斯党主席、俄白联盟部长会议主席。
  2000年执政以来，普京致力于复兴俄罗斯超级大国地位，对内加强联邦政府的权力，整顿经济秩序，打击金融寡头，加强军队建设；对外努力改善国际环境…
  恢复了世界性强国地位。`
          }
          ,
          {
            name: "习近平",
            img: "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=468864cdf0039245b5b8e95de6fdcfa7/54fbb2fb43166d22ca0c87944a2309f79052d2b3.jpg",
            country: '中华人名共和国',
            org: '中华人名共和国',
            spouse: '彭丽媛',
            school: '清华大学人文社会学院马克思主义理论与思想政治教育专业',
            tag: '现任中国共产党中央委员会总书记、中共中央军事委员会主席、中华人民共和国主席、中华人民共和国中央军事委员会主席',
            introduction: `953年6月生，陕西富平人，1969年1月参加工作，1974年1月加入中国共产党，清华大学人文社会学院马克思主义理论与思想政治教育专业毕业，在职研究生学历，法学博士学位。
  现任中国共产党中央委员会总书记，中共中央军事委员会主席，中华人民共和国主席，中华人民共和国中央军事委员会主席。
  中共第十五届中央候补委员，十六届、十七届、十八届、十九届中央委员，十七届中央政治局委员、常委、中央书记处书记，十八届、十九届中央政治局委员、常委、中央委员会总书记。第十一届全国人大第一次会议当选为中华人民共和国副主席。十七届五中全会增补为中共中央军事委员会副主席。第十一届全国人大常委会第十七次会议任命为中华人民共和国中央军事委员会副主席。十八届一中全会任中共中央军事委员会主席。第十二届全国人大第一次会议当选为中华人民共和国主席、中华人民共和国中央军事委员会主席`
          }
        ]
      };
    },
    computed: {
      menuitemClasses: function() {
        return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
      }
    },
    mounted() {
      var mthis = this;
      // mock.get("/getNodeData").then(function(res) {
      //   mthis.initCharts();
      //   mthis.netchart.addData(res.data.data[0]);
      // });
      window.onresize = function() {
        // // alert(document.body.clientHeight)
        this.eventheight =
          (document.body.clientHeight * 0.99 - 64 - 70 - 45 - 20) * 0.8 -
          55 +
          "px";
        this.eventheighttdiv =
          (document.body.clientHeight * 0.99 - 64 - 70 - 45 - 20) * 0.8 + "px";
      };
      this.eventheight =
        (document.body.clientHeight * 0.99 - 64 - 70 - 45 - 20) * 0.8 - 55 + "px";
      this.eventheighttdiv =
        (document.body.clientHeight * 0.99 - 64 - 70 - 45 - 20) * 0.8 + "px";
      // // alert(this.netheight)
    }
  };
</script>
<style>
  .pfront {
    width: 36px;
    height: 17px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 0px;
    color: #ccffff;
  }
  .infoKey {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 0px;
    color: #ccffff;
    opacity: 0.5;
    /* min-width: 30px; */
    padding-left: 10px;
  }
  .infoValue {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 0px;
    color: #ccffff;
    /* min-width: 200px; */
    padding-right: 20px;
  }
  .infoName {
    font-family: MicrosoftYaHei;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 26px;
    letter-spacing: 0px;
    color: #ccffff;
  }
  .infoTitle {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 30px;
    letter-spacing: 0px;
    color: #ccffff;
  }
  /* 环内文字 */
  .demo-Circle-inner{
    font-family: PARaDOS !important;
    font-size: 14px !important;
    font-weight: normal !important;
    font-stretch: normal !important;
    line-height: 20px !important;
    letter-spacing: 0px !important;
    color: #ccffff !important;
    opacity: 0.5;
  }
</style>

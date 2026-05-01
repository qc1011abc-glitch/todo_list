export default function Home() {
  return (
    <>
      <header className="nav">
          <a className="brand" href="#top" aria-label="沐汪宠物洗护店首页">
            <span className="brand-mark">沐</span>
            <span>沐汪宠物洗护店</span>
          </a>
          <nav className="nav-links" aria-label="页面导航">
            <a href="#services">服务</a>
            <a href="#prices">价格</a>
            <a href="#process">流程</a>
            <a href="#reviews">口碑</a>
            <a href="#store">门店</a>
            <a className="btn" href="#booking">预约</a>
          </nav>
        </header>
      
        <main id="top">
          <section className="hero">
            <div className="hero-content">
              <p className="eyebrow">一宠一浴缸，温柔低压洗护</p>
              <h1>让毛孩子干净、放松、香香回家</h1>
              <p>沐汪为猫狗提供洗澡、精修、护理和皮毛养护服务。透明报价，全程可视，适合怕水、怕吹风和第一次到店的小朋友。</p>
              <div className="hero-actions">
                <a className="btn" href="#booking">立即预约</a>
                <a className="btn secondary" href="#prices">查看套餐</a>
              </div>
              <div className="hero-stats" aria-label="门店数据">
                <div className="stat">
                  <strong>4.9</strong>
                  <span>顾客平均评分</span>
                </div>
                <div className="stat">
                  <strong>30min</strong>
                  <span>到店基础评估</span>
                </div>
                <div className="stat">
                  <strong>1对1</strong>
                  <span>专属美容师服务</span>
                </div>
              </div>
            </div>
          </section>
      
          <section className="services" id="services">
            <div className="section-head">
              <h2>常用洗护服务</h2>
              <p>按宠物体型、毛量和状态安排护理方式，用品温和低敏，洗护后会同步毛发和皮肤观察结果。</p>
            </div>
            <div className="grid">
              <article className="service-card">
                <div className="icon">浴</div>
                <h3>基础沐浴</h3>
                <p>清洁、护毛、吹干、梳理、耳眼清洁、指甲修剪，适合日常定期护理。</p>
              </article>
              <article className="service-card">
                <div className="icon">剪</div>
                <h3>造型精修</h3>
                <p>根据品种、季节和主人偏好设计造型，保留可爱轮廓，也方便日常打理。</p>
              </article>
              <article className="service-card">
                <div className="icon">护</div>
                <h3>皮毛养护</h3>
                <p>针对干燥、打结、换毛期、敏感肌做温和护理，减少毛躁和皮屑困扰。</p>
              </article>
            </div>
          </section>
      
          <section className="price-band" id="prices">
            <div className="section-head">
              <h2>洗护套餐</h2>
              <p>最终价格会根据体型、毛量、打结情况微调，到店评估后再开始服务。</p>
            </div>
            <div className="grid">
              <article className="price-card">
                <div className="price-top">
                  <h3>小型犬洗护</h3>
                  <div className="price"><strong>¥88</strong><span>起</span></div>
                </div>
                <ul>
                  <li>适合 10kg 以下小型犬</li>
                  <li>基础清洁、吹干、梳毛</li>
                  <li>耳眼清洁与指甲修剪</li>
                </ul>
              </article>
              <article className="price-card featured">
                <div className="price-top">
                  <h3>猫咪舒缓洗护</h3>
                  <div className="price"><strong>¥128</strong><span>起</span></div>
                </div>
                <ul>
                  <li>低噪音吹干与安抚流程</li>
                  <li>长短毛猫均可预约</li>
                  <li>可加选浮毛深梳服务</li>
                </ul>
              </article>
              <article className="price-card">
                <div className="price-top">
                  <h3>全身造型</h3>
                  <div className="price"><strong>¥168</strong><span>起</span></div>
                </div>
                <ul>
                  <li>适合贵宾、比熊、雪纳瑞等</li>
                  <li>含洗护、修剪、细节造型</li>
                  <li>预约前可沟通参考造型</li>
                </ul>
              </article>
            </div>
          </section>
      
          <section className="process" id="process">
            <div className="section-head">
              <h2>到店流程</h2>
              <p>每一步都以宠物舒适度为优先，紧张或不适会及时暂停并与主人沟通。</p>
            </div>
            <div className="timeline">
              <article className="step">
                <h3>状态评估</h3>
                <p>确认年龄、体重、毛结、皮肤状态和过往洗护体验。</p>
              </article>
              <article className="step">
                <h3>分区清洗</h3>
                <p>使用适配香波，避开眼耳口鼻，按毛发生长方向冲洗。</p>
              </article>
              <article className="step">
                <h3>低压吹干</h3>
                <p>分段吹干和梳理，降低噪音刺激，避免潮湿残留。</p>
              </article>
              <article className="step">
                <h3>交付反馈</h3>
                <p>说明护理结果、发现的问题和下一次护理建议。</p>
              </article>
            </div>
          </section>
      
          <section className="reviews" id="reviews">
            <div className="section-head">
              <h2>顾客反馈</h2>
              <p>干净只是开始，让宠物愿意下次再来，才是我们在意的事情。</p>
            </div>
            <div className="grid">
              <article className="review-card">
                <div className="stars" aria-label="五星好评">
                  <span>☆</span>
                  <span>爪</span>
                  <span>☆</span>
                  <span>爪</span>
                  <span>☆</span>
                </div>
                <h3>小豆主人</h3>
                <p>第一次洗澡不再发抖，美容师很有耐心，还把耳朵情况说得很清楚。</p>
              </article>
              <article className="review-card">
                <div className="stars" aria-label="五星好评">
                  <span>☆</span>
                  <span>爪</span>
                  <span>☆</span>
                  <span>爪</span>
                  <span>☆</span>
                </div>
                <h3>奶盖主人</h3>
                <p>猫咪吹干很蓬松，没有香精味，回家以后状态也很放松。</p>
              </article>
              <article className="review-card">
                <div className="stars" aria-label="五星好评">
                  <span>☆</span>
                  <span>爪</span>
                  <span>☆</span>
                  <span>爪</span>
                  <span>☆</span>
                </div>
                <h3>卷卷主人</h3>
                <p>造型剪得圆润自然，腿毛细节处理得很干净，拍照特别好看。</p>
              </article>
            </div>
          </section>
      
          <section className="store" id="store">
            <div className="section-head">
              <h2>门店信息</h2>
              <p>到店前可以先电话确认档期和宠物状态，猫咪、幼宠、老年宠建议提前说明。</p>
            </div>
            <div className="store-wrap">
              <div className="store-panel">
                <h3>沐汪宠物洗护店 · 陕西北路店</h3>
                <ul className="store-list">
                  <li>
                    <strong>门店地址</strong>
                    <span>上海市普陀区宜川路街道陕西北路1620号</span>
                  </li>
                  <li>
                    <strong>营业时间</strong>
                    <span>周一至周日 10:00 - 20:30，节假日正常营业</span>
                  </li>
                  <li>
                    <strong>预约电话</strong>
                    <span>400-820-1314</span>
                  </li>
                  <li>
                    <strong>微信预约</strong>
                    <span>搜索 WePetCare 或到店扫码预约</span>
                  </li>
                  <li>
                    <strong>交通停车</strong>
                    <span>近陕西北路、宜昌路路口，周边有临停与路侧停车位</span>
                  </li>
                  <li>
                    <strong>服务范围</strong>
                    <span>犬猫洗护、造型修剪、皮毛护理、浮毛深梳、耳眼清洁</span>
                  </li>
                </ul>
              </div>
              <div className="map-panel" aria-label="陕西北路1620号门店位置示意图">
                <img className="cute-map" src="/assets/store-map-ai.png" alt="清新可爱的宠物店位置地图，标记沐汪宠物洗护店" />
                <span className="map-tag shop">沐汪宠物洗护店</span>
                <span className="map-tag road-a">陕西北路</span>
                <span className="map-tag road-b">宜昌路</span>
                <span className="map-tag landmark-a">普陀区人民医院</span>
                <span className="map-tag landmark-b">星海大厦</span>
                <span className="map-tag address">陕西北路1620号</span>
                <div className="map-card">
                  <strong>位置提示</strong>
                  <p>门店位于上海市普陀区宜川路街道陕西北路1620号，靠近陕西北路与宜昌路一带。</p>
                </div>
              </div>
            </div>
          </section>
      
          <section className="contact" id="booking">
            <div className="contact-wrap">
              <div>
                <h2>预约一次舒服的洗护</h2>
                <p>填写基础信息后，门店会按宠物体型和服务项目确认档期。建议提前一天预约周末时段。</p>
                <div className="info-list">
                  <div className="info-item">
                    <strong>营业时间</strong>
                    <span>周一至周日 10:00 - 20:30</span>
                  </div>
                  <div className="info-item">
                    <strong>门店地址</strong>
                    <span>上海市普陀区宜川路街道陕西北路1620号</span>
                  </div>
                  <div className="info-item">
                    <strong>预约电话</strong>
                    <span>400-820-1314</span>
                  </div>
                </div>
              </div>
              <form>
                <div className="form-row">
                  <label>
                    主人姓名
                    <input type="text" name="name" placeholder="请输入姓名" />
                  </label>
                  <label>
                    联系电话
                    <input type="tel" name="phone" placeholder="请输入手机号" />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    宠物类型
                    <select name="pet">
                      <option>小型犬</option>
                      <option>中大型犬</option>
                      <option>猫咪</option>
                      <option>其他宠物</option>
                    </select>
                  </label>
                  <label>
                    服务项目
                    <select name="service">
                      <option>基础沐浴</option>
                      <option>造型精修</option>
                      <option>皮毛养护</option>
                      <option>到店评估后决定</option>
                    </select>
                  </label>
                </div>
                <label>
                  预约日期
                  <input type="date" name="date" />
                </label>
                <label>
                  备注
                  <textarea name="message" placeholder="例如：怕吹风、皮肤敏感、毛发打结、想参考的造型"></textarea>
                </label>
                <button className="btn" type="button">提交预约</button>
              </form>
            </div>
          </section>
        </main>
      
        <footer>
          © 2026 沐汪宠物洗护店 版权所有
        </footer>
    </>
  );
}

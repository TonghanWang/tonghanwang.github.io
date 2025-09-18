import Layouts from "@layouts/Layouts";

import { getSortedPostsData } from "@library/posts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const Story = ( props ) => {
  return (
    <Layouts 
      // rightPanelBackground={"/img/person/bg-4.jpg"}
      // rightPanelImg={"/img/person/4.png"}
        fullWidth={true}
    >
      <PageBanner pageTitle={"Publications"} />
      
      {/* story */}
      <section>
          <div className="row">
              <div className="col-xl-12">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Preprint Papers</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Policy-to-Language: Train LLMs to Explain Decisions
                                      with Flow-Matching Generated Rewards</h4>
                                  <div className="mil-text-sm">2025</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Xinyi Yang, Liang Zeng, Heng Dong, Chao Yu, Xiaoran Wu, Huazhong Yang, Yu Wang, Milind
                                  Tambe, Tonghan Wang
                              </p>
                              <a href="https://arxiv.org/abs/2502.12530"> PDF </a>
                          </li>
                      </ul>
                  </div>
              </div>

              <div className="col-xl-12">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Conference Papers</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Composite Flow Matching for Reinforcement Learning with
                                      Shifted-Dynamics Data</h4>
                                  <div className="mil-text-sm">2025</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Lingkai Kong*, Haichuan Wang*, Tonghan Wang*, Guojun Xiong, Milind Tambe
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  NeurIPS 2025
                              </p>
                              <p style={{color: 'blue', fontSize: '18px'}}>
                                  Spotlight Paper
                              </p>
                              <a href="https://arxiv.org/pdf/2505.23062"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>BundleFlow: Deep Menus for Combinatorial Auctions by
                                      Diffusion-Based Optimization</h4>
                                  <div className="mil-text-sm">2025</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Tonghan Wang, Yanchen Jiang, David C. Parkes
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  NeurIPS 2025
                              </p>
                              <a href="https://arxiv.org/abs/2502.15283"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Adaptive Frontier Exploration on Graphs with
                                      Applications to Network-Based Disease Testing</h4>
                                  <div className="mil-text-sm">2025</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Davin Choo*, Yuqi Pan*, Tonghan Wang, Milind Tambe, Alastair van Heerden, Cheryl
                                  Johnson

                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  NeurIPS 2025
                              </p>
                              <a href="https://arxiv.org/abs/2505.21671"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Robust Optimization with Diffusion Models for Green
                                      Security</h4>
                                  <div className="mil-text-sm">2025</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Lingkai Kong, Haichuan Wang, Yuqi Pan, Cheol Woo Kim, Mingxiao Song, Alayna Nguyen,
                                  Tonghan Wang, Haifeng Xu, Milind Tambe
                              </p>
                              <p style={{display: 'flex', gap: '10px', fontSize: '18px'}}>
                                  <span style={{color: 'cornflowerblue'}}>UAI 2025</span>
                              </p>
                              <a href="https://openreview.net/forum?id=lLdal3hZtz&noteId=lLdal3hZtz"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>On Diffusion Models for Multi-Agent Partial
                                      Observability: Shared Attractors, Error Bounds, and Composite Flow</h4>
                                  <div className="mil-text-sm">2025</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Tonghan Wang*, Heng Dong*, Yanchen Jiang, David C. Parkes, Milind Tambe
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  AAMAS 2025
                              </p>
                              <p style={{color: 'blue', fontSize: '18px'}}>
                                  Oral
                              </p>
                              <a href="https://arxiv.org/pdf/2410.13953"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>The Bandit Whisperer: Communication Learning for
                                      Restless Bandits</h4>
                                  <div className="mil-text-sm">2024</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Tonghan Wang*, Yunfan Zhao*, Dheeraj Mysore Nagaraj, Aparna Taneja, Milind Tambe
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  AAAI 2025
                              </p>
                              <p style={{color: 'blue', fontSize: '18px'}}>
                                  Oral
                              </p>
                              <a href="https://arxiv.org/abs/2408.05686"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>GemNet: Menu-Based, Strategy-Proof Multi-Bidder
                                      Auctions
                                      Through Deep Learning</h4>
                                  <div className="mil-text-sm">2024</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Tonghan Wang*, Yanchen Jiang*, David C. Parkes
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ACM EC 2024
                              </p>
                              <p style={{display: 'flex', gap: '10px', fontSize: '18px'}}>
                                  <span style={{color: 'blue'}}>Best Paper</span>
                                  <span style={{color: 'black'}}>AI Track</span>
                              </p>
                              <a href="https://arxiv.org/abs/2406.07428"> PDF </a> ｜ <a
                              href="https://dl.acm.org/action/showFmPdf?doi=10.1145%2F3670865"> Press </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Multi-Sender Persuasion: A Computational
                                      Perspective</h4>
                                  <div className="mil-text-sm">2024</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Tonghan Wang*, Safwan Hossain*, Tao Lin*, Yiling Chen, David C. Parkes, Haifeng Xu
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ICML 2024
                              </p>
                              <a href="https://openreview.net/forum?id=8JFIKpzumn"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Position: Social Environment Design Should be Further
                                      Developed for AI-based Policy-Making</h4>
                                  <div className="mil-text-sm">2024</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Edwin Zhang, Sadie Zhao, Tonghan Wang, Safwan Hossain, Henry Gasztowtt, Stephan Zheng,
                                  David C. Parkes, Milind Tambe, Yiling Chen
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ICML 2024
                              </p>
                              <a href="https://openreview.net/forum?id=S6a6gHvMWx"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Deep Contract Design via Discontinuous Neural
                                      Networks</h4>
                                  <div className="mil-text-sm">2023</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Tonghan Wang, Paul Dütting, Dmitry Ivanov, Inbal Talgam-Cohen, David C. Parkes
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  NeurIPS 2023
                              </p>
                              <a href="https://openreview.net/forum?id=q8mH2d6uw2"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Symmetry-Aware Robot Design with Structured
                                      Subgroups</h4>
                                  <div className="mil-text-sm">2023</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Heng Dong, Junyu Zhang, Tonghan Wang, Chongjie Zhang
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ICML 2023
                              </p>
                              <a href="https://arxiv.org/abs/2306.00036"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Low-Rank Modular Reinforcement Learning via Muscle
                                      Synergy</h4>
                                  <div className="mil-text-sm">2022</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Tonghan Wang*, Heng Dong*, Jiayuan Liu, Chongjie Zhang
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  NeurIPS 2022
                              </p>
                              <a href="https://proceedings.neurips.cc/paper_files/paper/2022/hash/7da6005a8d6942e8b328357da2872aed-Abstract-Conference.html"> PDF </a> ｜ <a
                              href="https://github.com/drdh/Synergy-RL"> Code </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Non-Linear Coordination Graphs</h4>
                                  <div className="mil-text-sm">2022</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Tonghan Wang*, Yipeng Kang*, Qianlan Yang, Xiaoran Wu, Chongjie Zhang
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  NeurIPS 2022
                              </p>
                              <p style={{color: 'blue', fontSize: '18px'}}>
                                  Spotlight Paper
                              </p>
                              <a href="https://openreview.net/forum?id=OcNoF7qA4t"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Self-Organized Polynomial-Time Coordination Graphs</h4>
                                  <div className="mil-text-sm">2022</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Qianlan Yang, Weijun Dong, Zhizhou Ren, Jianhao Wang, <span className="underline">Tonghan Wang</span>,
                                  Chongjie Zhang
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ICML 2022
                              </p>
                              <a href="https://proceedings.mlr.press/v162/yang22a"> PDF </a> | <a
                              href="https://github.com/yanqval/sop-cg"> Code </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Context-Aware Sparse Deep Coordination Graphs</h4>
                                  <div className="mil-text-sm">2022</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  <span className="underline">Tonghan Wang*</span>, Liang Zeng*, Weijun Dong, Qianlan
                                  Yang,
                                  Chongjie Zhang
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ICLR 2022
                              </p>
                              <p style={{color: 'blue', fontSize: '18px'}}>
                                  Spotlight Paper
                              </p>
                              <a href="https://arxiv.org/abs/2106.02886"> PDF </a> | <a
                              href="https://github.com/TonghanWang/CASEC-MACO-benchmark"> Code </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Celebrating Diversity in Shared Multi-Agent
                                      Reinforcement Learning</h4>
                                  <div className="mil-text-sm">2021</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Chenghao Li*, <span className="underline">Tonghan Wang*</span>, Chengjie Wu, Qianchuan
                                  Zhao, Jun Yang, Chongjie Zhang <br/>
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  NeurIPS 2021
                              </p>
                              <a href="https://arxiv.org/abs/2106.02195"> PDF </a> | <a
                              href="https://sites.google.com/view/celebrate-diversity-shared"> Website </a> | <a
                              href="https://github.com/lich14/CDS"> Code </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>RODE: Learning Roles to Decompose Multi-Agent
                                      Tasks</h4>
                                  <div className="mil-text-sm">2021</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  <span className="underline">Tonghan Wang</span>, Tarun Gupta, Anuj Mahajan, Bei Peng,
                                  Shimon Whiteson, and Chongjie Zhang
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ICLR 2021
                              </p>
                              <a href="https://arxiv.org/abs/2010.01523"> PDF </a> | <a
                              href="https://sites.google.com/view/rode-marl"> Website </a> | <a
                              href="https://github.com/TonghanWang/RODE"> Code </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>DOP: Off-Policy Multi-Agent Decomposed Policy
                                      Gradients</h4>
                                  <div className="mil-text-sm">2021</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  <span className="underline">Tonghan Wang</span>*, Yihan Wang*, Beining Han*, Heng
                                  Dong, and Chongjie Zhang <br/>
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ICLR 2021
                              </p>
                              <a href="https://arxiv.org/abs/2007.12322"> PDF </a> | <a
                              href="https://sites.google.com/view/dop-mapg"> Video </a> | <a
                              href="https://github.com/TonghanWang/DOP"> Code </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Incorporating Pragmatic Reasoning Communication into
                                      Emergent Language</h4>
                                  <div className="mil-text-sm">2020</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Yipeng Kang, <span className="underline">Tonghan Wang</span>, Gerard de Melo <br/>
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  NeurIPS 2020
                              </p>
                              <p style={{color: 'blue', fontSize: '18px'}}>
                                  Spotlight Paper
                              </p>
                              <a href="https://arxiv.org/abs/2006.04109"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>ROMA: Multi-Agent Reinforcement Learning with Emergent
                                      Roles</h4>
                                  <div className="mil-text-sm">2020</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  <span className="underline">Tonghan Wang</span>, Heng Dong, Victor Lesser, and
                                  Chongjie Zhang <br/>
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ICML 2020
                              </p>
                              <a href="https://arxiv.org/abs/2003.08039"> PDF </a> | <a
                              href="https://sites.google.com/view/romarl"> Website </a> | <a
                              href="https://github.com/TonghanWang/ROMA"> Code </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Influence-Based Multi-Agent Exploration</h4>
                                  <div className="mil-text-sm">2020</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  <span className="underline">Tonghan Wang</span>*, Jianhao Wang*, Yi Wu, and Chongjie
                                  Zhang <br/>
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ICLR 2020
                              </p>
                              <p style={{color: 'blue', fontSize: '18px'}}>
                                  Spotlight Paper
                              </p>
                              <a href="https://openreview.net/forum?id=BJgy96EYvr&noteId=BJgy96EYvr"> PDF </a> | <a
                              href="https://sites.google.com/view/influence-based-mae/"> Website </a> | <a
                              href="https://github.com/TonghanWang/EITI-EDTI"> Code </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Learning Nearly Decomposable Value Functions with
                                      Communication Minimization</h4>
                                  <div className="mil-text-sm">2020</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  <span className="underline">Tonghan Wang</span>*, Jianhao Wang*, Chongyi Zheng, and
                                  Chongjie Zhang <br/>
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ICLR 2020
                              </p>
                              <a href="https://openreview.net/forum?id=HJx-3grYDB&noteId=HJx-3grYDB"> PDF </a> | <a
                              href="https://sites.google.com/view/ndq"> Website </a> | <a
                              href="https://github.com/TonghanWang/NDQ"> Code </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Convergence of Multi-Agent Learning with a Finite Step
                                      Size in General-Sum Games</h4>
                                  <div className="mil-text-sm">2019</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Xinliang Song, <span className="underline">Tonghan Wang</span>, and Chongjie Zhang
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  AAMAS 2019
                              </p>
                              <a href="https://dl.acm.org/doi/10.5555/3306127.3331788"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Compact Object Representation of a Non-Rigid Object for
                                      Real-Time Tracking in AR Systems</h4>
                                  <div className="mil-text-sm">2018</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  <span className="underline">Tonghan Wang</span>, Xueying Qin, Fan Zhong, Baoquan Chen,
                                  and Ming C. Lin <br/>
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ISMAR 2018
                              </p>
                              <a href="https://ieeexplore.ieee.org/abstract/document/8699328"> PDF </a> | <a
                              href="https://sites.google.com/view/corsr"> Website </a>
                          </li>
                      </ul>
                  </div>

              </div>

              <div className="col-xl-12">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Journal Papers</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Automated Mechanism Design: A Survey  </h4>
                                  <div className="mil-text-sm">2025</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Michael J. Curry, Zhou Fan, Yanchen Jiang, Sai Srivatsa Ravindranath, Tonghan Wang, David C. Parkes
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  ACM SIGecom Exchanges
                              </p>
                              <a href="https://www.sigecom.org/exchanges/volume_22/2/CURRY.pdf"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Multi-Agent Policy Transfer via Task Relationship
                                      Modeling </h4>
                                  <div className="mil-text-sm">2024</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Tonghan Wang*, Rongjun Qin*, Feng Chen*, Lei Yuan, Xiaoran Wu, Zongzhang Zhang,
                                  Chongjie Zhang, Yang Yu
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  Science China Information Sciences
                              </p>
                              <a href="https://link.springer.com/article/10.1007/s11432-023-3862-1"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Celebrating Diversity With Subtask Specialization in
                                      Shared Multiagent Reinforcement
                                      Learning&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                                  <div className="mil-text-sm">2023</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Chenghao Li, Tonghan Wang, Chengjie Wu, Qianchuan Zhao, Jun Yang, Chongjie
                                  Zhang
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  IEEE Transactions on Neural Networks and Learning Systems
                              </p>
                              <a href="https://ieeexplore.ieee.org/abstract/document/10310295"> PDF </a>
                          </li>
                      </ul>
                  </div>
              </div>

              <div className="col-xl-12">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Workshop Papers</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Multi-Agent Policy Transfer via Task Relationship
                                      Modeling</h4>
                                  <div className="mil-text-sm">2022</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Tonghan Wang*, Rongjun Qin*, Feng Chen*, Lei Yuan, Xiaoran Wu, Zongzhang Zhang,
                                  Chongjie Zhang, Yang
                                  Yu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  NeurIPS 2022 Deep Reinforcement Learning Workshop
                              </p>
                              <a href="https://openreview.net/forum?id=5pWNx-LZ8D"> PDF </a>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4 style={{fontSize: '20px'}}>Model and Method: Training-Time Attack for Cooperative
                                      Multi-Agent Reinforcement Learning</h4>
                                  <div className="mil-text-sm">2022</div>
                              </div>
                              <p className="mil-text-award mil-mb-15" style={{fontSize: '18px'}}>
                                  Tonghan Wang*, Siyang Wu*, Xiaoran Wu, Jingfeng Zhang, Yujing Hu, Changjie Fan,
                                  Chongjie Zhang
                              </p>
                              <p style={{color: 'cornflowerblue', fontSize: '18px'}}>
                                  NeurIPS 2022 Deep Reinforcement Learning Workshop
                              </p>
                              <a href="https://openreview.net/forum?id=cZSNk8veQW7"> PDF </a>
                          </li>
                      </ul>
                  </div>
              </div>

              {/*<div className="col-xl-6">*/}

              {/*    <div className="mil-section-title mil-up mil-left mil-mb-90">*/}
              {/*        <div className="mil-divider"></div>*/}
              {/*        <h3>Work:</h3>*/}
              {/*    </div>*/}

              {/*    <div className="mil-timeline mil-mb-90">*/}
              {/*        <div className="mil-timeline-track"></div>*/}
              {/*        <ul>*/}
              {/*            <li className="mil-up">*/}
              {/*                <div className="mil-item-head mil-mb-5">*/}
              {/*                    <h4>Mandefro Studio</h4>*/}
              {/*                    <div className="mil-text-sm">2018 - 2019</div>*/}
              {/*                </div>*/}
              {/*                <p className="mil-text-sm mil-mb-15">Student</p>*/}
              {/*                <p>Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora aste voluptatibus laudantium ipsa ad debitis unde. Iste voluptatibus minus veritatis qui ut.</p>*/}
              {/*            </li>*/}
              {/*            <li className="mil-up">*/}
              {/*                <div className="mil-item-head mil-mb-5">*/}
              {/*                    <h4>The Twins PLC</h4>*/}
              {/*                    <div className="mil-text-sm">2019 - 2021</div>*/}
              {/*                </div>*/}
              {/*                <p className="mil-text-sm mil-mb-15">Student</p>*/}
              {/*                <p>Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic tempora aste voluptatibus laudantium ipsa ad debitis unde Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora. Laudantium Iste voluptatibus minus veritatis qui ut. Rerum aut hic quasi placeat iure tempora laudantium ipsa Iste voluptatibus minus veritatis qui ut.</p>*/}
              {/*            </li>*/}
              {/*            <li className="mil-up">*/}
              {/*                <div className="mil-item-head mil-mb-5">*/}
              {/*                    <h4>xyz market</h4>*/}
              {/*                    <div className="mil-text-sm">2021 - Today</div>*/}
              {/*                </div>*/}
              {/*                <p className="mil-text-sm mil-mb-15">Student</p>*/}
              {/*                <p>Dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. Dolor sit amet, consectetur adipisicing elit.</p>*/}
              {/*            </li>*/}
              {/*        </ul>*/}
              {/*    </div>*/}

              {/*</div>*/}
          </div>
      </section>
        {/* story end */}

        <CallToActionSection/>
    </Layouts>
  );
};
export default Story;

export async function getStaticProps() {
    const allPosts = getSortedPostsData();

    return {
        props: {
            posts: allPosts
        }
    }
}

---
#preview
title: Multi-Agent/Robot
image: /img/portfolio/project-2/cover.svg

#full details
details:

    - label: "$category"

description:
    enabled: 1
    content: "
        <p>Multi-agent systems can model both cooperative/competitive agents and the joints of a robot — where each joint is itself an agent. Below are research directions spanning both settings.</p>
    "

gallery:
    enabled: 0
    items:
        - image: /disenabled
          alt: "image"

description2:
    enabled: 1
    heading: "Muscle Synergy"
    content: "
        <p>A human central nervous system decreases the control complexity by producing a small number of electrical signals and activating muscles in groups. We achieve this in robots. [NeurIPS 2022] </p>
        <p>&nbsp; </p>
        <p>The following figure shows the synergy structure evolution enabled by our method. Phases are divided according to changes in synergy clusters. Synergy clusters are masked with colored shapes.</p>
    "
    button:
        label: Paper
        link: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/7da6005a8d6942e8b328357da2872aed-Abstract-Conference.html"
        target: "_blank"

gallery2:
    enabled: 1
    items:
        - image: /img/portfolio/project-4/synergy.png
          alt: "image"

description3:
    enabled: 1
    heading: "Morphology Learning"
    content: "
        <p>How to learn an effective morphology for a specific task that is symmetric? [ICML 2023] </p>
        <p>&nbsp; </p>
        <p>The following figure shows the morphology evolution enabled by our method.</p>
    "
    button:
        label: Paper
        link: "https://arxiv.org/abs/2306.00036"
        target: "_blank"

gallery3:
    enabled: 1
    items:
        - image: /img/portfolio/project-4/sard.png
          alt: "image"

description4:
    enabled: 1
    heading: "Organization"
    content: "
        <p>Related publications: [ROMA, ICML 2020; RODE, ICLR 2021] </p>
        <p> </p>
        <p>We developed role-based learning, where agents learn their roles to decompose a complex task.</p>
        <p> </p>
        <p>In the figure below, we show changes in roles of different agents in an episode. The role will decide the agent's behavior.</p>
    "
    button:
        label: Example Paper
        link: "https://arxiv.org/pdf/2003.08039"
        target: "_blank"

gallery4:
    enabled: 1
    items:
        - image: /img/portfolio/project-1/roma.png
          alt: "image"

description5:
    enabled: 1
    heading: "Communication"
    content: "
        <p>Related publications: [NDQ, ICLR 2020; Pragmatic Reasoning Communication, NeurIPS 2020] </p>
        <p> </p>
        <p>We studied sparse, concise, but informative communication.</p>
        <p> </p>
        <p>In the following figure, two agents start at a_4 and b_3, respectively, and they want to reach g simultaneously but can only observe its own state. To finish the task, they need to communicate their location to each other.</p>
        <p> </p>
        <p>The second row shows our communication strategy. 0 means no communication. Agents learn to only send a bit when they are one step away from the goal state.</p>
    "
    button:
        label: Example Paper
        link: "https://openreview.net/forum?id=HJx-3grYDB"
        target: "_blank"

gallery5:
    enabled: 1
    items:
        - image: /img/portfolio/project-1/comm.png
          alt: "image"

description6:
    enabled: 1
    heading: "Diversity"
    content: "
        <p>Related publications: [CDS, NeurIPS 2021] </p>
        <p> </p>
        <p>We find that diversity matters in multi-agent collaboration.</p>
        <p> </p>
        <p>The following figure shows that our method learns versatile strategies by encouraging diversity in the difficult Google football tasks. </p>
    "
    button:
        label: Example Paper
        link: "https://proceedings.neurips.cc/paper/2021/hash/20aee3a5f4643755a79ee5f6a73050ac-Abstract.html"
        target: "_blank"

gallery6:
    enabled: 1
    items:
        - image: /img/portfolio/project-1/diverse.png
          alt: "image"

description7:
    enabled: 1
    heading: "Coordination"
    content: "
        <p>Related publications: [NLCG, NeurIPS 2022; SOP-CG, ICML 2022; CASEC, ICLR 2022] </p>
        <p> </p>
        <p>Coordination graphs: sparse, non-linear, and self-organized.</p>
        <p> </p>
        <p>The following figure shows how the coordination structure could be adaptive: (a) Self-organized grouping at initialization; (b) Connecting to agent with rich observation for better information sharing; (c) Concentrated collaboration structure around an enclosed adversary. </p>
    "
    button:
        label: Example Paper
        link: "https://openreview.net/forum?id=OcNoF7qA4t"
        target: "_blank"

gallery7:
    enabled: 1
    items:
        - image: /img/portfolio/project-1/coordination.png
          alt: "image"

description8:
    enabled: 1
    heading: "Exploration"
    content: "
        <p>Related publications: [EDTI, ICLR 2020] </p>
        <p> </p>
        <p>We find that encouraging agents' influence on each other can encourage exploration in large observation-action spaces.</p>
    "
    button:
        label: Example Paper
        link: "https://openreview.net/forum?id=BJgy96EYvr"
        target: "_blank"

description9:
    enabled: 1
    heading: "Cooperation"
    content: "
        <p>Related publications: [DOP, ICLR 2020] </p>
        <p> </p>
        <p>We developed a multi-agent policy gradient method with significantly reduced variance.</p>
    "
    button:
        label: Example Paper
        link: "https://openreview.net/forum?id=6FqKiVAdI3Y"
        target: "_blank"

description10:
    enabled: 1
    heading: "Learning in Games"
    content: "
        <p>Related publications: [GA-SPP, AAMAS 2019] </p>
        <p> </p>
        <p>GA-SPP is the first gradient-ascent algorithm with a finite learning rate that provides convergence guarantee in general-sum games, including m×n positive semi-definite games and 2×n general-sum games.</p>
    "
    button:
        label: Example Paper
        link: "https://arxiv.org/abs/1903.02868"
        target: "_blank"

gallery10:
    enabled: 1
    items:
        - image: /img/portfolio/project-1/convergence.png
          alt: "image"

description11:
    enabled: 1
    heading: "Robustness"
    content: "
        <p>Related publications: [TRAM, NeurIPS Workshop 2022] </p>
        <p> </p>
        <p>We study how to improve the robustness of multi-agent learning algorithms by attacking them during training time.</p>
    "
    button:
        label: Example Paper
        link: "https://openreview.net/forum?id=cZSNk8veQW7"
        target: "_blank"

description12:
    enabled: 1
    heading: "Transfer"
    content: "
        <p>Related publications: [MATTAR, NeurIPS Workshop 2022] </p>
        <p> </p>
        <p>How to transfer the policy learned by one multi-agent team to another?</p>
    "
    button:
        label: Example Paper
        link: "https://openreview.net/forum?id=5pWNx-LZ8D"
        target: "_blank"

---

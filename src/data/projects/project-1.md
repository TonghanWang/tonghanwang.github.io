---
#preview
title: AI for Economics
image: /img/portfolio/project-1/cover.svg

#full details
details: []

description:
    enabled: 1
    content: "
        <p>How to design a revenue-maximizing auction where multiple bidders are incentivized to report their values truthfully? And how to handle discontinuous utility functions that arise when agents best-respond in contract and persuasion settings?</p>
    "

gallery:
    enabled: 1
    items:
        - image: /img/portfolio/project-3/position.png
          alt: "image"

description2:
    enabled: 1
    heading: "GemNet [EC 2024]"

    button:
        label: Read paper
        link: "https://arxiv.org/abs/2406.07428"
        target: "_blank"

    content: "
        <p>We introduce GEneral Menu-based NETwork (GemNet), the first strategy-proof and general auction that supports multiple bidders.</p>
        <p>&nbsp;</p>
        <p>We hope GemNet can shed light on theoretical analysis: it shows that multi-bidder auction designs can be similar to analytically optimal designs of their single-bidder counterparts. See figures below.</p>
    "

gallery2:
    enabled: 1
    items:
        - image: /img/portfolio/project-3/u33_compare_plus.png
          alt: "image"

description3:
    enabled: 1
    heading: ""

    content: "
        <p>Our method reproduces the optimal auction in the setting with 2 additive bidders, 2 items, and valuations on support size two [Yao, 2017].</p>
    "

gallery3:
    enabled: 1
    items:
        - image: /img/portfolio/project-3/yao.png
          alt: "image"

description4:
    enabled: 1
    heading: "Piecewise Linear, Discontinuous Network"
    content: "
        <p>Economics assumes that agents are best responding. When best responses change, utilities may change discontinuously. We develop discontinuous networks to handle these cases.</p>
        <p>&nbsp;</p>
        <p>Designed for contract design, where the utility function is piecewise linear but discontinuous. [NeurIPS 2023]</p>
        <p>&nbsp;</p>
        <p>For the figure below: (a) The exact surface of the principal's utility function. (b) A learned ReLU network cannot model the discontinuity and yields an incorrect contract. (c) A learned DeLU network represents a discontinuous function and well-approximates the ground-truth.</p>
    "
    button:
        label: Paper
        link: "https://openreview.net/forum?id=q8mH2d6uw2"
        target: "_blank"

gallery4:
    enabled: 1
    items:
        - image: /img/portfolio/project-2/pwl.png
          alt: "image"

description5:
    enabled: 1
    heading: "Piecewise Non-Linear, Discontinuous Network"
    content: "
        <p>Designed for multi-sender persuasion, where the utility function is piecewise non-linear and discontinuous. [ICML 2024]</p>
        <p>&nbsp;</p>
        <p>In each column below, we show the ground-truth principal's utility and the approximation results achieved by our method, ReLU, and piecewise linear discontinuous networks, respectively.</p>
    "
    button:
        label: Paper
        link: "https://openreview.net/forum?id=8JFIKpzumn"
        target: "_blank"

gallery5:
    enabled: 1
    items:
        - image: /img/portfolio/project-2/pwnl.png
          alt: "image"

---

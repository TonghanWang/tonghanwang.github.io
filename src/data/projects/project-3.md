---
#preview
title: Computational Economics (Discontinuous Neural Networks)
image: /img/portfolio/project-2/pwnl-high.png
category: With New Deep Learning Models 

#params
#fullWidth: true

#full details
details:

    - label: "$category"

description:
    enabled: 1
    content: "
        <p>Economics assumes that agents are best responding. When best responses change, utilities may change discontinuously. Therefore, we develop discontinuous networks to deal with these problems.</p>
    "

gallery: 
    enabled: 0
    items:
        - image: /disenabled
          alt: "image"


description2:
    enabled: 1
    heading: "Piecewise Linear, Discontinuous Network"
    content: "
        <p>Designed for contract design, where the utility function is piecewise linear but discontinuous. [NeurIPS 2023] </p>
        <p>&nbsp; </p>
        <p>For the figure below: (a) The exact surface of the principal’s utility function. (b) A learned ReLU network cannot model the discontinuity of the function
and yields an incorrect contract as shown in (a). (c) A learned DeLU network represents a discontinuous
function and can well-approximate the ground-truth.</p>
    "
    button:
        label: Paper
        link: "https://openreview.net/forum?id=q8mH2d6uw2"
        target: "_blank"

gallery2: 
    enabled: 1
    items:
        - image: /img/portfolio/project-2/pwl.png
          alt: "image"
          
description3:
    enabled: 1
    heading: "Piecewise Non-Linear, Discontinuous Network"
    content: "
        <p>Designed for multi-sender persuasion, where the utility function is piecewise non-linear and discontinuous. [ICML 2024] </p>
        <p>&nbsp; </p>
        <p>In each column below, we show the ground-truth principal's utility and
the approximation results achieved by our method, ReLU, and piecewise linear discontinuous networks, respectively.</p>
    "
    button:
        label: Paper
        link: "https://openreview.net/forum?id=8JFIKpzumn"
        target: "_blank"

gallery3: 
    enabled: 1
    items:
        - image: /img/portfolio/project-2/pwnl.png
          alt: "image"


---
---
title: "AI for Platform Engineers"
type: 'trainings'
seo_title: "Use Claude Code safely and efficiently for IaC, Kubernetes operations, and automated workflows."
description: "Use Claude Code safely and efficiently for IaC, Kubernetes operations, and automated workflows."
date: 2025-12-23T00:14:34+06:00
draft: false
weight: 1
slug:
subtitle: "Basics"
categories: ["Supplementary Training", "AI", "New"]
showOnHomePage: true
abstract : "Use Claude Code safely and efficiently for IaC, Kubernetes operations, and automated workflows."
main_title : "Use Claude Code safely and efficiently for IaC, Kubernetes operations, and automated workflows."

costs: "CHF 1100"
duration: "1 Day"
certificate : "Certificate"
documents: "Digital Documentation"
info: "Please bring your own laptop."

headerimages:
  img1 : "images/trainings/ACEND_Adventure_Eishoele@2x.jpg"
  img2 : "images/trainings/ACEND_Lara@2x.jpg"
  img3 : "images/trainings/ACEND_CodeA@2x.jpg"

main_text: "Platform Engineers build the infrastructure that everything else runs on – and AI is changing how this work functions. Writing Terraform modules, reviewing Kubernetes manifests, debugging CI/CD pipelines, or automating runbooks: Generative AI tools like Claude Code, GitHub Copilot, and OpenAI Codex can take over significant manual labor. Not as a blind autopilot – but as a tool that highlights the difference between an experienced and an inexperienced operator. <br></br>
Teams using Claude Code productively report concrete shifts: Cluster troubleshooting, which previously meant 20 minutes of terminal tab switching, now runs in a single conversation. Runbooks are generated automatically from incident notes. IaC reviews become more consistent because Claude Code follows established conventions – provided you have taught them to the agent.<br></br>
In this one-day training, Platform Engineers learn how to integrate agent-based tools (such as Claude Code, GitHub Copilot, OpenCode) safely and productively into their daily routine: from IaC workflows to pipeline automation and incident analysis. Just as important as the use cases: understanding current limitations and the guardrails that prevent an AI agent from executing terraform destroy on production in the worst-case scenario. <br></br>
This training offers two focus areas and will be discussed specifically with participants in advance: 
<li> IaC Focus </li>
<li>Kubernetes Ecosystem</li>
"

accordion:
    enable : true
    item:
        - title : "Learning Objectives"
          icon : "1"
          content : "<ul>
<li>Understand <strong>how agent-driven tools</strong> work – and why it is a different paradigm than classic AI assistants.</li>
<li>Can set up current technologies and best practices (such as <strong>AGENTS.md, Skills, MCP</strong>) as a team standard to ensure AI support remains consistent, secure, and traceable.</li>
<li>Deploy agentic tools specifically for <strong>Platform Engineering:</strong> generate, review, refactor – with critical quality checks instead of blind trust.</li>
<li>Can create, debug, and document <strong>CI/CD pipelines and automation scripts</strong> with AI support.</li>
<li>Know the <strong>specific risks and guardrails</strong> for AI use in infrastructure environments.</li>
<li>Leave the workshop with a ready-to-use <strong>Team AI Blueprint</strong> (AGENTS.md, skills definition, governance rules) – directly transferable to their own platform, with a prioritized plan for the next steps.</li>
</ul>"

        - title : "Prerequisites"
          icon : "2"
          content : "<ul>
<li>Platform Engineers, DevOps Engineers, SREs, and Cloud Engineers who want to integrate AI safely and productively into their daily infrastructure work.</li>
<li>Teams already experimenting with Copilot or ChatGPT who now want to establish structured, secure usage in the IaC and pipeline context.</li>
</ul>"

        - title : "Target Audience"
          icon : "3"
          content : "<ul>
<li>Platform Engineers, DevOps Engineers, SREs, and Cloud Engineers who want to integrate AI safely and productively into their daily infrastructure work.</li>
<li>Teams already experimenting with Copilot or ChatGPT who now want to establish structured, secure usage in the IaC and pipeline context.</li>
</ul>"

        - title : "Conditions"
          icon : "4"
          content : "<ul>
<li>CHF 1100 / person for one day</li>
<li>Groups of 8-20 people</li>
<li>Can also be customized for GitHub Copilot and other tools</li>
<li>Includes documentation, prepared lab environment with Claude Code setup and API key</li>
<li>Before the training: Questionnaire on the existing toolchain and specific use cases – so examples can be optimally aligned with your tech stack</li>
<li>Content can be adapted to platform-specific toolchains (AWS, Azure, GCP, On-Premises)</li>
<li>Discount for 12 or more people</li>
</ul>"

# Training Content
trainingsinhalt:
    title : "Training Content"
    text : "Our trainings consist of varied presentations and hands-on labs to convey content in an exciting way. We are happy to reference your infrastructure and adapt examples to your tech stack upon agreement.<br></br>
The training combines short impulse inputs with practical exercises based on real infrastructure scenarios. A dedicated security module shows, using a documented production incident, which guardrails are absolutely necessary when using AI in infrastructure environments – and why auto-approve for destructive commands is not a theoretical risk."
    liste1:
      title: "Morning – Introduction, CLAUDE.md & IaC with AI"
      liste:
        - el: "Context: What Claude Code can do – and what it cannot (yet). Realistic expectations instead of hype."
        - el: "Claude Code Setup & Basics: CLI, Agentic Loop, CLAUDE.md as a team foundation."
        - el: "IaC Specialization: AI for Terraform/OpenTofu: generating modules, reviewing, analyzing drift – with Terraform MCP Server for current provider documentation."
        - el: "Kubernetes Specialization: AI for Kubernetes: YAML manifests, Helm Charts, CrashLoopBackOff diagnosis, OOM analysis."
    liste2:
      title: "Afternoon – Pipelines, Security & Team Roadmap"
      liste:
        - el: "AI for CI/CD: Creating and debugging GitHub Actions / GitLab Pipelines and GitOps Setup (ArgoCD/Flux) with AI."
        - el: "Scripting & Runbooks: Automation and documentation with AI support."
        - el: "Security Guardrails: Read vs. Write, Blast Radius, why auto-approve for destructive commands is dangerous – based on a real production incident."
        - el: "MCP Server Ecosystem: Terraform MCP (HashiCorp), Kubernetes MCP, Argocd MCP, cloud-specific extensions."
        - el: "Team Roadmap: Prioritization, governance, next steps."

# Cooperation
kooperation:
  enable: true
  title : "In cooperation with <strong>incratec</strong>"
  subtitle : "In collaboration with <strong>incratec</strong>"
  text : "incratec GmbH comprehensively supports companies in AI usage: from strategy, procurement, and introduction to the development of AI solutions and training."
  link: "https://incratec.com/"
  linktext: "incratec GmbH"

# Trainer
trainers:
  enable: true
  title : "Meet two of your trainers"
  trainer:
    - title : "Tobias Kluge"
      image : "images/team/AC_TobiasKluge@2x.jpg"
      designation : "Trainer"
      abstract : "As “Mr. AI”, he is an AI pragmatist. His goal: make AI understandable and use it wherever it works well and brings value."
      linkedin : "https://www.linkedin.com/in/tobiaskluge/"

    - title : "Thomas Philipona"
      image : "images/team/AC_Thoemu@2x.jpg"
      designation : "Trainer"
      abstract : "Has known the IT world for years – and discovers everything else on his bicycle."
      linkedin : "https://www.linkedin.com/in/thomas-philipona-thun"

# Testimonials
testimonials:
  enable: true
  testimonial:
    - title: "What our training participants say<br/>Nathanael Weber, Bern"
      logo: "images/testimonials/mtrail.png"
      text: "The training was exceptionally well-tailored to our needs. The practical exercises were just challenging enough that further questions about Helm arose and were competently answered by the speaker. Many thanks to acend for this experience!"
---
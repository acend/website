---
title: "KI für Platform Engineers"
type: 'trainings'
seo_title: "Nutze Claude Code sicher und effizient für IaC, Kubernetes-Operations und automatisierte Workflows."
description: "Nutze Claude Code sicher und effizient für IaC, Kubernetes-Operations und automatisierte Workflows."
date: 2025-12-23T00:14:34+06:00
draft: false
weight: 1
slug:
subtitle: "Basics"
categories: ["Ergänzende Trainings", "KI", "New"]
showOnHomePage: true
abstract : "Nutze Claude Code sicher und effizient für IaC, Kubernetes-Operations und automatisierte Workflows."
main_title : "Nutze Claude Code sicher und effizient für IaC, Kubernetes-Operations und automatisierte Workflows."

costs: "CHF 1100"
duration: "1 Tag"
certificate : "Zertifikat"
documents: "Digitale Unterlagen"
info: "Bringe deinen eigenen Laptop mit."

headerimages:
  img1 : "images/trainings/ACEND_Adventure_Eishoele@2x.jpg"
  img2 : "images/trainings/ACEND_Lara@2x.jpg"
  img3 : "images/trainings/ACEND_CodeA@2x.jpg"


main_text: "Platform Engineers bauen die Infrastruktur, auf der alles andere läuft – und KI verändert, wie diese Arbeit funktioniert. Terraform-Module schreiben, Kubernetes-Manifeste reviewen, CI/CD-Pipelines debuggen oder Runbooks automatisieren: Generative KI-Tools wie Claude Code, Github Copilot und OpenAI Codex können dabei echte Arbeit abnehmen. Nicht als blinder Autopilot – sondern als Werkzeug, das den Unterschied zwischen einem erfahrenen und einem unerfahrenen Operator sichtbar macht. <br></br>
Teams, die Claude Code produktiv nutzen, berichten von konkreten Verschiebungen: Cluster-Troubleshooting, das früher 20 Minuten Terminal-Tab-Switching bedeutete, läuft in einem einzigen Gespräch. Runbooks entstehen automatisch aus Incident-Notizen. IaC-Reviews werden konsequenter, weil Claude Code immer dieselben Konventionen kennt – vorausgesetzt, man hat sie ihm beigebracht.<br></br>
In diesem eintägigen Training lernen Platform Engineers, wie sie agentengestützte Tools (wie beispielsweise Claude Code, GitHub Copilot, OpenCode) sicher und produktiv in ihren Alltag integrieren: vom IaC-Workflow über Pipeline-Automatisierung bis zur Incident-Analyse. Genauso wichtig wie die Anwendungsfälle: das Verständnis der aktuellen Grenzen und der Leitplanken, die verhindern, dass ein KI-Agent im schlimmsten Fall terraform destroy auf der Produktion ausführt. <br></br>
Dieses Training in zwei Ausprägungen und wird im Voraus konkret mit den Interessenten besprochen: 
<li> IaC Fokus </li>
<li>Kubernetes Ökosystem</li>
"

accordion:
    enable : true
    item:
        - title : "Trainingsziele"
          icon : "1"
          content : "<ul>
<li>verstehen, wie agentengesteuerte Werkzeug funktionieren – und warum es ein anderes Paradigma ist als klassische KI-Assistenten.</li>
<li>können aktuelle Technologien und Best Practices (wie AGENTS.md, Skills, MCP) als Team-Standard einrichten, damit KI-Unterstützung konsistent, sicher und nachvollziehbar bleibt.</li>
<li>setzen agentic Tools gezielt für Platform Engineering ein: generieren, reviewen, refactoren – mit kritischer Qualitätsprüfung statt blindem Vertrauen.</li>
<li>können CI/CD-Pipelines und Automatisierungs-Scripts mit KI-Unterstützung erstellen, debuggen und dokumentieren.</li>
<li>kennen die konkreten Risiken und Leitplanken für den KI-Einsatz in Infrastruktur-Umgebungen.</li>
<li>verlassen den Workshop mit einem einsatzbereiten Team-KI-Blueprint (AGENTS.md, Skills-Definition, Governance-Regeln) – direkt übertragbar auf ihre eigene Plattform, mit einem priorisierten Plan für die nächsten Schritte.</li>
</ul>"

        - title : "Voraussetzungen"
          icon : "2"
          content : "<ul>
<li>Platform Engineers, DevOps Engineers, SREs und Cloud Engineers, die KI sicher und produktiv in ihre tägliche Infrastrukturarbeit integrieren möchten.</li>
<li>Teams, die bereits mit Copilot oder ChatGPT experimentieren und nun strukturierte, sichere Nutzung im IaC- und Pipeline-Kontext etablieren wollen.</li>
</ul>"

        - title : "Zielpublikum"
          icon : "3"
          content : "<ul>
<li>Platform Engineers, DevOps Engineers, SREs und Cloud Engineers, die KI sicher und produktiv in ihre tägliche Infrastrukturarbeit integrieren möchten.</li>
<li>Teams, die bereits mit Copilot oder ChatGPT experimentieren und nun strukturierte, sichere Nutzung im IaC- und Pipeline-Kontext etablieren wollen.</li>
</ul>"

        - title : "Konditionen"
          icon : "4"
          content : "<ul>
<li>CHF 1100 / Person für ein Tag</li>
<li>Gruppen von 8-20 Personen</li>
<li>Kann auch für GitHub Copilot und andere Tools customized werden</li>
<li>Inklusive Unterlagen, vorbereiteter Lab-Umgebung mit Claude Code Setup und API-Key</li>
<li>Vor dem Training: Fragebogen zur bestehenden Toolchain und zu spezifischen Use-Cases – damit Beispiele optimal auf euren Tech-Stack abgestimmt werden können</li>
<li>Inhalte können auf plattformspezifische Toolchains angepasst werden (AWS, Azure, GCP, On-Premises)</li>
<li>Rabatt ab 12 Personen</li>
</ul>"

# Trainingsinhalt
trainingsinhalt:
    title : "Trainingsinhalt"
    text : "Unsere Trainings bestehen aus abwechslungsreichen Präsentationen und hands-on Labs, um deren Inhalt auf spannende Art und Weise zu übermitteln. Gerne nehmen wir in Absprache auch Bezug auf eure Infrastruktur und passen Beispiele an euren Tech-Stack an.<br></br>
Das Training kombiniert kurze Impuls-Inputs mit praktischen Übungen anhand realer Infrastruktur-Szenarien. Ein dediziertes Sicherheitsmodul zeigt anhand eines dokumentierten Produktions-Incidents, welche Leitplanken beim KI-Einsatz in Infrastruktur-Umgebungen zwingend notwendig sind – und warum Auto-Approve auf destruktive Befehle kein theoretisches Risiko ist."
    liste1:
      title: "Vormittag – Einführung, CLAUDE.md &amp; IaC mit KI"
      liste:
        - el: "Einordnung: Was Claude Code kann – und was (noch) nicht. Realistische Erwartungen statt Hype."
        - el: "Claude Code Setup & Grundlagen: CLI, Agentic Loop, CLAUDE.md als Team-Fundament."
        - el: "Ausprägung IaC: KI für Terraform/OpenTofu: Module generieren, reviewen, Drift analysieren – mit Terraform MCP Server für aktuelle Provider-Dokumentation."
        - el: "Ausprägung Kubernetes: KI für Kubernetes: YAML-Manifeste, Helm Charts, CrashLoopBackOff-Diagnose, OOM-Analyse."
    liste2:
      title: "Nachmittag – Pipelines, Sicherheit &amp; Teamfahrplan"
      liste:
        - el: "KI für CI/CD: GitHub Actions / GitLab Pipelines und GitOps Setup (ArgoCD/Flux) mit KI erstellen und debuggen."
        - el: "Scripting & Runbooks: Automatisierung und Dokumentation mit KI-Unterstützung."
        - el: "Sicherheitsleitplanken: Read vs. Write, Blast Radius, warum Auto-Approve auf destruktive Befehle gefährlich ist – anhand eines realen Produktions-Incidents."
        - el: "MCP Server Ökosystem: Terraform MCP (HashiCorp), Kubernetes MCP, Argocd MCP, cloud-spezifische Erweiterungen."
        - el: "Teamfahrplan: Priorisierung, Governance, nächste Schritte."

# Kooperation
kooperation:
  enable: true
  title: "In Kooperation mit <strong>incratec</strong>"
  subtitle: "In Zusammenarbeit mit <strong>incratec</strong>"
  text: "Die incratec GmbH begleitet Unternehmen umfassend bei der KI-Nutzung: von der Strategie, über Beschaffung, Einführung und Entwicklung von KI-Lösungen bis zum Training."
  link: "https://incratec.com/"
  linktext: "incratec GmbH"

# trainer
trainers:
  enable: true
  title : "Lerne zwei deiner Trainer kennen"
  trainer:
    - title : "Tobias Kluge"
      image : "images/team/AC_TobiasKluge@2x.jpg"
      designation : "Trainer"
      abstract : "Als “Mr. AI” ist er KI-Pragmatiker. Sein Ziel: KI verständlich machen und überall dort einsetzen, wo es gut funktioniert und einen Mehrwert bringt."
      linkedin : "https://www.linkedin.com/in/tobiaskluge/"

    - title : "Thomas Philipona"
      image : "images/team/AC_Thoemu@2x.jpg"
      designation : "Trainer"
      abstract : "Kennt die IT-Welt seit Jahren – und entdeckt alles andere auf seinem Drahtesel."
      linkedin : "https://www.linkedin.com/in/thomas-philipona-thun"

# testimonials
testimonials:
  enable: true
  testimonial:
    - title: "Das sagt unsere Trainingsteilnehmer<br/>Nathanael Weber, Bern"
      logo: "images/testimonials/mtrail.png"
      text: "Die Ausbildung war ausserordentlich gut auf unsere Bedürfnisse zugeschnitten. Die praktischen Übungen waren gerade genug schwierig, dass sich noch weitere Fragen zu Helm ergeben haben und vom Referent kompetent beantwortet wurden. Herzlichen Dank acend für diese Erfahrung!"
---

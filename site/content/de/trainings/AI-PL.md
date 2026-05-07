---
title: "KI für Platform Engineers"
type: 'trainings'
seo_title: "KI sinnvoll nutzen vom Requirements-Engineering, Coding bis zum Testing und Deployment"
description: "KI sinnvoll nutzen vom Requirements-Engineering, Coding bis zum Testing und Deployment"
date: 2025-12-23T00:14:34+06:00
draft: false
weight: 1
slug:
subtitle: "Basics"
categories: ["Ergänzende Trainings", "KI", "New"]
showOnHomePage: true
abstract : "KI sinnvoll nutzen vom Requirements-Engineering, Coding bis zum Testing und Deployment"
main_title : "KI sinnvoll nutzen vom Requirements-Engineering, Coding bis zum Testing und Deployment"

costs: "CHF 1900"
duration: "1 Tag"
certificate : "Zertifikat"
documents: "Digitale Unterlagen"
info: "Bringe deinen eigenen Laptop mit."

headerimages:
  img1 : "images/trainings/ACEND_Adventure_Eishoele@2x.jpg"
  img2 : "images/trainings/ACEND_Lara@2x.jpg"
  img3 : "images/trainings/ACEND_CodeA@2x.jpg"


main_text: "Platform Engineers bauen die Infrastruktur, auf der alles andere läuft – und KI verändert, wie diese Arbeit funktioniert. Terraform-Module schreiben, Kubernetes-Manifeste reviewen, CI/CD-Pipelines debuggen oder Runbooks automatisieren: Generative KI-Tools wie Claude Code, Github Copilot und OpenAI Codex können dabei echte Arbeit abnehmen. Nicht als blinder Autopilot – sondern als Werkzeug, das den Unterschied zwischen einem erfahrenen und einem unerfahrenen Operator sichtbar macht.<br></br>
Teams, die Claude Code produktiv nutzen, berichten von konkreten Verschiebungen: Cluster-Troubleshooting, das früher 20 Minuten Terminal-Tab-Switching bedeutete, läuft in einem einzigen Gespräch. Runbooks entstehen automatisch aus Incident-Notizen. IaC-Reviews werden konsequenter, weil Claude Code immer dieselben Konventionen kennt – vorausgesetzt, man hat sie ihm beigebracht. In diesem eintägigen Training lernen Platform Engineers, wie sie Claude Code als agentengestütztes CLI-Tool sicher und produktiv in ihren Alltag integrieren: vom IaC-Workflow über Pipeline-Automatisierung bis zur Incident-Analyse. Genauso wichtig wie die Anwendungsfälle: das Verständnis der aktuellen Grenzen und der Leitplanken, die verhindern, dass ein KI-Agent im schlimmsten Fall terraform destroy auf der Produktion ausführt.<br></br>
Die Beispiele und Übungen orientieren sich an einem modernen Cloud-native Stack (Terraform/OpenTofu, Kubernetes, Helm, GitHub Actions / GitLab CI) und können auf plattformspezifische Toolchains – AWS EKS, Azure AKS, GCP GKE oder On-Premises – angepasst werden."

accordion:
    enable : true
    item:
        - title : "Trainingsziele"
          icon : "1"
          content : "<ul>
<li>verstehen, wie Claude Code als agentengesteuertes CLI-Werkzeug funktioniert – und warum es ein anderes Paradigma ist als GitHub Copilot oder ChatGPT.</li>
<li>können CLAUDE.md und Claude Code Skills als Team-Standard einrichten, damit KI-Unterstützung konsistent, sicher und nachvollziehbar bleibt.</li>
<li>setzen Claude Code gezielt für Infrastructure-as-Code (Terraform/OpenTofu, Helm, Kubernetes YAML) ein: generieren, reviewen, refactoren – mit kritischer Qualitätsprüfung statt blindem Vertrauen.</li>
<li>können CI/CD-Pipelines und Automatisierungs-Scripts mit KI-Unterstützung erstellen, debuggen und dokumentieren.</li>
<li>kennen die konkreten Risiken und Leitplanken für den KI-Einsatz in Infrastruktur-Umgebungen: was Claude Code niemals autonom tun darf und warum Auto-Approve auf destruktive Befehle ein Totalschaden-Risiko ist.</li>
<li>verlassen den Workshop mit einem einsatzbereiten Team-KI-Blueprint (CLAUDE.md, Skills-Definition, Governance-Regeln) – direkt übertragbar auf ihre eigene Plattform, mit einem priorisierten Plan für die nächsten Schritte.</li>
</ul>"

        - title : "Voraussetzungen"
          icon : "2"
          content : "<ul>
<li>Erfahrung als Platform Engineer, DevOps Engineer oder SRE (mind. 1–2 Jahre praktische Arbeit mit Cloud-Infrastruktur).</li>
<li>Grundkenntnisse in Terraform/OpenTofu und/oder Kubernetes; Erfahrung mit einem gängigen CI/CD-System (GitHub Actions, GitLab CI o.ä.).</li>
<li>Laptop mit Terminal-Zugang und Git; Zugang zur vorbereiteten Lab-Umgebung wird gestellt (inkl. Claude Code Setup und API-Key).</li>
</ul>"

        - title : "Zielpublikum"
          icon : "3"
          content : "<ul>
<li>Platform Engineers, DevOps Engineers, SREs und Cloud Engineers, die KI sicher und produktiv in ihre tägliche Infrastrukturarbeit integrieren möchten.</li>
<li>Teams, die bereits mit Copilot oder ChatGPT experimentieren und nun strukturierte, sichere Nutzung im IaC- und Pipeline-Kontext etablieren wollen.</li>
<li>Tech Leads und Architekten, die beurteilen müssen, welche KI-Tools für ihre Platform-Landschaft geeignet sind – und mit welchen Guardrails.</li>
</ul>"

        - title : "Konditionen"
          icon : "4"
          content : "<ul>
<li>CHF 1900 / Person für ein Tag</li>
<li>Gruppen von 8-20 Personen</li>
<li>Inklusive Verpflegung, Unterlagen und vorbereiteter Lab-Umgebung mit Claude Code Setup und API-Key</li>
<li>Vor dem Training: Fragebogen zur bestehenden Toolchain und zu spezifischen Use-Cases – damit Beispiele optimal auf euren Tech-Stack abgestimmt werden</li>
<li>Rabatt ab 12 Personen</li>
</ul>"

# Trainingsinhalt
trainingsinhalt:
    title : "Trainingsinhalt"
    text : "Unsere Trainings bestehen aus abwechslungsreichen Präsentationen und hands-on Labs, um deren Inhalt auf spannende Art und Weise zu übermitteln. Gerne nehmen wir in Absprache auch Bezug auf eure Infrastruktur und passen Beispiele an euren Tech-Stack an. <br></br>
    Das Training kombiniert kurze Impuls-Inputs mit praktischen Übungen anhand realer Infrastruktur-Szenarien. Ein dediziertes Sicherheitsmodul zeigt anhand eines dokumentierten Produktions-Incidents, welche Leitplanken beim KI-Einsatz in Infrastruktur-Umgebungen zwingend notwendig sind – und warum Auto-Approve auf destruktive Befehle kein theoretisches Risiko ist.<br></br>
    Inhalte können auf plattformspezifische Toolchains angepasst werden (AWS, Azure, GCP, On-Premises). Kann auch für GitHub Copilot und andere Tools customized werden."
    liste1:
      title: "Vormittag – Einführung, CLAUDE.md &amp; IaC mit KI"
      liste:
        - el: "Einordnung: Was Claude Code kann – und was (noch) nicht. Realistische Erwartungen statt Hype."
        - el: "Claude Code Setup &amp; Grundlagen: CLI, Agentic Loop, CLAUDE.md als Team-Fundament"
        - el: "KI für Terraform/OpenTofu: Module generieren, reviewen, Drift analysieren – mit Terraform MCP Server für aktuelle Provider-Dokumentation"
        - el: "KI für Kubernetes: YAML-Manifeste, Helm Charts, CrashLoopBackOff-Diagnose, OOM-Analyse"
    liste2:
      title: "Nachmittag – Pipelines, Sicherheit &amp; Teamfahrplan"
      liste:
        - el: "KI für CI/CD: GitHub Actions / GitLab Pipelines und GitOps-Workflows (ArgoCD/Flux) mit KI erstellen und debuggen"
        - el: "Scripting &amp; Runbooks: Automatisierung und Dokumentation mit KI-Unterstützung"
        - el: "Sicherheitsleitplanken: Read vs. Write, Blast Radius, warum Auto-Approve auf destruktive Befehle gefährlich ist – anhand eines realen Produktions-Incidents"
        - el: "MCP Server Ökosystem: Terraform MCP (HashiCorp), Kubernetes MCP, cloud-spezifische Erweiterungen"
        - el: "Teamfahrplan: Priorisierung, Governance, nächste Schritte"

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

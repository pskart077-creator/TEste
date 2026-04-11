"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const showcaseTabs = [
  {
    id: "about",
    label: "Sobre",
    title: "Hub financeiro completo",
    description:
      "A Plug Go conecta soluções financeiras para pessoas e empresas em uma experiência mais simples, segura e funcional.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Gestão inteligente da rotina financeira",
      "Mais clareza para movimentar e receber",
      "Experiência simples e segura",
    ],
  },
  {
    id: "mission",
    label: "Missão",
    title: "Operação mais simples",
    description:
      "Nossa missão é simplificar a rotina financeira com uma plataforma moderna, organizada e eficiente para pessoas e empresas.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Mais praticidade no dia a dia",
      "Operação centralizada",
      "Soluções para PF e PJ",
    ],
  },
  {
    id: "vision",
    label: "Visão",
    title: "Novo padrão financeiro",
    description:
      "Queremos transformar a relação com soluções financeiras, entregando mais clareza, confiança e eficiência em cada etapa.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Mais confiança nas operações",
      "Visão mais clara da rotina",
      "Tecnologia com praticidade",
    ],
  },
];

const showcaseStats = [
  { value: "01", label: "plataforma integrada" },
  { value: "02", label: "soluções para PF e PJ" },
  { value: "04", label: "frentes principais" },
  { value: "24/7", label: "mais praticidade" },
];

export function FinancialShowcaseSection() {
  const [activeTab, setActiveTab] = useState(showcaseTabs[0].id);

  const activeContent =
    showcaseTabs.find((item) => item.id === activeTab) ?? showcaseTabs[0];

  return (
    <section id="plataforma" className="financial-showcase section-anchor">
      <div className="financial-showcase-shell">
        <div className="financial-showcase-top">
          <div className="financial-showcase-media">
            <Image
              src={activeContent.image}
              alt={activeContent.title}
              fill
              className="financial-showcase-image"
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </div>

          <div className="financial-showcase-content">
            <h2 className="financial-showcase-title">{activeContent.title}</h2>

            <div
              className="financial-showcase-tabs"
              role="tablist"
              aria-label="Abas institucionais da Plug Go"
            >
              {showcaseTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`financial-showcase-tab ${
                    activeTab === tab.id ? "is-active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <p className="financial-showcase-description">
              {activeContent.description}
            </p>

            <div className="financial-showcase-points">
              {activeContent.points.map((point) => (
                <div key={point} className="financial-showcase-point">
                  <CheckCircle2 size={18} strokeWidth={2.4} />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <a href="#contato" className="financial-showcase-button">
              Fale Conosco
            </a>
          </div>
        </div>

        <div className="financial-showcase-stats">
          {showcaseStats.map((item) => (
            <article key={item.label} className="financial-showcase-stat">
              <p className="financial-showcase-stat-value">{item.value}</p>
              <p className="financial-showcase-stat-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { pillars } from "@/data/hub";

const pillarShapes = [
  {
    icon: "/images/Shapes/African Shape (1).svg",
    meaning: "Foundation & Focus",
    motif: "Triangle of Inquiry",
  },
  {
    icon: "/images/Shapes/African Shape (2).svg",
    meaning: "Aesthetic Resonance",
    motif: "Curved Arch of Craft",
  },
  {
    icon: "/images/Shapes/African Shape (3).svg",
    meaning: "Pedagogical Horizon",
    motif: "Horizon of Connection",
  },
  {
    icon: "/images/Shapes/African Shape (4).svg",
    meaning: "Structural Balance",
    motif: "Anchor of Readiness",
  },
  {
    icon: "/images/Shapes/Africa.svg",
    meaning: "Comparative Care",
    motif: "Continent of Integrity",
  },
];

export function Criteria() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="block criteria-section" id="criteria" aria-labelledby="criteria-title">
      {/* Background African Continent Watermark */}
      <div className="criteria-watermark" aria-hidden="true">
        <img src="/images/Shapes/Africa.svg" alt="" className="criteria-watermark-img" />
      </div>

      <div className="wrap criteria-container">
        <div className="criteria-intro">
          <div className="criteria-intro-copy">
            <div className="block-head">
              <div className="kicker-group">
                <span className="kicker-shape" aria-hidden="true">
                  <img src="/images/Shapes/African Shape (1).svg" alt="" />
                </span>
                <p className="kicker">Selection Criteria</p>
              </div>
              <h2 id="criteria-title" className="section-title">
                A Defined Corpus, With Room for Careful Reading.
              </h2>
            </div>
            <p className="criteria-greeting">
              Hi! My name is <strong>Tarisai Tara Mabuto.</strong>
            </p>
            <p>
              I developed this curated ten-piece African literary inventory as part of my master’s
              thesis for the degree of Master of Arts in Education (MAEd) in Language and Literature
              at Mariano Marcos State University.
            </p>
            <p>
              Designed as an open-access supplementary resource, this hub provides secondary
              educators with award-winning contemporary poetry, prose, and speculative texts to enrich
              classroom instruction. These materials are intended to serve as practical pedagogical
              companions—to be explored alongside the DepEd Revised K to 10 English Curriculum Guide,
              authorized school modules, and your local division instructional priorities.
            </p>

            <div className="criteria-highlights" aria-label="Curator credentials">
              <div className="highlight-pill">
                <span className="highlight-dot" />
                <span>MAEd Language & Literature</span>
              </div>
              <div className="highlight-pill">
                <span className="highlight-dot" />
                <span>Mariano Marcos State University</span>
              </div>
              <div className="highlight-pill">
                <span className="highlight-dot" />
                <span>Schools Division of Laoag City Focus</span>
              </div>
            </div>
          </div>

          {/* Tara's portrait masked inside the African continent silhouette */}
          <figure
            className={`criteria-portrait-african ${isHovered ? "is-active" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Luminous ambient aura behind Africa */}
            <div className="africa-portrait-halo" aria-hidden="true" />

            {/* Decorative corner geometric accent */}
            <div className="africa-portrait-badge" aria-hidden="true">
              <img src="/images/Shapes/African Shape (2).svg" alt="" className="badge-shape" />
              <span>Curator</span>
            </div>

            <div className="africa-portrait-stage">
              {/* Primary SVG Masked Silhouette Container */}
              <svg
                viewBox="0 0 512 512"
                className="africa-mask-svg"
                role="img"
                aria-label="Tarisai Tara Mabuto framed inside the geographical silhouette of Africa"
              >
                <defs>
                  {/* Continental clip-path containing mainland Africa and Madagascar */}
                  <clipPath id="africa-tara-clippath">
                    {/* Mainland Africa */}
                    <path d="M495.001,189.882c-0.938-1.114-2.43-1.587-3.833-1.228l-37.986,9.826c-1.562,0.403-3.194-0.228-4.088-1.562l-16.51-24.756c-0.193-0.29-0.421-0.554-0.693-0.773l-15.58-13.247c-0.422-0.359-0.755-0.807-0.992-1.316l-19.458-42.969c-0.088-0.219-0.202-0.42-0.342-0.605L384.122,96.97c-0.027-0.044-0.053-0.079-0.079-0.114l-15.756-24.424c-0.526-0.825-0.729-1.825-0.526-2.79l0.464-2.317c0.22-1.105,0.922-2.053,1.912-2.587c1.001-0.535,2.176-0.596,3.22-0.167l2.413,1c1.351,0.562,2.912,0.281,3.991-0.719c1.071-0.992,1.474-2.518,1.036-3.913l-2.711-8.51c-0.403-1.28-1.456-2.246-2.772-2.535l-26.932-5.992c-0.57-0.122-1.176-0.114-1.737,0.027l-21.44,5.359c-0.632,0.158-1.298,0.149-1.931-0.035l-18.756-5.246c-0.693-0.192-1.324-0.578-1.798-1.123l-4.861-5.474c-0.676-0.755-1.622-1.211-2.631-1.255l-11.641-0.587c-1.931-0.088-3.632,1.289-3.913,3.21l-1.403,9.37c-0.158,1.018-0.711,1.93-1.544,2.518c-0.843,0.588-1.886,0.816-2.886,0.632l-24.73-4.676c-1.351-0.263-2.448-1.22-2.877-2.518l-1.798-5.396c-0.5-1.491-1.878-2.518-3.448-2.57l-19.677-0.676c-1.15-0.035-2.211-0.596-2.895-1.509l-6.378-8.51c-0.641-0.851-0.886-1.939-0.684-2.982c0.201-1.053,0.842-1.957,1.754-2.509l1.675-1.009c1.72-1.027,2.325-3.22,1.403-4.992L209.93,2.004c-0.747-1.404-2.29-2.194-3.869-1.966L132.685,10.4c-0.307,0.035-0.606,0.123-0.895,0.237l-21.432,8.729c-0.386,0.166-0.799,0.254-1.22,0.272L95.4,20.357c-0.921,0.053-1.78,0.43-2.43,1.071L67.441,46.176c-0.578,0.562-0.965,1.289-1.096,2.079l-2.018,12.08c-0.166,1.062-0.789,1.992-1.692,2.571l-22.696,14.37c-0.536,0.333-0.983,0.807-1.281,1.359l-20.625,37.294c-0.342,0.614-0.508,1.298-0.474,2l1.596,34.231c0.009,0.298-0.009,0.588-0.07,0.878l-2.903,15.256c-0.211,1.114,0.096,2.272,0.824,3.15l55.522,65.831c0.922,1.088,2.378,1.561,3.773,1.237l24.59-5.974c0.377-0.088,0.763-0.123,1.158-0.097l34.433,2.404c0.474,0.044,0.956-0.026,1.421-0.166l25.608-8.291c1.219-0.394,2.552-0.14,3.544,0.666l15.519,12.704c0.754,0.605,1.728,0.912,2.702,0.834l14.344-1.202c1.053-0.079,2.088,0.271,2.859,0.991c0.782,0.71,1.229,1.71,1.229,2.772v13.905c0,0.192-0.018,0.377-0.044,0.562l-2.211,14.712c-0.149,1.035,0.131,2.105,0.799,2.921l15.905,19.686c0.334,0.42,0.579,0.912,0.719,1.43l12.818,49.69c0.184,0.692,0.158,1.421-0.061,2.096l-11.694,36.661c-0.28,0.878-0.228,1.834,0.14,2.676l19.976,44.733c0.149,0.333,0.254,0.684,0.298,1.062l3.938,30.774c0.088,0.711,0.395,1.378,0.843,1.931l19.212,23.046c0.562,0.685,0.868,1.526,0.868,2.413v16.791c0,1.079,0.465,2.114,1.29,2.833c0.807,0.72,1.894,1.036,2.974,0.895l33.977-4.421l28.529-3.966c0.895-0.131,1.72-0.57,2.316-1.263l43.312-49.716c0.42-0.49,0.719-1.096,0.842-1.736l2.001-9.957c0.193-0.974,0.772-1.842,1.605-2.395l4.553-3.026c1.018-0.694,1.649-1.825,1.675-3.053l0.747-30.775c0.026-0.868,0.35-1.71,0.921-2.368l9.202-10.616c0.474-0.544,1.079-0.93,1.772-1.14l18.686-5.545c1.606-0.473,2.702-1.938,2.702-3.615v-37.442c0-0.316-0.035-0.624-0.114-0.922l-9.106-35.67c-0.439-1.72,0.377-3.509,1.965-4.308l3.088-1.543c0.562-0.281,1.035-0.685,1.386-1.185l27.125-38.293c0.386-0.552,0.921-0.982,1.526-1.263l21.871-9.799c0.834-0.377,1.509-1.053,1.886-1.886l23.599-52.207C496.142,192.532,495.94,190.988,495.001,189.882z" />
                    {/* Madagascar */}
                    <path d="M485.606,356.242c-0.588-1.114-1.684-1.868-2.93-2c-1.246-0.14-2.483,0.351-3.29,1.316l-18.265,21.634c-0.369,0.447-0.834,0.799-1.369,1.027l-10.237,4.483c-1.377,0.596-2.255,1.956-2.255,3.457v21.168c0,0.316-0.044,0.622-0.123,0.921l-2.948,11.8c-0.167,0.684-0.14,1.395,0.07,2.07l6.799,21.072c0.316,0.974,1.001,1.764,1.912,2.22c0.904,0.448,1.966,0.518,2.914,0.184l13.632-4.747c1.158-0.404,2.045-1.333,2.395-2.5l16.072-55.488l3.728-12.677c0.272-0.93,0.176-1.939-0.271-2.808L485.606,356.242z" />
                  </clipPath>

                  {/* Gradient for perimeter contour outline */}
                  <linearGradient id="africa-perimeter-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F2C94C" />
                    <stop offset="45%" stopColor="#E0533C" />
                    <stop offset="100%" stopColor="#16845B" />
                  </linearGradient>

                  {/* Duotone tint overlay */}
                  <linearGradient id="tara-cultural-tint" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#123F2B" stopOpacity="0.25" />
                    <stop offset="65%" stopColor="#16845B" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#E0533C" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Ambient glow shadow tracing the continent boundary */}
                <g className="africa-contour-shadow" aria-hidden="true">
                  <path
                    d="M495.001,189.882c-0.938-1.114-2.43-1.587-3.833-1.228l-37.986,9.826c-1.562,0.403-3.194-0.228-4.088-1.562l-16.51-24.756c-0.193-0.29-0.421-0.554-0.693-0.773l-15.58-13.247c-0.422-0.359-0.755-0.807-0.992-1.316l-19.458-42.969c-0.088-0.219-0.202-0.42-0.342-0.605L384.122,96.97c-0.027-0.044-0.053-0.079-0.079-0.114l-15.756-24.424c-0.526-0.825-0.729-1.825-0.526-2.79l0.464-2.317c0.22-1.105,0.922-2.053,1.912-2.587c1.001-0.535,2.176-0.596,3.22-0.167l2.413,1c1.351,0.562,2.912,0.281,3.991-0.719c1.071-0.992,1.474-2.518,1.036-3.913l-2.711-8.51c-0.403-1.28-1.456-2.246-2.772-2.535l-26.932-5.992c-0.57-0.122-1.176-0.114-1.737,0.027l-21.44,5.359c-0.632,0.158-1.298,0.149-1.931-0.035l-18.756-5.246c-0.693-0.192-1.324-0.578-1.798-1.123l-4.861-5.474c-0.676-0.755-1.622-1.211-2.631-1.255l-11.641-0.587c-1.931-0.088-3.632,1.289-3.913,3.21l-1.403,9.37c-0.158,1.018-0.711,1.93-1.544,2.518c-0.843,0.588-1.886,0.816-2.886,0.632l-24.73-4.676c-1.351-0.263-2.448-1.22-2.877-2.518l-1.798-5.396c-0.5-1.491-1.878-2.518-3.448-2.57l-19.677-0.676c-1.15-0.035-2.211-0.596-2.895-1.509l-6.378-8.51c-0.641-0.851-0.886-1.939-0.684-2.982c0.201-1.053,0.842-1.957,1.754-2.509l1.675-1.009c1.72-1.027,2.325-3.22,1.403-4.992L209.93,2.004c-0.747-1.404-2.29-2.194-3.869-1.966L132.685,10.4c-0.307,0.035-0.606,0.123-0.895,0.237l-21.432,8.729c-0.386,0.166-0.799,0.254-1.22,0.272L95.4,20.357c-0.921,0.053-1.78,0.43-2.43,1.071L67.441,46.176c-0.578,0.562-0.965,1.289-1.096,2.079l-2.018,12.08c-0.166,1.062-0.789,1.992-1.692,2.571l-22.696,14.37c-0.536,0.333-0.983,0.807-1.281,1.359l-20.625,37.294c-0.342,0.614-0.508,1.298-0.474,2l1.596,34.231c0.009,0.298-0.009,0.588-0.07,0.878l-2.903,15.256c-0.211,1.114,0.096,2.272,0.824,3.15l55.522,65.831c0.922,1.088,2.378,1.561,3.773,1.237l24.59-5.974c0.377-0.088,0.763-0.123,1.158-0.097l34.433,2.404c0.474,0.044,0.956-0.026,1.421-0.166l25.608-8.291c1.219-0.394,2.552-0.14,3.544,0.666l15.519,12.704c0.754,0.605,1.728,0.912,2.702,0.834l14.344-1.202c1.053-0.079,2.088,0.271,2.859,0.991c0.782,0.71,1.229,1.71,1.229,2.772v13.905c0,0.192-0.018,0.377-0.044,0.562l-2.211,14.712c-0.149,1.035,0.131,2.105,0.799,2.921l15.905,19.686c0.334,0.42,0.579,0.912,0.719,1.43l12.818,49.69c0.184,0.692,0.158,1.421-0.061,2.096l-11.694,36.661c-0.28,0.878-0.228,1.834,0.14,2.676l19.976,44.733c0.149,0.333,0.254,0.684,0.298,1.062l3.938,30.774c0.088,0.711,0.395,1.378,0.843,1.931l19.212,23.046c0.562,0.685,0.868,1.526,0.868,2.413v16.791c0,1.079,0.465,2.114,1.29,2.833c0.807,0.72,1.894,1.036,2.974,0.895l33.977-4.421l28.529-3.966c0.895-0.131,1.72-0.57,2.316-1.263l43.312-49.716c0.42-0.49,0.719-1.096,0.842-1.736l2.001-9.957c0.193-0.974,0.772-1.842,1.605-2.395l4.553-3.026c1.018-0.694,1.649-1.825,1.675-3.053l0.747-30.775c0.026-0.868,0.35-1.71,0.921-2.368l9.202-10.616c0.474-0.544,1.079-0.93,1.772-1.14l18.686-5.545c1.606-0.473,2.702-1.938,2.702-3.615v-37.442c0-0.316-0.035-0.624-0.114-0.922l-9.106-35.67c-0.439-1.72,0.377-3.509,1.965-4.308l3.088-1.543c0.562-0.281,1.035-0.685,1.386-1.185l27.125-38.293c0.386-0.552,0.921-0.982,1.526-1.263l21.871-9.799c0.834-0.377,1.509-1.053,1.886-1.886l23.599-52.207C496.142,192.532,495.94,190.988,495.001,189.882z"
                    fill="none"
                    stroke="#123F2B"
                    strokeWidth="12"
                    opacity="0.35"
                  />
                </g>

                {/* Masked Portrait Content */}
                <g clipPath="url(#africa-tara-clippath)">
                  {/* Subtle dark backdrop inside mask */}
                  <rect width="512" height="512" fill="#123F2B" />

                  {/* Tara's Portrait Image */}
                  <image
                    href="/images/Tara.jpg"
                    x="0"
                    y="0"
                    width="512"
                    height="682"
                    preserveAspectRatio="xMidYMin slice"
                    className="africa-portrait-img-inner"
                  />

                  {/* Editorial Warm Gradient Overlay */}
                  <rect width="512" height="512" fill="url(#tara-cultural-tint)" />
                </g>

                {/* Elegant Continental Outline Contour */}
                <path
                  d="M495.001,189.882c-0.938-1.114-2.43-1.587-3.833-1.228l-37.986,9.826c-1.562,0.403-3.194-0.228-4.088-1.562l-16.51-24.756c-0.193-0.29-0.421-0.554-0.693-0.773l-15.58-13.247c-0.422-0.359-0.755-0.807-0.992-1.316l-19.458-42.969c-0.088-0.219-0.202-0.42-0.342-0.605L384.122,96.97c-0.027-0.044-0.053-0.079-0.079-0.114l-15.756-24.424c-0.526-0.825-0.729-1.825-0.526-2.79l0.464-2.317c0.22-1.105,0.922-2.053,1.912-2.587c1.001-0.535,2.176-0.596,3.22-0.167l2.413,1c1.351,0.562,2.912,0.281,3.991-0.719c1.071-0.992,1.474-2.518,1.036-3.913l-2.711-8.51c-0.403-1.28-1.456-2.246-2.772-2.535l-26.932-5.992c-0.57-0.122-1.176-0.114-1.737,0.027l-21.44,5.359c-0.632,0.158-1.298,0.149-1.931-0.035l-18.756-5.246c-0.693-0.192-1.324-0.578-1.798-1.123l-4.861-5.474c-0.676-0.755-1.622-1.211-2.631-1.255l-11.641-0.587c-1.931-0.088-3.632,1.289-3.913,3.21l-1.403,9.37c-0.158,1.018-0.711,1.93-1.544,2.518c-0.843,0.588-1.886,0.816-2.886,0.632l-24.73-4.676c-1.351-0.263-2.448-1.22-2.877-2.518l-1.798-5.396c-0.5-1.491-1.878-2.518-3.448-2.57l-19.677-0.676c-1.15-0.035-2.211-0.596-2.895-1.509l-6.378-8.51c-0.641-0.851-0.886-1.939-0.684-2.982c0.201-1.053,0.842-1.957,1.754-2.509l1.675-1.009c1.72-1.027,2.325-3.22,1.403-4.992L209.93,2.004c-0.747-1.404-2.29-2.194-3.869-1.966L132.685,10.4c-0.307,0.035-0.606,0.123-0.895,0.237l-21.432,8.729c-0.386,0.166-0.799,0.254-1.22,0.272L95.4,20.357c-0.921,0.053-1.78,0.43-2.43,1.071L67.441,46.176c-0.578,0.562-0.965,1.289-1.096,2.079l-2.018,12.08c-0.166,1.062-0.789,1.992-1.692,2.571l-22.696,14.37c-0.536,0.333-0.983,0.807-1.281,1.359l-20.625,37.294c-0.342,0.614-0.508,1.298-0.474,2l1.596,34.231c0.009,0.298-0.009,0.588-0.07,0.878l-2.903,15.256c-0.211,1.114,0.096,2.272,0.824,3.15l55.522,65.831c0.922,1.088,2.378,1.561,3.773,1.237l24.59-5.974c0.377-0.088,0.763-0.123,1.158-0.097l34.433,2.404c0.474,0.044,0.956-0.026,1.421-0.166l25.608-8.291c1.219-0.394,2.552-0.14,3.544,0.666l15.519,12.704c0.754,0.605,1.728,0.912,2.702,0.834l14.344-1.202c1.053-0.079,2.088,0.271,2.859,0.991c0.782,0.71,1.229,1.71,1.229,2.772v13.905c0,0.192-0.018,0.377-0.044,0.562l-2.211,14.712c-0.149,1.035,0.131,2.105,0.799,2.921l15.905,19.686c0.334,0.42,0.579,0.912,0.719,1.43l12.818,49.69c0.184,0.692,0.158,1.421-0.061,2.096l-11.694,36.661c-0.28,0.878-0.228,1.834,0.14,2.676l19.976,44.733c0.149,0.333,0.254,0.684,0.298,1.062l3.938,30.774c0.088,0.711,0.395,1.378,0.843,1.931l19.212,23.046c0.562,0.685,0.868,1.526,0.868,2.413v16.791c0,1.079,0.465,2.114,1.29,2.833c0.807,0.72,1.894,1.036,2.974,0.895l33.977-4.421l28.529-3.966c0.895-0.131,1.72-0.57,2.316-1.263l43.312-49.716c0.42-0.49,0.719-1.096,0.842-1.736l2.001-9.957c0.193-0.974,0.772-1.842,1.605-2.395l4.553-3.026c1.018-0.694,1.649-1.825,1.675-3.053l0.747-30.775c0.026-0.868,0.35-1.71,0.921-2.368l9.202-10.616c0.474-0.544,1.079-0.93,1.772-1.14l18.686-5.545c1.606-0.473,2.702-1.938,2.702-3.615v-37.442c0-0.316-0.035-0.624-0.114-0.922l-9.106-35.67c-0.439-1.72,0.377-3.509,1.965-4.308l3.088-1.543c0.562-0.281,1.035-0.685,1.386-1.185l27.125-38.293c0.386-0.552,0.921-0.982,1.526-1.263l21.871-9.799c0.834-0.377,1.509-1.053,1.886-1.886l23.599-52.207C496.142,192.532,495.94,190.988,495.001,189.882z"
                  fill="none"
                  stroke="url(#africa-perimeter-gold)"
                  strokeWidth="3"
                  className="africa-contour-stroke"
                />
                {/* Madagascar Outline Contour */}
                <path
                  d="M485.606,356.242c-0.588-1.114-1.684-1.868-2.93-2c-1.246-0.14-2.483,0.351-3.29,1.316l-18.265,21.634c-0.369,0.447-0.834,0.799-1.369,1.027l-10.237,4.483c-1.377,0.596-2.255,1.956-2.255,3.457v21.168c0,0.316-0.044,0.622-0.123,0.921l-2.948,11.8c-0.167,0.684-0.14,1.395,0.07,2.07l6.799,21.072c0.316,0.974,1.001,1.764,1.912,2.22c0.904,0.448,1.966,0.518,2.914,0.184l13.632-4.747c1.158-0.404,2.045-1.333,2.395-2.5l16.072-55.488l3.728-12.677c0.272-0.93,0.176-1.939-0.271-2.808L485.606,356.242z"
                  fill="none"
                  stroke="url(#africa-perimeter-gold)"
                  strokeWidth="2.5"
                  className="africa-contour-stroke"
                />
              </svg>
            </div>

            <figcaption className="africa-portrait-caption">
              <strong>Tarisai Tara Mabuto</strong>
              <span>MAEd Language & Literature · MMSU</span>
            </figcaption>
          </figure>
        </div>

        {/* 4 Pedagogical Pillars, each infused with its corresponding African Shape */}
        <div className="pillars-grid" aria-label="Selection criteria pillars">
          {pillars.map((pillar, index) => {
            const meta = pillarShapes[index] || pillarShapes[0];
            return (
              <article key={pillar.number} className="pillar-card">
                <div className="pillar-header">
                  <span className="pillar-no">{pillar.number}</span>
                  <div className="pillar-shape-glyph" title={meta.motif}>
                    <img src={meta.icon} alt="" aria-hidden="true" />
                  </div>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
                <div className="pillar-footer">
                  <span className="pillar-concept">{meta.meaning}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Quote Band with Afro-geometric framing */}
        <div className="quote-band-enhanced">
          <div className="quote-shape-left" aria-hidden="true">
            <img src="/images/Shapes/African Shape (2).svg" alt="" />
          </div>
          <div className="quote-content">
            <q>
              A ten-piece corpus can support inquiry; it cannot represent an entire continent.
            </q>
            <p>
              Selection principle: teach each work in its own context, and treat the corpus as a bounded study inventory.
            </p>
          </div>
          <div className="quote-shape-right" aria-hidden="true">
            <img src="/images/Shapes/African Shape (1).svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

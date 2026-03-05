type Feature = {
  icon: string;
  label: string;
  value: string;
};

const features: Feature[] = [
  { icon: "🛏️", label: "Habitación", value: "1 + Vestier" },
  { icon: "🚿", label: "Baños", value: "2" },
  { icon: "📐", label: "Área construida", value: "55 m²" },
  { icon: "🚗", label: "Parqueadero", value: "Cubierto incluido" },
  { icon: "🏢", label: "Piso", value: "2 con ascensor" },
  { icon: "📅", label: "Construcción", value: "2024" },
];

const apartmentFeatures = [
  "Sala / comedor",
  "Cocina integral",
  "Zona de ropas",
  "Balcón",
  "Vestier",
  "Gas domiciliario",
  "Buena iluminación natural",
];

const buildingFeatures = [
  "Unidad cerrada con portería 24h",
  "Control de acceso automático",
  "Piscina",
  "Sauna y turco",
  "Salón social",
  "Coworking",
  "Cancha múltiple",
  "Juegos infantiles",
  "Zonas verdes",
];

export default function PropertyFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Key stats */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Características del apartamento
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {features.map((f) => (
            <div
              key={f.label}
              className="flex flex-col items-center p-5 bg-gray-50 rounded-2xl border border-gray-100"
            >
              <span className="text-3xl mb-2">{f.icon}</span>
              <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                {f.label}
              </span>
              <span className="text-base font-semibold text-gray-900 mt-1 text-center">
                {f.value}
              </span>
            </div>
          ))}
        </div>

        {/* Two-column lists */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Interior del apartamento
            </h3>
            <ul className="space-y-2">
              {apartmentFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Amenidades del conjunto
            </h3>
            <ul className="space-y-2">
              {buildingFeatures.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

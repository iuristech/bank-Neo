import React from "react";

interface ServiceSectionProps {
  title: string;
  services: string[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, services }) => {
  return (
    <div className="p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
      <h3 className="text-lg font-semibold text-black text-center mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-black">
        {services.map((service, index) => (
          <li key={index} className="text-center">
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PremiumService: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">
          Premium Services For Entreprises
        </h3>
        <div className="w-full h-1 bg-black mx-auto mb-12"></div>
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-3 gap-8">
        <ServiceSection
          title="Corporate Treasury Management"
          services={[
            "Digital checking and savings accounts",
            "No/low-fee banking options",
            "Peer-to-peer (P2P) transfers",
            "Round-up savings programs",
            "Personal budgeting and financial tools",
          ]}
        />
        <ServiceSection
          title="Mergers & Acquisitions Advisory"
          services={[
            "Term loans for capital investments",
            "Lines of credit for operational expenses",
            "Mortgage-backed securities (MBS)",
            "Flexible personal and business loan structures",
          ]}
        />
        <ServiceSection
          title="Capital Market Solutions"
          services={[
            "Online payment gateway services",
            "Cross-border payments (freelancer and SME-focused)",
            "International remittances",
            "ACH and wire transfer services",
          ]}
        />
      </div>
      <div className="grid grid-cols-1 m-5 md:grid-cols-2 gap-8 mt-12">
        <ServiceSection
          title="Custom Financing Structures"
          services={[
            "Mobile app banking experience",
            "Crypto wallet integration",
            "Open banking API solutions",
            "Real-time account updates and alerts",
          ]}
        />
        <ServiceSection
          title="Risk Management & Hedging"
          services={[
            "Digital wallets for users and businesses",
            "QR code payments",
            "Subscription and recurring payment management",
            "Integration with popular e-commerce platforms",
          ]}
        />
      </div>
    </section>
  );
};

export default PremiumService;

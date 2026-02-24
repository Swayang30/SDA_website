import { Metadata } from "next";
import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { LotusIcon, OmIcon, DiyaIcon } from "@/components/icons/spiritual-icons";

export const metadata: Metadata = {
  title: "Core Values & Philosophy",
  description:
    "Discover the spiritual philosophy and core values that guide Swami Debananda Ashram.",
};

const philosophyPrinciples = [
  {
    icon: OmIcon,
    title: "Advaita Vedanta",
    subtitle: "Non-Dual Philosophy",
    description:
      "At the heart of our teachings lies Advaita Vedanta - the philosophy of non-duality. This ancient wisdom teaches that the individual self (Atman) and the universal consciousness (Brahman) are one and the same. The apparent separation we experience is due to ignorance (avidya), and through knowledge (jnana), meditation, and self-inquiry, this illusion can be transcended.",
    points: [
      "Recognition of the essential unity of all existence",
      "The world as a superimposition on the unchanging reality",
      "Self-knowledge as the means to liberation",
      "The importance of a qualified teacher in spiritual growth",
    ],
  },
  {
    icon: LotusIcon,
    title: "Karma Yoga",
    subtitle: "Path of Selfless Action",
    description:
      "We embrace the teaching of Karma Yoga as expounded in the Bhagavad Gita. This path involves performing one's duties without attachment to the results, offering all actions as worship to the Divine. Through selfless service, the ego is purified and the mind becomes fit for higher knowledge.",
    points: [
      "Action performed without selfish motivation",
      "Acceptance of all results with equanimity",
      "Work as worship and spiritual practice",
      "Service to others as service to the Divine",
    ],
  },
  {
    icon: DiyaIcon,
    title: "Bhakti Marga",
    subtitle: "Path of Devotion",
    description:
      "Devotion to the Divine is recognized as a powerful path to spiritual realization. Through love and surrender to the Supreme, the heart is purified and the seeker is drawn naturally toward the ultimate truth. Devotion and knowledge are seen not as opposing paths but as complementary aspects of the spiritual journey.",
    points: [
      "Cultivation of love for the Divine",
      "Surrender of the ego to higher consciousness",
      "Recognition of the Divine in all beings",
      "Japa, prayer, and ritual as aids to devotion",
    ],
  },
];

const coreValues = [
  {
    title: "Truth (Satya)",
    description:
      "Commitment to truth in thought, word, and deed. We encourage seekers to pursue truth with sincerity and courage, even when it challenges comfortable beliefs.",
  },
  {
    title: "Non-Violence (Ahimsa)",
    description:
      "Practice of non-violence in all aspects of life - physical, mental, and verbal. This includes compassion toward all living beings and environmental responsibility.",
  },
  {
    title: "Purity (Saucha)",
    description:
      "Maintenance of purity in body, mind, and environment. This includes sattvic food, clean living spaces, and cultivation of pure thoughts.",
  },
  {
    title: "Contentment (Santosha)",
    description:
      "Cultivation of contentment and gratitude regardless of external circumstances. True happiness comes from within, not from material possessions.",
  },
  {
    title: "Self-Discipline (Tapas)",
    description:
      "Practice of discipline in spiritual pursuits. This includes regular meditation, study, and adherence to a disciplined lifestyle conducive to spiritual growth.",
  },
  {
    title: "Self-Study (Svadhyaya)",
    description:
      "Regular study of scriptures and introspection. Understanding sacred texts and examining one's own thoughts and actions are essential for spiritual progress.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHeader
        title="Core Values & Philosophy"
        description="The spiritual foundation and guiding principles that shape our community"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Philosophy", href: "/about/philosophy" },
        ]}
      />

      {/* Introduction */}
      <SectionWrapper variant="white">
        <div className="max-w-3xl mx-auto text-center">
          <OmIcon className="h-16 w-16 text-primary mx-auto" />
          <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground">
            The Foundation of Our Path
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The philosophy of Swami Debananda Ashram is rooted in the ancient
            Vedantic tradition of India, particularly the Advaita (non-dual)
            school as expounded by Adi Shankaracharya. While remaining firmly
            grounded in this tradition, our approach embraces the universal
            truths found in all authentic spiritual paths.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We believe that the ultimate reality can be approached through
            various paths - knowledge (jnana), devotion (bhakti), and selfless
            action (karma) - and that each seeker must find the approach most
            suited to their temperament. The goal, however, remains the same:
            the direct realization of one's true nature as infinite
            consciousness.
          </p>
        </div>
      </SectionWrapper>

      {/* Philosophy Principles */}
      <SectionWrapper variant="cream">
        <SectionHeader
          title="Spiritual Philosophy"
          description="The three principal paths that guide our spiritual practice"
        />
        <div className="space-y-16">
          {philosophyPrinciples.map((principle, index) => (
            <div
              key={principle.title}
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <principle.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-widest text-primary">
                  {principle.subtitle}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
              <div
                className={`bg-card p-8 rounded-xl ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <h4 className="font-medium text-foreground mb-4">
                  Key Principles
                </h4>
                <ul className="space-y-3">
                  {principle.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <LotusIcon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper variant="white">
        <SectionHeader
          title="Core Values"
          description="The ethical principles that guide our daily life and practice"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="p-6 bg-secondary rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Scripture Quote */}
      <SectionWrapper variant="primary" className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl text-primary-foreground italic">
            "Brahma satyam jagan mithya, jivo brahmaiva naparah"
          </p>
          <p className="mt-4 text-primary-foreground/80">
            Brahman alone is real, the world is appearance, and the individual
            self is none other than Brahman.
          </p>
          <p className="mt-2 text-sm text-primary-foreground/60">
            — Adi Shankaracharya
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}

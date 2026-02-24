import { Metadata } from "next";
import { PageHeader } from "@/components/sections/hero-section";
import { SectionWrapper, SectionHeader } from "@/components/ui/section-wrapper";
import { LotusIcon } from "@/components/icons/spiritual-icons";

export const metadata: Metadata = {
  title: "About Swamiji",
  description:
    "Learn about the life, teachings, and spiritual journey of Swami Debananda, the founder of our ashram.",
};

const timeline = [
  {
    year: "1945",
    title: "Birth & Early Life",
    description:
      "Born in a devout Bengali Brahmin family in Howrah, West Bengal. From childhood, showed exceptional spiritual inclination and devotion.",
  },
  {
    year: "1960",
    title: "Meeting the Guru",
    description:
      "At age 15, met his spiritual master who recognized his spiritual potential and initiated him into the path of Vedanta and meditation.",
  },
  {
    year: "1965",
    title: "Renunciation",
    description:
      "After completing his formal education, renounced worldly life and took sannyasa, dedicating himself fully to spiritual practice and service.",
  },
  {
    year: "1970",
    title: "Years of Sadhana",
    description:
      "Spent years in intense meditation and study in the Himalayas, deepening his realization and understanding of the scriptures.",
  },
  {
    year: "1980",
    title: "Beginning of Teaching",
    description:
      "Began teaching and guiding seekers. His profound wisdom and compassionate guidance attracted devotees from all backgrounds.",
  },
  {
    year: "1995",
    title: "Founding the Ashram",
    description:
      "Established Swami Debananda Ashram as a center for Vedantic studies, meditation, and spiritual transformation.",
  },
  {
    year: "Present",
    title: "Continuing the Mission",
    description:
      "Continues to guide seekers through daily satsangs, retreats, and personal guidance, spreading the message of Advaita Vedanta.",
  },
];

export default function AboutSwamiji() {
  return (
    <>
      <PageHeader
        title="About Swami Debananda"
        description="A life dedicated to spiritual service and the dissemination of Vedantic wisdom"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Swamiji", href: "/about/swamiji" },
        ]}
      />

      {/* Introduction */}
      <SectionWrapper variant="white">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="aspect-3/4 overflow-hidden rounded-2xl">
              <img
                src="/images/swamiji-portrait.jpg"
                alt="Swami Debananda"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground">
              A Beacon of Spiritual Light
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Swami Debananda represents the living tradition of Advaita
                Vedanta, a lineage that traces back through an unbroken chain of
                spiritual masters to the ancient rishis of India. His life
                exemplifies the synthesis of profound wisdom and compassionate
                action.
              </p>
              <p>
                Born with an innate spiritual temperament, Swamiji showed signs
                of deep contemplation even as a child. While other children
                played, he was often found in meditation or absorbed in
                spiritual inquiry. His family recognized these signs and
                encouraged his spiritual growth.
              </p>
              <p>
                Under the guidance of his master, Swamiji underwent rigorous
                training in the scriptures, meditation techniques, and the
                practical aspects of spiritual life. Years of intense sadhana in
                the Himalayas culminated in the direct realization of the Self -
                the ultimate goal of Vedantic practice.
              </p>
              <p>
                Today, Swamiji continues to guide seekers with the same
                simplicity, clarity, and compassion that has characterized his
                entire spiritual career. His teachings emphasize the practical
                application of Vedantic wisdom in daily life, making the ancient
                truths accessible to modern seekers.
              </p>
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-xl">
              <LotusIcon className="h-8 w-8 text-primary" />
              <blockquote className="mt-4 font-serif text-xl italic text-foreground">
                "The truth you seek is not far away. It is the very essence of
                your being. Turn within, and you shall find what you have always
                been searching for."
              </blockquote>
              <p className="mt-3 text-sm text-primary font-medium">
                — Swami Debananda
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper variant="cream">
        <SectionHeader
          title="Life Journey"
          description="Key milestones in Swamiji's spiritual journey"
        />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1.5" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {item.year}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Teaching Philosophy */}
      <SectionWrapper variant="white">
        <SectionHeader
          title="Teaching Philosophy"
          description="The principles that guide Swamiji's approach to spiritual instruction"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Direct Experience",
              description:
                "Swamiji emphasizes that true knowledge comes not from books alone, but from direct spiritual experience through meditation and self-inquiry.",
            },
            {
              title: "Practical Application",
              description:
                "Teachings are always grounded in practical applicability, showing how ancient wisdom can be lived in modern daily life.",
            },
            {
              title: "Individual Guidance",
              description:
                "Recognizing that each seeker is unique, Swamiji provides personalized guidance suited to individual temperaments and needs.",
            },
            {
              title: "Scriptural Foundation",
              description:
                "All teachings are rooted in the authentic Vedantic scriptures - Upanishads, Bhagavad Gita, and Brahma Sutras.",
            },
            {
              title: "Gradual Unfoldment",
              description:
                "Spiritual development is seen as a gradual process, with teachings imparted step by step according to the student's readiness.",
            },
            {
              title: "Universal Approach",
              description:
                "While rooted in Vedanta, Swamiji's teachings embrace the universal truths found in all spiritual traditions.",
            },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-secondary rounded-xl">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

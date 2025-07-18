import type { Metadata } from "next";
import Image from "next/image";
import styles from "./about.module.scss";
import buttonLinksStyles from "../../components/ui/buttonLinks.module.scss";
import Button from "../../components/ui/button";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgentherapy.co.uk"),
  title: "About me - Next Generation Therapy",
  description:
    "Learn about Andreea Horhocea, a psychodynamic psychotherapist with extensive experience working with children, young people, and adults. Discover her approach to therapy, her qualifications, and her dedication to creating a safe and supportive space for personal growth.",
  keywords: [
    "psychodynamic psychotherapy",
    "Andreea Horhocea",
    "mental health",
    "therapy for children",
    "therapy for young people",
    "therapy for adults",
    "Colchester therapy",
    "online therapy",
  ],
  authors: [{ name: "Andreea Horhocea" }],
  alternates: {
    canonical: "https://nextgentherapy.co.uk/about",
  },
  robots: "index, follow",
  openGraph: {
    title: "About me - Next Generation Therapy",
    description:
      "Learn about Andreea Horhocea, a psychodynamic psychotherapist with extensive experience working with children, young people, and adults. Discover her approach to therapy, her qualifications, and her dedication to creating a safe and supportive space for personal growth.",
    url: "https://nextgentherapy.co.uk/about",
    images: [
      {
        url: "https://nextgentherapy.co.uk/images/default-social-share.jpg",
        width: 300,
        height: 300,
        alt: "Andreea Horhocea - Psychodynamic Psychotherapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About me - Next Generation Therapy",
    description:
      "Learn about Andreea Horhocea, a psychodynamic psychotherapist with extensive experience working with children, young people, and adults.",
    images: ["https://nextgentherapy.co.uk/images/default-social-share.jpg"],
  },
};

// Therapy room images for gallery
const therapyRoomImages = [
  { src: "/images/office.jpg", alt: "Picture of office with laptop" },
  {
    src: "/images/doll-house.jpg",
    alt: "Picture of doll house for play therapy for children",
  },
  {
    src: "/images/board-games.jpg",
    alt: "Picture of shelves including games for children to play with",
  },
  {
    src: "/images/room-2.jpg",
    alt: "Picture of therapy room with sofa and arm chair",
  },
  {
    src: "/images/room.jpg",
    alt: "Picture of therapy room with sofa and arm chair",
  },
  { src: "/images/shelf.jpeg", alt: "Picture of shelf with plants on" },
];

export default function AboutMe() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.greeting}>
            <h1>About Me</h1>
          </div>
        </section>

        {/* Image Section */}
        <section className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/andreea.jpg"
              alt="Andreea Horhocea - Psychodynamic Psychotherapist"
              height={400}
              width={400}
              priority
              className={styles.image}
            />
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <article className={styles.textContainer}>
            <div className={styles.introSection}>
              <h3>Hi There</h3>
              <p>I am Andreea. Lovely to meet you.</p>
              <p>
                I am a psychodynamic psychotherapist. I graduated a Masters in
                Psychodynamic Psychotherapy and a BA in Criminology and Social
                Psychology rewarded by University of Essex. I have been working
                with children, young people and adults for the last 6 years in
                many settings. I have experience within primary and secondary
                schools, charity sector as well as the NHS.
              </p>
            </div>

            <div className={styles.approachSection}>
              <p>
                I understand the importance of finding the right therapist for
                you and how the process sometimes can be exhausting and
                frustrating. Whether it&apos;s your first time looking for
                therapy or you have tried different places so far, I hope to
                make your journey as smooth as possible.
              </p>
              <p>
                At the moment, I am also working with YMCA Trinity supporting
                young people in schools. I have experience delivering groups to
                young people as well as parents/carers. I am a registered member
                of British Association of Counselling and Psychotherapy (BACP)
                and I adhere by their framework.
              </p>
            </div>

            <div className={styles.philosophySection}>
              <p>
                I started my practice to offer you a space where you can
                comfortably and confidently explore your story. I believe that
                every story has a unique twist and I would love to hear yours.
              </p>
              <p>
                Contrary to popular belief, therapy is not just for times of
                crisis but a valuable resource regardless of the stage of life.
              </p>
              <p>
                After working under multiple organisations for the last few
                years, I realised that there is a greater need for support. I
                have noticed that children, young people and adults have become
                more and more aware of the complexities of mental health and the
                impact it has on their daily lives.
              </p>
            </div>

            <div className={styles.practiceSection}>
              <p>
                I believe that once the struggle is identified it&rsquo;s
                important to be able to access support as quickly as possible
                and I aim to offer an initial session within a week of first
                contact.
              </p>
              <p>
                Working on an open-ended basis allows me to connect with you,
                unrestricted by deadlines and minimizes the pressure of having
                to explore everything too quickly. We work at your pace and
                there is no expectation for you to share more than you feel
                comfortable with at any point.
              </p>
              <p>
                My main priority is creating a therapeutic relationship where
                you feel able to be seen, heard and respected. I am a warm,
                welcoming person and I understand how daunting it can be to look
                for a practitioner to share your experience with.
              </p>
              <p>
                With little ones, I always use resources and play to connect
                with them on a playful manner which will allow us to explore
                painful or challenging emotions later on. I am drawing from
                psychodynamic psychotherapy approaches while also encouraging
                mindfulness and sometimes suggesting coping strategies that may
                be beneficial from case to case.
              </p>
              <p>
                You will always be the person in charge and if you believe that
                my approach is not right for you or we are not the right
                therapeutic match, I am happy to help you in the search for a
                better fit for you.
              </p>
            </div>
          </article>
        </section>

        {/* Therapy Room Gallery */}
        <section className={styles.gallerySection}>
          <h2>My Therapy Environment</h2>
          <div className={styles.therapyGallery}>
            {therapyRoomImages.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={300}
                  width={400}
                  className={styles.galleryImage}
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </section>

        <section className={buttonLinksStyles.buttonLinks}>
          <Button href="/about-therapy">About Therapy</Button>
          <Button href="/services">Services</Button>
          <Button href="/book-now">Book Now</Button>
        </section>
      </main>
    </div>
  );
}

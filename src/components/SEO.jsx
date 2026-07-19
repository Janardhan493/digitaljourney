import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      <title>DigitalJourney | From Local to Global</title>

      <meta
        name="description"
        content="DigitalJourney helps businesses grow with website development, branding, digital marketing, SEO, photography and promotional videos."
      />

      <meta
        name="keywords"
        content="DigitalJourney, Website Development, Digital Marketing, Branding, Photography, SEO, Social Media Marketing"
      />

      <meta
        property="og:title"
        content="DigitalJourney"
      />

      <meta
        property="og:description"
        content="Helping businesses grow from Local to Global."
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:image"
        content="/preview.png"
      />

      <meta
        property="og:url"
        content="https://digitaljourney.in"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
    </Helmet>
  );
}
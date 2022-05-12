import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Known Hackers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Known Hackers" />
        <hr />
        <p className="description">
          Want to submit a hacker you know?
          Fill out this form with their details to get them listed!
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}

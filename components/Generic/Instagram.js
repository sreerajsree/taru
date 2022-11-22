import Head from 'next/head';

export default function Instagram() {
  return (
    <div>
      <Head>
        <script src="https://apps.elfsight.com/p/platform.js" defer />
      </Head>
      <div className="h-[300px] md:h-[550px] overflow-hidden">
        <div className="elfsight-app-4ce142f6-5981-48cf-b8da-32aea8656d55" />
      </div>
    </div>
  );
}

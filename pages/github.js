import { useEffect } from 'react';
import { NextSeo } from 'next-seo';

export default function GitHubRedirect() {
  useEffect(() => {
    window.location = 'https://github.com/james-wallis/ameira.me';
  }, []);
  return (
    <>
      <NextSeo
        noindex
        nofollow
      />
    </>
  );
}

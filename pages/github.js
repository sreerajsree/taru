import { useEffect } from 'react';
import { NextSeo } from 'next-seo';

export default function GitHubRedirect() {
  useEffect(() => {
    window.location = '/';
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

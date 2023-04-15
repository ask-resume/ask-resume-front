import type { AnimationItem } from 'lottie-web';
import Link from 'next/link';

import Text from 'shared-ui/src/components/Text';
import Button from 'shared-ui/src/components/Button';
import LottieAnimation from '@/components/shared/LottieAnimation';

interface HomeProps {
  landingPageAnimation: AnimationItem;
}

export default function Home({ landingPageAnimation }: HomeProps) {
  return (
    <main>
      <div>
        <Text lineHeight="narrow">
          Find out what questions to ask on your resume in a job interview. Typing the options you
          want and upload your resume pdf file.
        </Text>
        <Link href="/form/user-info">
          <Button>Go to form page</Button>
        </Link>
      </div>
      <LottieAnimation animationData={landingPageAnimation} />
    </main>
  );
}

export async function getStaticProps() {
  const landingPageAnimation = await import('public/animation/landing-page.json');

  return {
    props: {
      landingPageAnimation: landingPageAnimation.default,
    },
  };
}

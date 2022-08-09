import Link from 'next/link';
import Image from 'next/image';
import GooglePlayBadgeImage from '/public/images/google-play-badge.webp';
import AppStoreBadgeImage from '/public/images/app-store-badge.webp';

const DownloadAppSection = () => {
  return (
    <section className='flex flex-col md:hidden p-8 items-center gap-4 -mb-24'>
      <h2 className='text-2xl font-semibold'>Download our App</h2>
      <div className='flex'>
        <Link href='https://apps.apple.com/us/app/kudoshealth/id1457996773?uo=4&at=11l6hc&app=itunes&ct=fnd'>
          <button>
            <Image src={AppStoreBadgeImage} alt='Download on the App Store' width={196} height={64} />
          </button>
        </Link>
        <Link href='https://play.google.com/store/apps/details?id=com.kudoshealth.mobileapp4'>
          <button>
            <Image src={GooglePlayBadgeImage} alt='Get it on Google Play' width={160} height={64} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DownloadAppSection;

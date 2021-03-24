import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { ButtonLink } from '../elements/button';
import { Label } from '../elements/label';
import { Link, LinkVariants } from '../elements/link';

const NewsletterSubscription = dynamic(() => import('../components/newsletter-subscription'), { ssr: false });

const Address = {
  name: 'smartive AG',
  street: 'Pfingstweidstrasse 60',
  country: 'CH',
  postalCode: '8005',
  locality: 'Zürich',
  telephone: '+41 44 552 55 99',
  email: 'hello@smartive.ch',
} as const;

export const Footer: FC = () => (
  <footer className="bg-cornflower-500">
    <div className="container mx-auto px-4 pt-24 xl:pt-32 pb-8 h-full">
      <Label as="div" className="hidden lg:grid grid-cols-4 grid-flow-row items-end justify-items-center">
        <address
          className="not-italic grid grid-flow-row place-self-start"
          itemScope
          itemType="http://schema.org/Organization"
        >
          <span itemProp="name">{Address.name}</span>
          <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            <span itemProp="streetAddress">{Address.street}</span>
            <br />
            <span itemProp="addressCountry">{Address.country}</span>-<span itemProp="postalCode">{Address.postalCode}</span>
            &nbsp;
            <span itemProp="addressLocality">{Address.locality}</span>
          </div>
          <span>
            <Link variant={LinkVariants.Navigation} href={`tel:${Address.telephone}`} itemProp="telephone">
              {Address.telephone}
            </Link>
          </span>
          <span>
            <Link variant={LinkVariants.Navigation} href={`mailto:${Address.email}`} itemProp="email">
              {Address.email}
            </Link>
          </span>
        </address>

        <NewsletterSubscription className="col-span-2 place-items-center" label="Newsletter" />

        <div className="grid grid-flow-row place-self-end justify-items-start">
          <Link variant={LinkVariants.Navigation} href="https://www.linkedin.com/company/smartive-ag/" newTab>
            LinkedIn
          </Link>
          <Link variant={LinkVariants.Navigation} href="https://www.instagram.com/smartive_ch/" newTab>
            Instagram
          </Link>
          <Link variant={LinkVariants.Navigation} href="https://twitter.com/smartive_ch" newTab>
            Twitter
          </Link>
          <Link variant={LinkVariants.Navigation} href="https://facebook.com/smartive.ch" newTab>
            Facebook
          </Link>
        </div>
        <SwissMadeSoftwareLogo />
      </Label>

      <Label as="div" className="relative grid lg:hidden grid-flow-row place-items-center gap-8 max-w-[20rem] mx-auto">
        <address
          className="not-italic grid grid-flow-row text-center w-full"
          itemScope
          itemType="http://schema.org/Organization"
        >
          <span itemProp="name">{Address.name}</span>
          <div className="mb-4" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            <span itemProp="streetAddress">{Address.street}</span>
            <br />
            <span itemProp="addressCountry">{Address.country}</span>-<span itemProp="postalCode">{Address.postalCode}</span>
            &nbsp;
            <span itemProp="addressLocality">{Address.locality}</span>
          </div>
          <span className="my-4">
            <ButtonLink href={`tel:${Address.telephone}`} itemProp="telephone">
              {Address.telephone}
            </ButtonLink>
          </span>
          <span className="mb-4">
            <ButtonLink href={`mailto:${Address.email}`} itemProp="email">
              {Address.email}
            </ButtonLink>
          </span>
          <span>
            <ButtonLink href="https://www.google.com/maps/dir//smartive+AG,+Pfingstweidstrasse+60,+8005+Z%C3%BCrich" newTab>
              Anfahrtsplan
            </ButtonLink>
          </span>
        </address>
        <div className="grid grid-flow-row place-items-center">
          <Link variant={LinkVariants.Navigation} href="https://www.linkedin.com/company/smartive-ag/" newTab>
            LinkedIn
          </Link>
          <Link variant={LinkVariants.Navigation} href="https://www.instagram.com/smartive_ch/" newTab>
            Instagram
          </Link>
          <Link variant={LinkVariants.Navigation} href="https://twitter.com/smartive_ch" newTab>
            Twitter
          </Link>
          <Link variant={LinkVariants.Navigation} href="https://facebook.com/smartive.ch" newTab>
            Facebook
          </Link>
        </div>
        <NewsletterSubscription className="w-full" />
        <SwissMadeSoftwareLogo />
      </Label>
    </div>
  </footer>
);

const SwissMadeSoftwareLogo = () => (
  <svg
    className="lg:col-span-4 text-center mt-8 lg:mt-32 text-black"
    width="244"
    height="25"
    viewBox="0 0 244 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M53.828 19.643H53.685C52.1719 19.643 50.3685 18.7759 49.6315 17.2846C49.5618 17.1502 49.5218 17.0023 49.5144 16.8511C49.5224 16.6146 49.6234 16.3908 49.7955 16.2284C49.9676 16.066 50.1969 15.9782 50.4335 15.984C50.5905 15.9779 50.7466 16.0112 50.8875 16.0808C51.0283 16.1505 51.1495 16.2543 51.2399 16.3829C51.8338 17.1632 52.8526 17.8742 53.7283 17.8699H53.8454C55.289 17.8699 56.117 17.0592 56.1127 16.2788C56.1517 13.1271 49.961 15.5115 49.948 11.0158C49.948 8.74415 52.328 7.98115 53.8193 7.98115H53.9147C55.029 7.95721 56.1201 8.30161 57.0188 8.96092C57.1252 9.04002 57.2111 9.14353 57.2691 9.26272C57.3272 9.38192 57.3559 9.51333 57.3526 9.64589C57.3526 9.87585 57.2612 10.0964 57.0986 10.259C56.936 10.4216 56.7155 10.5129 56.4855 10.5129C56.3018 10.5073 56.1221 10.4582 55.961 10.3699C55.3396 9.96976 54.619 9.75059 53.88 9.73693H53.7847C52.4581 9.73693 51.7514 10.3352 51.7297 11.0375C51.6864 13.6387 57.8815 11.5187 57.8945 16.2398V16.3309C57.9205 18.4725 55.8092 19.6387 53.828 19.643Z"
      fill="currentColor"
    />
    <path
      d="M73.7009 9.03499L70.9307 18.9324C70.8779 19.1222 70.7647 19.2896 70.6082 19.4093C70.4518 19.529 70.2606 19.5944 70.0636 19.5957H69.8729C69.6739 19.5844 69.4825 19.5158 69.3217 19.3981C69.1609 19.2804 69.0376 19.1186 68.9668 18.9324C68.3945 16.8948 66.8642 11.22 66.7211 10.8645C66.6041 11.2416 65.1041 16.9338 64.5535 18.9411C64.4981 19.1316 64.385 19.3002 64.2297 19.4237C64.0744 19.5472 63.8845 19.6194 63.6864 19.6304H63.474C63.2776 19.6294 63.0868 19.5645 62.9304 19.4457C62.774 19.3268 62.6605 19.1604 62.607 18.9714L59.8151 9.08268C59.7866 8.99874 59.7706 8.91112 59.7674 8.82256C59.7672 8.70419 59.7912 8.58702 59.838 8.47828C59.8848 8.36955 59.9533 8.27154 60.0394 8.19031C60.1255 8.10908 60.2274 8.04634 60.3386 8.00596C60.4499 7.96558 60.5683 7.94841 60.6864 7.95551C60.8845 7.94974 61.0786 8.01198 61.2363 8.13188C61.3941 8.25178 61.506 8.42209 61.5535 8.61447L63.6084 15.8023L65.7197 8.57979C65.7853 8.36999 65.9234 8.19032 66.1092 8.07281C66.295 7.95531 66.5164 7.90759 66.7341 7.93817H66.7601C67.4711 7.93817 67.6835 8.21996 67.7789 8.57545L69.9466 15.811L71.9885 8.58846C72.0283 8.39954 72.1319 8.23006 72.2819 8.10849C72.4318 7.98692 72.6191 7.92066 72.8122 7.92083C72.931 7.91249 73.0503 7.92873 73.1626 7.96856C73.2749 8.00838 73.3778 8.07092 73.4649 8.15228C73.5519 8.23364 73.6213 8.33207 73.6686 8.44143C73.7159 8.55079 73.7402 8.66873 73.7399 8.78788C73.7368 8.87151 73.7237 8.95446 73.7009 9.03499Z"
      fill="currentColor"
    />
    <path
      d="M77.2427 5.26295C77.1234 5.26781 77.0043 5.24795 76.893 5.20463C76.7817 5.1613 76.6805 5.09545 76.5959 5.01119C76.5112 4.92694 76.4448 4.82609 76.401 4.71499C76.3571 4.60389 76.3367 4.48492 76.341 4.36556V3.84532C76.3324 3.72194 76.3493 3.59811 76.3906 3.48154C76.432 3.36497 76.4968 3.25814 76.5812 3.1677C76.6656 3.07727 76.7676 3.00516 76.8811 2.95585C76.9945 2.90655 77.1169 2.8811 77.2405 2.8811C77.3642 2.8811 77.4866 2.90655 77.6 2.95585C77.7134 3.00516 77.8155 3.07727 77.8999 3.1677C77.9843 3.25814 78.0491 3.36497 78.0904 3.48154C78.1318 3.59811 78.1487 3.72194 78.1401 3.84532V4.36556C78.1444 4.48455 78.124 4.60313 78.0804 4.71393C78.0369 4.82473 77.9709 4.92536 77.8867 5.00955C77.8025 5.09374 77.7019 5.15969 77.5911 5.20329C77.4803 5.24689 77.3617 5.2672 77.2427 5.26295ZM77.2817 19.5693C77.1624 19.5742 77.0433 19.5543 76.932 19.511C76.8207 19.4677 76.7195 19.4018 76.6349 19.3176C76.5502 19.2333 76.4839 19.1325 76.44 19.0214C76.3961 18.9102 76.3757 18.7913 76.38 18.6719L76.354 8.77885C76.3698 8.55106 76.4715 8.33776 76.6384 8.18199C76.8054 8.02623 77.0252 7.9396 77.2535 7.9396C77.4819 7.9396 77.7017 8.02623 77.8687 8.18199C78.0356 8.33776 78.1373 8.55106 78.1531 8.77885L78.1791 18.6719C78.1852 18.792 78.1663 18.912 78.1235 19.0243C78.0807 19.1367 78.0151 19.2389 77.9307 19.3245C77.8463 19.4101 77.745 19.4773 77.6333 19.5216C77.5216 19.566 77.4019 19.5867 77.2817 19.5823V19.5693Z"
      fill="currentColor"
    />
    <path
      d="M85.1373 19.5608H84.9942C83.4812 19.5608 81.6821 18.6721 80.9451 17.2068C80.8732 17.073 80.8317 16.9249 80.8237 16.7732C80.8316 16.5367 80.9326 16.3129 81.1048 16.1506C81.2769 15.9882 81.5062 15.9003 81.7427 15.9062C81.9001 15.898 82.0569 15.9304 82.1981 16.0002C82.3393 16.0701 82.4601 16.175 82.5491 16.305C83.143 17.0854 84.1618 17.792 85.0375 17.7877H85.1589C86.6026 17.7877 87.4263 16.977 87.4263 16.1967C87.4653 13.0493 81.2702 15.4337 81.2572 10.9337C81.2572 8.66198 83.6416 7.89897 85.1329 7.89897H85.2283C86.3397 7.87663 87.4275 8.22096 88.3237 8.87874C88.4296 8.95834 88.515 9.06194 88.5731 9.18102C88.6311 9.3001 88.66 9.43126 88.6575 9.56371C88.6575 9.79367 88.5661 10.0142 88.4035 10.1768C88.2409 10.3394 88.0204 10.4308 87.7904 10.4308C87.6084 10.4267 87.4301 10.3791 87.2702 10.292C86.648 9.89009 85.9256 9.6708 85.1849 9.65909H85.0896C83.7673 9.65909 83.0563 10.253 83.0347 10.9597C82.9956 13.5391 89.1907 11.4409 89.2037 16.162V16.2574C89.2297 18.3946 87.1271 19.5565 85.1373 19.5608Z"
      fill="currentColor"
    />
    <path
      d="M95.763 19.5346H95.6199C94.1069 19.5346 92.3078 18.6676 91.5664 17.1806C91.4977 17.0458 91.4579 16.8982 91.4494 16.7471C91.4584 16.511 91.5598 16.2878 91.7317 16.1257C91.9036 15.9635 92.1322 15.8753 92.3685 15.88C92.526 15.8735 92.6826 15.9071 92.8236 15.9776C92.9647 16.0482 93.0855 16.1533 93.1748 16.2832C93.7688 17.0636 94.7875 17.7702 95.6633 17.7659H95.7847C97.2283 17.7659 98.052 16.9552 98.052 16.1748C98.091 13.0274 91.8959 15.4075 91.8829 10.9118C91.8829 8.64014 94.2673 7.87714 95.7586 7.87714H95.854C96.9704 7.8626 98.0603 8.21775 98.9537 8.88725C99.0602 8.96636 99.146 9.06986 99.2041 9.18906C99.2622 9.30826 99.2908 9.43966 99.2875 9.57222C99.2875 9.80218 99.1962 10.0227 99.0336 10.1853C98.871 10.3479 98.6505 10.4393 98.4205 10.4393C98.2382 10.4334 98.0599 10.3844 97.9003 10.2962C97.2764 9.89802 96.555 9.67906 95.815 9.66327H95.7196C94.4191 9.66327 93.6864 10.2615 93.6647 10.9638C93.6257 13.565 99.8208 11.4451 99.8338 16.1662V16.2615C99.8555 18.3641 97.7529 19.5303 95.763 19.5346Z"
      fill="currentColor"
    />
    <path
      d="M121.84 19.4696C121.72 19.4745 121.601 19.4546 121.49 19.4113C121.379 19.368 121.277 19.3021 121.193 19.2179C121.108 19.1336 121.042 19.0328 120.998 18.9217C120.954 18.8106 120.934 18.6916 120.938 18.5722V11.5664C120.938 10.2659 120.127 9.57656 118.918 9.5809H118.671C118.402 9.57736 118.136 9.62785 117.887 9.72938C117.638 9.83091 117.413 9.98139 117.223 10.1719C117.034 10.3624 116.885 10.589 116.785 10.8382C116.685 11.0875 116.636 11.3543 116.642 11.6228V18.5332C116.65 18.6566 116.633 18.7804 116.592 18.897C116.551 19.0136 116.486 19.1204 116.401 19.2108C116.317 19.3013 116.215 19.3734 116.102 19.4227C115.988 19.472 115.866 19.4974 115.742 19.4974C115.618 19.4974 115.496 19.472 115.383 19.4227C115.269 19.3734 115.167 19.3013 115.083 19.2108C114.998 19.1204 114.934 19.0136 114.892 18.897C114.851 18.7804 114.834 18.6566 114.843 18.5332V11.5968C114.848 11.3278 114.799 11.0605 114.698 10.811C114.597 10.5616 114.446 10.3352 114.256 10.1455C114.065 9.95588 113.837 9.80691 113.587 9.70762C113.337 9.60834 113.07 9.5608 112.801 9.56789H112.601C112.347 9.55269 112.093 9.58816 111.853 9.67223C111.613 9.7563 111.392 9.88729 111.203 10.0576C111.015 10.2278 110.862 10.434 110.753 10.664C110.645 10.894 110.583 11.1433 110.572 11.3974V18.5679C110.572 18.8059 110.478 19.0342 110.309 19.2024C110.141 19.3707 109.913 19.4653 109.675 19.4653C109.437 19.4653 109.209 19.3707 109.04 19.2024C108.872 19.0342 108.778 18.8059 108.778 18.5679L108.751 8.67483C108.746 8.55357 108.767 8.43259 108.811 8.31973C108.856 8.20686 108.924 8.10462 109.011 8.01963C109.097 7.93463 109.201 7.86877 109.314 7.8263C109.428 7.78383 109.549 7.7657 109.671 7.77309C109.875 7.76956 110.075 7.83858 110.233 7.96791C110.392 8.09724 110.5 8.27855 110.538 8.47974C111.114 7.99916 111.852 7.75583 112.601 7.7991H112.814C113.371 7.79556 113.923 7.91356 114.431 8.1449C114.939 8.37624 115.39 8.71537 115.753 9.1387C116.112 8.71521 116.559 8.37463 117.063 8.14038C117.567 7.90614 118.115 7.78379 118.671 7.78176H118.883C120.899 7.78176 122.698 8.95662 122.707 11.5621V18.5679C122.711 18.6846 122.692 18.8011 122.651 18.9104C122.609 19.0196 122.546 19.1193 122.465 19.2035C122.384 19.2878 122.287 19.3547 122.18 19.4005C122.072 19.4462 121.956 19.4697 121.84 19.4696Z"
      fill="currentColor"
    />
    <path
      d="M133.618 19.4394C133.562 19.4436 133.506 19.4347 133.454 19.4134C133.135 19.3873 132.825 19.292 132.546 19.134C132.268 18.976 132.027 18.7592 131.841 18.4987C131.132 19.1132 130.226 19.4518 129.288 19.4524H129.075C127.155 19.4524 125.26 18.2559 125.256 16.0536C125.256 15.9625 125.256 15.8671 125.256 15.7718C125.412 12.0304 130.67 12.6807 131.234 11.87C131.296 11.7452 131.321 11.6055 131.308 11.4669C131.308 10.0709 130.441 9.55068 129.383 9.55501H129.218C128.816 9.53597 128.418 9.63932 128.076 9.85139C127.734 10.0635 127.464 10.3743 127.302 10.7429C127.225 10.8886 127.11 11.0102 126.968 11.0944C126.827 11.1785 126.665 11.2219 126.5 11.2197C126.272 11.2268 126.051 11.1439 125.884 10.9889C125.716 10.834 125.617 10.6194 125.607 10.3917C125.602 10.2415 125.635 10.0925 125.702 9.95819C125.996 9.27638 126.49 8.69986 127.118 8.30502C127.747 7.91019 128.481 7.71566 129.222 7.74721H129.387C129.872 7.73505 130.355 7.82018 130.806 7.99757C131.258 8.17496 131.67 8.44102 132.017 8.78005C132.364 9.11908 132.64 9.52421 132.828 9.97153C133.015 10.4188 133.112 10.8993 133.111 11.3845V16.8729C133.1 16.9647 133.107 17.0578 133.131 17.1469C133.156 17.236 133.199 17.3193 133.256 17.3919C133.313 17.4645 133.384 17.525 133.465 17.5698C133.546 17.6147 133.635 17.6431 133.727 17.6533C133.938 17.6798 134.131 17.7828 134.271 17.9426C134.411 18.1024 134.487 18.308 134.486 18.5203C134.493 18.6385 134.475 18.7569 134.435 18.8681C134.395 18.9794 134.332 19.0812 134.251 19.1673C134.169 19.2534 134.071 19.322 133.963 19.3688C133.854 19.4156 133.737 19.4396 133.618 19.4394ZM131.308 13.7645C129.574 14.2414 127.12 14.1547 127.051 15.8108V15.9972C127.051 17.016 127.861 17.6533 129.066 17.6489H129.283C129.819 17.6501 130.334 17.4385 130.715 17.0606C131.095 16.6826 131.31 16.1692 131.312 15.633L131.308 13.7645Z"
      fill="currentColor"
    />
    <path
      d="M143.421 19.4132C143.214 19.4241 143.011 19.3578 142.851 19.2272C142.69 19.0966 142.584 18.911 142.554 18.7065C141.993 19.1977 141.265 19.4539 140.52 19.4219H140.308C139.804 19.4276 139.304 19.3336 138.837 19.1453C138.37 18.957 137.944 18.6781 137.585 18.3247C137.226 17.9713 136.941 17.5504 136.745 17.0862C136.549 16.622 136.447 16.1236 136.445 15.6198V11.562C136.444 11.0598 136.542 10.5622 136.734 10.0981C136.926 9.63387 137.207 9.21218 137.563 8.85724C137.918 8.50229 138.34 8.22109 138.805 8.02981C139.269 7.83853 139.767 7.74095 140.269 7.74266H140.434C140.816 7.7188 141.2 7.7764 141.558 7.91167C141.917 8.04693 142.243 8.25678 142.515 8.52734V3.69786C142.506 3.57448 142.523 3.45065 142.564 3.33408C142.605 3.2175 142.67 3.11068 142.755 3.02024C142.839 2.92981 142.941 2.8577 143.055 2.80839C143.168 2.75909 143.29 2.73364 143.414 2.73364C143.538 2.73364 143.66 2.75909 143.774 2.80839C143.887 2.8577 143.989 2.92981 144.073 3.02024C144.158 3.11068 144.223 3.2175 144.264 3.33408C144.305 3.45065 144.322 3.57448 144.314 3.69786L144.353 18.5851C144.352 18.7026 144.326 18.8185 144.277 18.9254C144.229 19.0323 144.158 19.1278 144.07 19.2059C143.982 19.2839 143.879 19.3426 143.767 19.3783C143.655 19.414 143.537 19.4259 143.421 19.4132ZM142.515 11.3453C142.504 11.0922 142.443 10.8437 142.335 10.6145C142.228 10.3852 142.075 10.1798 141.887 10.0102C141.699 9.84063 141.479 9.71031 141.24 9.6269C141 9.54349 140.747 9.50866 140.494 9.52445H140.282C140.013 9.52097 139.746 9.57126 139.497 9.67237C139.248 9.77348 139.022 9.92337 138.832 10.1132C138.642 10.3031 138.491 10.529 138.39 10.7778C138.288 11.0267 138.237 11.2933 138.24 11.562V15.6328C138.245 16.1667 138.461 16.677 138.841 17.0517C139.221 17.4264 139.735 17.6349 140.269 17.6314H140.503C140.761 17.648 141.019 17.6115 141.263 17.5243C141.506 17.437 141.729 17.3008 141.917 17.1241C142.106 16.9473 142.256 16.7338 142.359 16.4967C142.461 16.2596 142.514 16.004 142.515 15.7456V11.3453Z"
      fill="currentColor"
    />
    <path
      d="M154.302 14.3669H149.143V15.5764C149.141 15.8439 149.193 16.109 149.295 16.3561C149.398 16.6031 149.548 16.8273 149.739 17.0151C149.929 17.203 150.155 17.3509 150.403 17.45C150.652 17.5492 150.918 17.5976 151.185 17.5923H151.419C151.812 17.597 152.197 17.4844 152.525 17.2689C152.853 17.0534 153.11 16.7449 153.262 16.3828C153.316 16.2183 153.421 16.0749 153.561 15.9724C153.7 15.8699 153.869 15.8133 154.042 15.8106C154.286 15.8139 154.52 15.9121 154.693 16.0844C154.866 16.2568 154.965 16.4897 154.97 16.734C154.97 16.8726 154.938 17.0094 154.874 17.1328C154.586 17.8115 154.103 18.389 153.485 18.7913C152.867 19.1936 152.143 19.4026 151.406 19.3915H151.185C150.685 19.3938 150.189 19.2972 149.726 19.1075C149.263 18.9177 148.842 18.6384 148.487 18.2856C148.132 17.9328 147.85 17.5134 147.658 17.0514C147.466 16.5895 147.366 16.0942 147.366 15.5938V11.5186C147.364 11.0182 147.462 10.5225 147.652 10.0597C147.843 9.59692 148.123 9.1762 148.476 8.82154C148.829 8.46687 149.248 8.18522 149.71 7.99267C150.172 7.80011 150.667 7.70042 151.168 7.69928H151.406C151.91 7.69286 152.41 7.78741 152.876 7.97736C153.343 8.1673 153.767 8.44878 154.123 8.80519C154.479 9.16159 154.76 9.58571 154.949 10.0525C155.138 10.5193 155.232 11.0193 155.225 11.523V13.4652C155.222 13.707 155.123 13.9377 154.95 14.1067C154.777 14.2757 154.544 14.3692 154.302 14.3669ZM153.396 11.5273C153.396 10.9952 153.187 10.4843 152.814 10.1048C152.441 9.72528 151.934 9.50751 151.402 9.49841H151.185C150.649 9.49839 150.134 9.71023 149.753 10.0878C149.373 10.4654 149.156 10.9781 149.152 11.5143V12.6978H153.413L153.396 11.5273Z"
      fill="currentColor"
    />
    <path
      d="M168.262 19.643H168.118C166.605 19.643 164.802 18.7759 164.065 17.2846C163.995 17.1502 163.955 17.0023 163.948 16.8511C163.956 16.6146 164.057 16.3908 164.229 16.2284C164.401 16.066 164.63 15.9782 164.867 15.984C165.024 15.9779 165.18 16.0112 165.321 16.0808C165.462 16.1505 165.583 16.2543 165.673 16.3829C166.267 17.1632 167.286 17.8742 168.162 17.8699H168.279C169.723 17.8699 170.551 17.0592 170.551 16.2788C170.59 13.1271 164.394 15.5115 164.381 11.0158C164.381 8.74415 166.766 7.98115 168.257 7.98115H168.348C169.463 7.95721 170.554 8.30161 171.452 8.96092C171.559 9.04002 171.645 9.14353 171.703 9.26272C171.761 9.38192 171.789 9.51333 171.786 9.64589C171.786 9.87585 171.695 10.0964 171.532 10.259C171.37 10.4216 171.149 10.5129 170.919 10.5129C170.737 10.5071 170.558 10.458 170.399 10.3699C169.776 9.96983 169.054 9.7507 168.314 9.73693H168.218C166.892 9.73693 166.185 10.3352 166.163 11.0375C166.124 13.6387 172.319 11.5187 172.328 16.2398V16.3309C172.354 18.4725 170.26 19.6387 168.262 19.643Z"
      fill="currentColor"
    />
    <path
      d="M178.835 19.617H178.597C178.096 19.6182 177.601 19.5207 177.138 19.3303C176.675 19.1398 176.254 18.8601 175.9 18.507C175.545 18.154 175.263 17.7345 175.071 17.2726C174.878 16.8107 174.779 16.3154 174.777 15.815V11.7442C174.776 11.2436 174.873 10.7476 175.063 10.2846C175.253 9.82156 175.533 9.4006 175.886 9.04583C176.239 8.69105 176.659 8.40943 177.121 8.21707C177.583 8.02472 178.079 7.92541 178.579 7.92484H178.814C179.314 7.92256 179.81 8.01908 180.273 8.20885C180.736 8.39863 181.157 8.67793 181.512 9.03075C181.867 9.38357 182.148 9.80296 182.341 10.2649C182.533 10.7268 182.632 11.2221 182.633 11.7225V15.7933C182.635 16.8037 182.237 17.7736 181.525 18.4905C180.813 19.2073 179.846 19.6125 178.835 19.617ZM180.825 11.7269C180.825 11.4627 180.772 11.2012 180.67 10.9574C180.569 10.7136 180.42 10.4921 180.233 10.3057C180.046 10.1194 179.824 9.97167 179.579 9.8711C179.335 9.77054 179.073 9.71907 178.809 9.71964H178.575C178.311 9.71906 178.049 9.77088 177.804 9.87209C177.56 9.9733 177.338 10.1219 177.151 10.3093C176.965 10.4967 176.817 10.7193 176.717 10.9641C176.617 11.2089 176.566 11.4711 176.568 11.7355V15.8063C176.57 16.0724 176.624 16.3355 176.727 16.5805C176.831 16.8255 176.982 17.0477 177.172 17.2342C177.362 17.4207 177.586 17.5679 177.833 17.6673C178.08 17.7667 178.344 17.8164 178.61 17.8136H178.822C179.356 17.8113 179.867 17.5973 180.244 17.2185C180.62 16.8398 180.831 16.3272 180.829 15.7933L180.825 11.7269Z"
      fill="currentColor"
    />
    <path
      d="M189.184 4.74736C189.012 4.74699 188.843 4.7818 188.686 4.84963C188.529 4.91746 188.387 5.01687 188.27 5.14168C188.153 5.26649 188.063 5.41403 188.005 5.57515C187.948 5.73627 187.924 5.90753 187.935 6.07828V7.96846H189.045C189.164 7.9636 189.283 7.98346 189.395 8.02678C189.506 8.07011 189.607 8.13596 189.692 8.22022C189.776 8.30448 189.843 8.40532 189.887 8.51642C189.93 8.62752 189.951 8.74649 189.947 8.86586C189.951 8.9852 189.932 9.10427 189.888 9.21558C189.845 9.32689 189.779 9.42805 189.695 9.51271C189.611 9.59738 189.51 9.66372 189.399 9.70758C189.287 9.75144 189.168 9.77187 189.049 9.76759H187.939V18.6939C187.923 18.9217 187.822 19.135 187.655 19.2907C187.488 19.4465 187.268 19.5331 187.04 19.5331C186.811 19.5331 186.592 19.4465 186.425 19.2907C186.258 19.135 186.156 18.9217 186.14 18.6939L186.118 9.76759H185.598C185.475 9.77616 185.351 9.75926 185.234 9.71793C185.118 9.67661 185.011 9.61174 184.921 9.52737C184.83 9.443 184.758 9.34092 184.709 9.22749C184.659 9.11407 184.634 8.99171 184.634 8.86802C184.634 8.74434 184.659 8.62198 184.709 8.50855C184.758 8.39512 184.83 8.29305 184.921 8.20868C185.011 8.12431 185.118 8.05944 185.234 8.01812C185.351 7.97679 185.475 7.95989 185.598 7.96846H186.118V6.08262C186.101 5.67471 186.166 5.26747 186.311 4.88578C186.456 4.50408 186.678 4.15594 186.962 3.8626C187.246 3.56927 187.586 3.3369 187.963 3.17969C188.34 3.02247 188.745 2.94372 189.153 2.94823C189.273 2.94337 189.392 2.96323 189.503 3.00655C189.614 3.04988 189.715 3.11573 189.8 3.19999C189.885 3.28425 189.951 3.38509 189.995 3.49619C190.039 3.60729 190.059 3.72626 190.055 3.84562C190.06 3.96274 190.04 4.07959 189.999 4.18911C189.957 4.29863 189.894 4.39855 189.812 4.48284C189.731 4.56712 189.633 4.63402 189.525 4.67948C189.417 4.72495 189.301 4.74804 189.184 4.74736Z"
      fill="currentColor"
    />
    <path
      d="M196.809 19.5693C196.4 19.5698 195.995 19.4895 195.617 19.333C195.239 19.1764 194.896 18.9467 194.607 18.657C194.318 18.3674 194.089 18.0235 193.934 17.6451C193.778 17.2667 193.699 16.8613 193.701 16.4522V9.75422H192.868C192.63 9.75422 192.402 9.65968 192.234 9.49138C192.066 9.32309 191.971 9.09483 191.971 8.85683C191.971 8.61882 192.066 8.39056 192.234 8.22227C192.402 8.05397 192.63 7.95943 192.868 7.95943H193.671V3.84093C193.662 3.71755 193.679 3.59372 193.72 3.47714C193.761 3.36057 193.826 3.25375 193.911 3.16331C193.995 3.07287 194.097 3.00076 194.211 2.95146C194.324 2.90215 194.446 2.87671 194.57 2.87671C194.694 2.87671 194.816 2.90215 194.93 2.95146C195.043 3.00076 195.145 3.07287 195.229 3.16331C195.314 3.25375 195.379 3.36057 195.42 3.47714C195.461 3.59372 195.478 3.71755 195.47 3.84093V7.95943H196.749C196.976 7.97525 197.19 8.0769 197.345 8.24386C197.501 8.41082 197.588 8.63066 197.588 8.85899C197.588 9.08733 197.501 9.30717 197.345 9.47413C197.19 9.64109 196.976 9.74274 196.749 9.75856H195.47V16.4349C195.471 16.6138 195.508 16.7906 195.579 16.9552C195.649 17.1197 195.751 17.2688 195.879 17.3937C196.007 17.5186 196.159 17.6169 196.325 17.683C196.492 17.7491 196.669 17.7817 196.848 17.7788C197.077 17.8009 197.289 17.9098 197.441 18.0831C197.592 18.2564 197.672 18.4811 197.663 18.7111C197.654 18.9411 197.557 19.159 197.393 19.3201C197.229 19.4813 197.009 19.5735 196.779 19.5779L196.809 19.5693Z"
      fill="currentColor"
    />
    <path
      d="M213.712 8.96102L210.947 18.8627C210.893 19.0522 210.78 19.2192 210.623 19.3388C210.467 19.4584 210.276 19.5241 210.08 19.526H209.889C209.689 19.5114 209.497 19.4388 209.338 19.3172C209.179 19.1955 209.058 19.0301 208.991 18.8411C208.415 16.8078 206.889 11.133 206.746 10.7775C206.629 11.1547 205.129 16.8469 204.578 18.8541C204.524 19.0453 204.411 19.2146 204.255 19.3383C204.1 19.4619 203.909 19.5337 203.711 19.5434H203.494C203.298 19.5417 203.108 19.4766 202.951 19.3578C202.795 19.2391 202.681 19.073 202.627 18.8844L199.818 9.00437C199.792 8.9199 199.776 8.83256 199.77 8.74425C199.77 8.62549 199.794 8.50794 199.841 8.39889C199.888 8.28985 199.957 8.19163 200.044 8.11033C200.13 8.02904 200.233 7.9664 200.345 7.92629C200.456 7.88619 200.575 7.86948 200.694 7.8772C200.892 7.87165 201.087 7.93452 201.245 8.05526C201.403 8.17601 201.514 8.34731 201.561 8.5405L203.611 15.7284L205.727 8.50581C205.793 8.29602 205.931 8.11635 206.116 7.99884C206.302 7.88133 206.524 7.83361 206.741 7.86419H206.763C207.474 7.86419 207.691 8.14599 207.786 8.50148L209.954 15.737L211.991 8.51448C212.031 8.32483 212.136 8.1548 212.286 8.03315C212.437 7.91149 212.626 7.84569 212.819 7.84685C212.938 7.83851 213.058 7.85476 213.17 7.89458C213.282 7.93441 213.385 7.99695 213.472 8.07831C213.559 8.15967 213.629 8.2581 213.676 8.36746C213.723 8.47681 213.747 8.59475 213.747 8.71391C213.748 8.79752 213.736 8.88075 213.712 8.96102Z"
      fill="currentColor"
    />
    <path
      d="M224.039 19.4998C223.983 19.5033 223.927 19.4959 223.874 19.4782C223.559 19.4466 223.254 19.3483 222.98 19.1899C222.706 19.0314 222.468 18.8164 222.283 18.5591C221.574 19.1736 220.668 19.5122 219.73 19.5128H219.517C217.597 19.5128 215.702 18.312 215.698 16.114V15.8279C215.854 12.0865 221.108 12.7368 221.676 11.9261C221.735 11.8003 221.759 11.6611 221.746 11.523C221.746 10.127 220.879 9.61111 219.821 9.61111H219.656C219.255 9.59175 218.857 9.69501 218.515 9.90718C218.174 10.1193 217.905 10.4304 217.744 10.799C217.666 10.9444 217.55 11.0657 217.407 11.1497C217.265 11.2338 217.103 11.2774 216.938 11.2758C216.709 11.2853 216.486 11.204 216.317 11.0497C216.148 10.8954 216.047 10.6806 216.036 10.4521C216.034 10.3022 216.066 10.1537 216.132 10.0186C216.427 9.33791 216.921 8.76242 217.549 8.36781C218.177 7.97319 218.91 7.77791 219.652 7.80764H219.816C220.302 7.79549 220.785 7.88059 221.236 8.05794C221.688 8.23528 222.1 8.50128 222.447 8.84025C222.795 9.17922 223.071 9.5843 223.26 10.0316C223.448 10.479 223.545 10.9595 223.545 11.4449V16.9377C223.533 17.0292 223.54 17.1221 223.565 17.2109C223.59 17.2997 223.632 17.3827 223.69 17.455C223.747 17.5272 223.818 17.5873 223.899 17.6318C223.98 17.6762 224.069 17.704 224.16 17.7137C224.383 17.7449 224.586 17.8592 224.729 18.0337C224.871 18.2081 224.942 18.43 224.928 18.6547C224.914 18.8794 224.815 19.0905 224.652 19.2456C224.489 19.4007 224.273 19.4884 224.048 19.4912L224.039 19.4998ZM221.728 13.825C219.994 14.3019 217.54 14.2152 217.471 15.8712C217.471 16.0143 217.471 15.9406 217.471 16.062C217.471 17.0764 218.277 17.7137 219.487 17.7137H219.699C220.236 17.7149 220.75 17.5033 221.131 17.1253C221.511 16.7474 221.726 16.234 221.728 15.6978V13.825Z"
      fill="currentColor"
    />
    <path
      d="M232.497 10.4134C232.359 10.4093 232.224 10.3781 232.098 10.3216C231.972 10.2651 231.859 10.1843 231.764 10.084C231.63 9.92709 231.463 9.80155 231.275 9.71616C231.087 9.63078 230.883 9.58762 230.676 9.58973C229.28 9.58973 229.09 10.3961 229.094 11.1808V18.5507C229.103 18.6741 229.086 18.7979 229.044 18.9145C229.003 19.0311 228.938 19.1379 228.854 19.2283C228.769 19.3188 228.667 19.3909 228.554 19.4402C228.44 19.4895 228.318 19.5149 228.194 19.5149C228.071 19.5149 227.948 19.4895 227.835 19.4402C227.721 19.3909 227.619 19.3188 227.535 19.2283C227.451 19.1379 227.386 19.0311 227.344 18.9145C227.303 18.7979 227.286 18.6741 227.295 18.5507L227.269 8.70101C227.269 8.58091 227.294 8.46212 227.341 8.35155C227.388 8.24098 227.456 8.14083 227.542 8.05692C227.628 7.97302 227.729 7.90703 227.841 7.8628C227.953 7.81857 228.072 7.79697 228.192 7.79927C228.353 7.79774 228.512 7.84115 228.65 7.92462C228.787 8.00809 228.899 8.12832 228.973 8.27181C228.973 8.27181 229.445 7.79494 230.676 7.79494C231.153 7.77179 231.629 7.866 232.061 8.06931C232.494 8.27262 232.87 8.57883 233.156 8.96112C233.296 9.13603 233.372 9.35296 233.373 9.57673C233.365 9.80289 233.269 10.017 233.105 10.1733C232.942 10.3297 232.723 10.4158 232.497 10.4134Z"
      fill="currentColor"
    />
    <path
      d="M242.351 14.4364H237.192V15.6416C237.19 16.1743 237.399 16.6862 237.774 17.065C238.148 17.4437 238.658 17.6584 239.191 17.6618H239.429C239.822 17.6644 240.207 17.5504 240.535 17.3343C240.863 17.1183 241.119 16.8098 241.272 16.4479C241.326 16.2836 241.431 16.1404 241.571 16.0385C241.71 15.9367 241.879 15.8812 242.052 15.88C242.295 15.8833 242.527 15.9811 242.7 16.1526C242.872 16.3242 242.971 16.556 242.975 16.7991C242.978 16.9389 242.947 17.0772 242.884 17.2023C242.596 17.8806 242.112 18.4577 241.494 18.86C240.877 19.2623 240.153 19.4715 239.416 19.4609H239.182C238.681 19.4626 238.185 19.3656 237.722 19.1754C237.259 18.9852 236.837 18.7056 236.482 18.3525C236.127 17.9994 235.845 17.5797 235.652 17.1175C235.459 16.6554 235.359 16.1597 235.358 15.6589V11.5881C235.357 11.085 235.455 10.5865 235.647 10.1214C235.839 9.65642 236.121 9.23411 236.478 8.87894C236.834 8.52376 237.257 8.24277 237.723 8.05221C238.189 7.86164 238.688 7.7653 239.191 7.76874H239.425C239.929 7.76112 240.429 7.85486 240.896 8.04437C241.364 8.23389 241.788 8.51533 242.144 8.87198C242.5 9.22863 242.781 9.65322 242.97 10.1205C243.159 10.5879 243.252 11.0884 243.244 11.5924V13.5303C243.241 13.7674 243.146 13.994 242.98 14.1628C242.813 14.3317 242.588 14.4297 242.351 14.4364ZM241.445 11.5968C241.446 11.0643 241.238 10.5528 240.864 10.173C240.491 9.79327 239.983 9.57585 239.451 9.56787H239.212C238.676 9.56672 238.161 9.77832 237.781 10.1563C237.401 10.5342 237.186 11.0476 237.184 11.5838V12.7673H241.441L241.445 11.5968Z"
      fill="currentColor"
    />
    <path
      d="M28.7312 3.49404H17.5636C17.2081 2.62699 16.8483 1.71225 16.8483 1.71225C16.6794 1.29185 16.3884 0.931704 16.0128 0.678252C15.6373 0.4248 15.1944 0.289668 14.7414 0.290285H5.20378C4.76192 0.29193 4.33012 0.422405 3.96129 0.665729C3.59245 0.909053 3.30258 1.25466 3.12719 1.66023L0.937883 6.75416C0.814494 7.04027 0.75105 7.34864 0.751467 7.66023V22.0229C0.751466 22.3211 0.810256 22.6162 0.924472 22.8916C1.03869 23.167 1.20609 23.4171 1.41709 23.6277C1.62809 23.8383 1.87855 24.0052 2.15414 24.1189C2.42972 24.2326 2.72503 24.2909 3.02314 24.2903H28.7312C29.0294 24.2909 29.3247 24.2326 29.6002 24.1189C29.8758 24.0052 30.1263 23.8383 30.3373 23.6277C30.5483 23.4171 30.7157 23.167 30.8299 22.8916C30.9441 22.6162 31.0029 22.3211 31.0029 22.0229V5.76138C31.0029 5.46327 30.9441 5.16808 30.8299 4.89271C30.7157 4.61734 30.5483 4.3672 30.3373 4.1566C30.1263 3.946 29.8758 3.77908 29.6002 3.66539C29.3247 3.5517 29.0294 3.49347 28.7312 3.49404Z"
      fill="currentColor"
    />
    <path
      d="M20.1387 14.7354H17.0476V17.8265C17.0476 18.1231 16.9298 18.4076 16.72 18.6174C16.5103 18.8271 16.2258 18.945 15.9291 18.945C15.6325 18.945 15.348 18.8271 15.1382 18.6174C14.9285 18.4076 14.8106 18.1231 14.8106 17.8265V14.7354H11.7196C11.423 14.7354 11.1385 14.6176 10.9287 14.4078C10.7189 14.1981 10.6011 13.9136 10.6011 13.6169C10.6011 13.3203 10.7189 13.0358 10.9287 12.826C11.1385 12.6163 11.423 12.4984 11.7196 12.4984H14.8106V9.39438C14.8106 9.09773 14.9285 8.81324 15.1382 8.60348C15.348 8.39372 15.6325 8.27588 15.9291 8.27588C16.2258 8.27588 16.5103 8.39372 16.72 8.60348C16.9298 8.81324 17.0476 9.09773 17.0476 9.39438V12.4854H20.1387C20.4353 12.4854 20.7198 12.6033 20.9296 12.813C21.1393 13.0228 21.2572 13.3073 21.2572 13.6039C21.2572 13.9006 21.1393 14.1851 20.9296 14.3948C20.7198 14.6046 20.4353 14.7224 20.1387 14.7224V14.7354Z"
      fill="white"
    />
  </svg>
);

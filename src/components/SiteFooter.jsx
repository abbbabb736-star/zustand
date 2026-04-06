import { useTranslation } from 'react-i18next'

function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.858v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  )
}

function IconYoutube() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.67-.072-4.949-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  )
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      />
    </svg>
  )
}

export default function SiteFooter() {
  const { t } = useTranslation()

  const col1 = [
    t('footerFindStore'),
    t('footerBecomeMember'),
    t('footerSignUpEmail'),
    t('footerSendFeedback'),
    t('footerStudentDiscounts'),
  ]

  const col2Help = [
    t('footerOrderStatus'),
    t('footerDelivery'),
    t('footerReturns'),
    t('footerPaymentOptions'),
    t('footerContactNike'),
    t('footerContactOther'),
  ]

  const col3About = [t('footerNews'), t('footerCareers'), t('footerInvestors'), t('footerSustainability')]

  const bottomLinks = [
    { label: t('footerGuides'), href: '#' },
    { label: t('footerTermsSale'), href: '#' },
    { label: t('footerTermsUse'), href: '#' },
    { label: t('footerPrivacy'), href: '#' },
  ]

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__columns">
          <ul className="site-footer__list site-footer__list--emphasis">
            {col1.map((text) => (
              <li key={text}>
                <a href="#" className="site-footer__link site-footer__link--caps">
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="site-footer__col-title">{t('footerGetHelp')}</h3>
            <ul className="site-footer__list">
              {col2Help.map((text) => (
                <li key={text}>
                  <a href="#" className="site-footer__link">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="site-footer__col-title">{t('footerAboutNike')}</h3>
            <ul className="site-footer__list">
              {col3About.map((text) => (
                <li key={text}>
                  <a href="#" className="site-footer__link">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="site-footer__social" aria-label="Social">
          <a href="#" className="site-footer__social-btn" aria-label="Twitter / X">
            <IconTwitter />
          </a>
          <a href="#" className="site-footer__social-btn" aria-label="Facebook">
            <IconFacebook />
          </a>
          <a href="#" className="site-footer__social-btn" aria-label="YouTube">
            <IconYoutube />
          </a>
          <a href="#" className="site-footer__social-btn" aria-label="Instagram">
            <IconInstagram />
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-left">
          <span className="site-footer__location">
            <IconPin />
            {t('footerCountry')}
          </span>
          <span className="site-footer__copy">{t('footerCopyright')}</span>
        </div>
        <ul className="site-footer__bottom-links">
          {bottomLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

import { useTranslation } from 'react-i18next'

const ESSENTIAL_IMAGES = {
  mens: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80',
  womens: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  kids: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
}

export default function HomeEssentials() {
  const { t } = useTranslation()

  const linkColumns = [
    {
      title: t('footerColIcons'),
      links: ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'],
    },
    {
      title: t('footerColShoes'),
      links: [t('linkAllShoes'), t('linkCustomShoes'), t('linkJordanShoes'), t('linkRunningShoes')],
    },
    {
      title: t('footerColClothing'),
      links: [t('linkAllClothing'), t('linkModestWear'), t('linkHoodies'), t('linkShirtsTops')],
    },
    {
      title: t('footerColKids'),
      links: [t('linkInfantShoes'), t('linkKidsShoes'), t('linkKidsJordan'), t('linkKidsBasketball')],
    },
  ]

  return (
    <>
      <section className="site-essentials" aria-labelledby="essentials-heading">
        <h2 id="essentials-heading" className="site-essentials__heading">
          {t('essentialsTitle')}
        </h2>
        <div className="site-essentials__grid">
          <a href="#men" className="site-essentials__card">
            <img src={ESSENTIAL_IMAGES.mens} alt="" className="site-essentials__img" />
            <span className="site-essentials__pill">{t('essentialsMens')}</span>
          </a>
          <a href="#women" className="site-essentials__card">
            <img src={ESSENTIAL_IMAGES.womens} alt="" className="site-essentials__img" />
            <span className="site-essentials__pill">{t('essentialsWomens')}</span>
          </a>
          <a href="#kids" className="site-essentials__card">
            <img src={ESSENTIAL_IMAGES.kids} alt="" className="site-essentials__img" />
            <span className="site-essentials__pill">{t('essentialsKids')}</span>
          </a>
        </div>
      </section>

      <nav className="site-link-grid" aria-label={t('footerLinkNav')}>
        {linkColumns.map((col) => (
          <div key={col.title} className="site-link-grid__col">
            <h3 className="site-link-grid__title">{col.title}</h3>
            <ul className="site-link-grid__list">
              {col.links.map((label) => (
                <li key={label}>
                  <a href="#" className="site-link-grid__link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </>
  )
}


import { siteContent } from '../content/siteContent'

export function StructuredData() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteContent.brand.name,
        url: typeof window !== 'undefined' ? window.location.origin : 'https://devaseafood.com',
        logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : 'https://devaseafood.com/logo.png', // Assuming logo.png exists or uses a placeholder
        description: siteContent.hero.headline,
        address: {
            '@type': 'PostalAddress',
            streetAddress: siteContent.brand.address,
            addressCountry: 'IN',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: siteContent.contact.phone,
            contactType: 'sales',
            email: siteContent.contact.emails[0],
            areaServed: 'World',
            availableLanguage: 'English',
        },
        sameAs: [], // Add social links here if available
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

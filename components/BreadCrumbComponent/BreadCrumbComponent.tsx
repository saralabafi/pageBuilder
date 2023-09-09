import React from 'react'
import Link from 'next/link'
import Text from 'components/CoreComponents/Text/Text'

export const BreadCrumbComponent = () => {
  const breadcrumbItems = [
    { label: 'استقلال', url: '/' },
    { label: 'تیم های داخلی', url: '/products' },
    { label: 'اخبار ورزشی', url: '/products/category' },
    { label: 'محتوا', url: '/products/category/current-page' },
  ]
  return (
    <nav className="text-sm">
      <ol className="list-none p-0 inline-flex gap-1">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && (
              <Text
                fontSize={12}
                fontWeight={400}
                color="text-slate-400"
                margin="mx-2">
                {'>'}
              </Text>
            )}
            {index === breadcrumbItems.length - 1 ? (
              <Text
                fontSize={12}
                fontWeight={400}
                padding="p-1"
                color="text-slate-400">
                {item.label}
              </Text>
            ) : (
              <Link href={item.url}>
                <Text
                  fontSize={12}
                  fontWeight={400}
                  padding="p-1"
                  color="text-slate-400">
                  {item.label}
                </Text>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
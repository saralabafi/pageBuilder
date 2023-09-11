import Text from 'components/CoreComponents/Text/Text'
import { IBreadCrumb } from './BreadCrumb.type'
import { useLocale } from 'next-intl'

export const BreadCrumbComponent = ({
  breadcrumbItems,
  handleClick,
}: IBreadCrumb) => {
  const locale = useLocale()
  return (
    <nav className="text-sm mb-4">
      <ol className="list-none p-0 inline-flex gap-1">
        {breadcrumbItems?.map((item, index) => {
          return (
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
              <div onClick={() => handleClick(item.id)}>
                <Text
                  fontSize={12}
                  fontWeight={400}
                  padding="p-1"
                  customCSS="cursor-pointer"
                  color="text-slate-400">
                  {item.title[locale]}
                </Text>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

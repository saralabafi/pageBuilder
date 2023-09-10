import Text from 'components/CoreComponents/Text/Text'
import { IBreadCrumb } from './BreadCrumb.type'

export const BreadCrumbComponent = ({ breadcrumbItems }:IBreadCrumb) => {
 
  return (
    <nav className="text-sm mb-4">
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
              <Text
                fontSize={12}
                fontWeight={400}
                padding="p-1"
                color="text-slate-400">
                {item.label}
              </Text>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

import { Flex } from 'components/CoreComponents/Flex/Flex'
import { useLocale } from 'next-intl'

export const TabSetting = ({ options, category, selectedCategory }: any) => {
  const locale = useLocale()

  return (
    <Flex justify="justify-center" width="w-full" margin="my-2">
      <div className="bg-white rounded-3xl border border-slate-200 justify-start items-start inline-flex">
        {options?.map((option: any) => {
          return (
            <Flex>
              <div
                className={`grow shrink basis-0 h-6 px-4 py-1 rounded-2xl justify-center items-center gap-1 flex ${
                  category?.id === option.id &&
                  'bg-blue-100  border border-blue-200 '
                }`}>
                <div
                  onClick={() => selectedCategory(option)}
                  className={`text-right cursor-pointer ${
                    category?.id === option.id
                      ? 'text-blue-600'
                      : 'text-slate-500'
                  } text-xs font-medium leading-none`}>
                  {option.Name[locale]}
                </div>
              </div>
            </Flex>
          )
        })}
      </div>
    </Flex>
  )
}

import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Input } from 'components/CoreComponents/Input/Input'
import { Select } from 'components/CoreComponents/Select/Select'
import Text from 'components/CoreComponents/Text/Text'
import CancelIcon from 'images/assets/cancel.svg'
import { useFilterContentSection } from './FilterContentSection.biz'
import { IFilterContentSection } from './FilterContentSection.type'

export const FilterContentSection = ({
  filtersInputValue,
  onChangeFilterItem,
}: IFilterContentSection) => {
  const { t } = useFilterContentSection()
  return (
    <Flex
      direction="flex-col"
      align="items-start"
      customCSS="w-[30%] h-full border border-slate-200 border-t-0 ">
      <Flex
        width="w-full"
        align="items-center"
        justify="justify-between"
        backgroundColor="bg-white"
        customCSS="px-3 py-2 border border-b-slate-200 border-t-0 border-x-0">
        <Text fontWeight={500} color="text-slate-600">
          {t('filters')}
        </Text>
        <CancelIcon color="text-slate-500" width={15} />
      </Flex>
      <Flex
        gap="gap-1"
        padding="p-3"
        width="w-full"
        align="items-start"
        direction="flex-col"
        customCSS="bg-neutral-50">
        <div className="w-full py-2">
          <Text fontSize={12} color="text-slate-600" customCSS="mb-2">
            {t('title')}
          </Text>
          <Input
            placeholder={t('search_by_title')}
            customCss="bg-white"
            onChange={(e) => onChangeFilterItem(e.target.value, 'title')}
          />
        </div>
        <div className="w-full py-2">
          <Text fontSize={12} color="text-slate-600" customCSS="mb-2">
            {t('content_structure')}
          </Text>
          <Select
            value={filtersInputValue['content_structure']}
            onChange={(e) => 
              onChangeFilterItem(e, 'content_structure',)
            }
            options={[
              { id: '1', title: { 'fa-ir': 'aodh' } },
              { id: '2', title: { 'fa-ir': 'aodasdash' } },
            ]}
            placeholder={t('select')}
          />
        </div>
        <div className="w-full py-2">
          <Text fontSize={12} color="text-slate-600" customCSS="mb-2">
            {t('creator')}
          </Text>
          <Select
            value={''}
            onChange={(e) => onChangeFilterItem(e, 'creator')}
            options={[]}
            placeholder={t('select')}
          />
        </div>
        <div className="w-full py-2">
          <Text fontSize={12} color="text-slate-600" customCSS="mb-2">
            {t('status')}
          </Text>
          <Select
            value={''}
            onChange={(e) => onChangeFilterItem(e, 'status')}
            options={[]}
            placeholder={t('select')}
          />
        </div>
        <Flex align="items-center" width="w-full" gap="gap-2">
          <div className="w-full py-2">
            <Text fontSize={12} color="text-slate-600" customCSS="mb-2">
              {t('from_date')}
            </Text>
            <Select
              value={''}
              onChange={() => {}}
              options={[]}
              placeholder={t('select')}
            />
          </div>
          <div className="w-full py-2">
            <Text fontSize={12} color="text-slate-600" customCSS="mb-2">
              {t('until_date')}
            </Text>
            <Select
              value={''}
              onChange={() => {}}
              options={[]}
              placeholder={t('select')}
            />
          </div>
        </Flex>
      </Flex>
      <Flex
        gap="gap-2"
        padding="p-3"
        width="w-full"
        align="items-center"
        justify="justify-between"
        customCSS="bg-neutral-50 border border-t-slate-200 border-x-0">
        <Button customCSS="bg-white border border-slate-200  rounded px-3 py-2">
          <Text color="text-slate-500">{t('remove_all_filter')}</Text>
        </Button>
        <Button backgroundColor="bg-blue-500" customCSS="rounded px-3 py-2">
          <Text color="text-white">{t('apply_filter')}</Text>
        </Button>
      </Flex>
    </Flex>
  )
}

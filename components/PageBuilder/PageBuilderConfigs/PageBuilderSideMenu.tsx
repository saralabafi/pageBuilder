import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import Cancel from 'images/assets/cancel.svg'
import { usePageBuilderSideMenu } from './PageBuilderSideMenu.biz'
import { useQuery } from '@tanstack/react-query'
import { services } from 'services/services'

export const PageBuilderSideMenu = () => {
  const { activeTab, handleClose, handleRenderTabMenu } =
    usePageBuilderSideMenu()
  const { data, status } = useQuery(
    [{ url: 'content-structure/forms/controls/definitions' }],
    services.GetData
  )

  return (
    <div
      className={`bg-neutral-100 w-[360px] h-screen border-e border-neutral-200 
             transition-transform duration-1000 ease-in-out ${
               activeTab ? 'translate-x-0' : 'hidden translate-x-[120%]'
             }
            `}>
      <Flex
        padding="p-3"
        justify="justify-between"
        backgroundColor="bg-neutral-50"
        customCSS="border-e border-b border-neutral-200 ">
        {/* <Text fontSize={14} fontWeight={600} color="text-neutral-600">
          {handleRenderTabMenu(data)?.title}
        </Text> */}
        <Cancel onClick={handleClose} className="cursor-pointer" />
      </Flex>
      {data && handleRenderTabMenu({ data })?.component}
    </div>
  )
}

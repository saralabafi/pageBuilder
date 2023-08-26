import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Loading } from 'components/CoreComponents/Loading/Loading'
import Text from 'components/CoreComponents/Text/Text'
import Cancel from 'images/assets/cancel.svg'
import { usePageBuilderSideMenu } from './PageBuilderSideMenu.biz'

export const PageBuilderSideMenu = () => {
  const { activeTab, handleClose, controls, status, handleRenderTabMenu } =
    usePageBuilderSideMenu()

  return (
    <div
      className={`bg-neutral-100 w-[360px] h-screen border-e border-neutral-200 
             transition-transform duration-1000 ease-in-out ${
               activeTab ? 'translate-x-0' : 'hidden translate-x-[120%]'
             }
            `}>
      {status === 'loading' ? (
        <Flex justify="justify-center" margin="my-10">
          <Loading />
        </Flex>
      ) : (
        <>
          <Flex
            padding="p-3"
            justify="justify-between"
            backgroundColor="bg-neutral-50"
            customCSS="border-e border-b border-neutral-200 ">
            <Text fontSize={14} fontWeight={600} color="text-neutral-600">
              {handleRenderTabMenu({controls})?.title as string}
            </Text>
            <Cancel onClick={handleClose} className="cursor-pointer" />
          </Flex>
          {controls && handleRenderTabMenu( {controls} )?.component}
        </>
      )}
    </div>
  )
}

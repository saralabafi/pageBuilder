import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import { Navbar } from 'components/Dashboard/Navbar/Navbar'
import ApplicationIcon from 'images/page/application.svg'

export const DashSubHeader = () => {
  return (
    <Flex
      width="w-full"
      padding="px-6"
      align="items-center"
      justify="justify-between">
      <Flex>
        <ApplicationIcon />
        <Text fontSize={16} fontWeight={600} padding="px-2">
          مدیریت محتوا
        </Text>
        <Navbar />
      </Flex>
    </Flex>
  )
}

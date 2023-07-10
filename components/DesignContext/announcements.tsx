import { useDndMonitor } from '@dnd-kit/core'

const defaultAnnouncements = {
  onDragStart({ active }: { active: any }) {
    const { id } = active
  },
  onDragMove({ active, over }: { active: any; over: any }) {
    const { id } = active
    const overId = over?.id

    if (overId) {
     
      return
    }

    
  },
  onDragOver({ active, over }: { active: any; over: any }) {
    const { id } = active
    const overId = over?.id

    if (overId) {
     
      return
    }

   
  },
  onDragEnd({ active, over }: { active: any; over: any }) {
    const { id } = active
    const overId = over?.id

    if (overId) {
      
      return
    }

  },
  onDragCancel(id: any) {
    console.log(id)
  },
}

export default function Announcements() {
  useDndMonitor(defaultAnnouncements)

  return null
}

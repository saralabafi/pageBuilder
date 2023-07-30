import { renders } from '../../../../app/[locale]/page/layout.const'
import { useComponent } from './Component.biz'

const Component = (props: any) => {
  const { opacity, component, activeControl, handleClick, ref } =
    useComponent(props)
  return (
    <div
      ref={ref}
      style={{ opacity }}
      onClick={handleClick}
      className={` draggable border cursor-move bg-white p-2 ${
        props.data.id === activeControl && 'border-dashed border-purple-700'
      }`}>
      <div>{renders?.[component?.type]()}</div>
    </div>
  )
}
export default Component

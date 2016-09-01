import React from 'react'
import { DragSource } from 'react-dnd'

const menuItemSource = {
  beginDrag(props) {
    return {
      name: props.name.toLowerCase().replace(/\s/g, ''),
    }
  },
  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    if (dropResult) {
      console.log(`You dropped ${item.name} into ${dropResult.name}!`)
    }
  },
}

@DragSource('Section', menuItemSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
class MenuItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    connectDragSource: React.PropTypes.func.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
  }

  render() {
    const { isDragging, connectDragSource, name } = this.props
    return connectDragSource(
      <li className="MainMenuItem" style={{ opacity: isDragging ? 0.5 : 1 }}>
        <span className="MainMenuItemText">{name}</span>
      </li>
    )
  }
}

const MainMenu = () => (
  <ul className="MainMenu">
    <MenuItem name="Section 1" />
    <MenuItem name="Section 2" />
    <MenuItem name="Section 3" />
  </ul>
)

export default MainMenu

import React from 'react'
import { DragSource } from 'react-dnd'

const formatter = str => str.toLowerCase().replace(/\s/g, '')

const menuItemSource = {
  beginDrag(props) {
    return {
      name: formatter(props.name),
    }
  },
  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    if (dropResult) {
      // eslint-disable-next-line no-console
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
    connectDragSource: React.PropTypes.func.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
    name: React.PropTypes.string.isRequired,
    onClickMenuItem: React.PropTypes.func.isRequired,
  }

  render() {
    const { isDragging, connectDragSource, name, onClickMenuItem } = this.props
    return connectDragSource(
      <li
        className="MainMenuItem"
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <button
          className="MainMenuItemText"
          onClick={() => onClickMenuItem(formatter(name))}
          type="button"
        >
          {name}
        </button>
      </li>,
    )
  }
}

const MainMenu = props => (
  <ul className="MainMenu">
    <MenuItem name="Section 1" onClickMenuItem={props.onClickMenuItem} />
    <MenuItem name="Section 2" onClickMenuItem={props.onClickMenuItem} />
    <MenuItem name="Section 3" onClickMenuItem={props.onClickMenuItem} />
  </ul>
)

MainMenu.propTypes = {
  onClickMenuItem: React.PropTypes.func.isRequired,
}

export default MainMenu

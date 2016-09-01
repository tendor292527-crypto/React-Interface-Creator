import React from 'react'
import update from 'react/lib/update'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import SectionsStore from '../stores/SectionsStore'
import ConstructorStore from '../stores/ConstructorStore'

import MainMenu from './MainMenu'
import Sections from './Sections'
import Board from './Board'

@DragDropContext(HTML5Backend)
class Constructor extends React.Component {
  constructor(props) {
    super(props)
    this.state = ConstructorStore.getState()
  }

  render() {
    const sections = this.state.sections.map((section, i) => {
      return <Sections type={section.type} key={i}
        onChange={::this.onChangeSection}
        onClickSave={::this.onClickSaveSection}
        onClickDelete={::this.onCickDeleteSection}
        onDropSection={::this.onDropSection}
        arrIndex={i} {...section}
             />
    })
    return (
      <div>
        <MainMenu />
        <div className='Container'>
          <Board onDrop={::this.onDropSectionOnBoard}>{sections}</Board>
          <pre className='BoardJSON'>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    )
  }

  onChangeSection(arrIndex, e) {
    e.preventDefault()
    const {sections} = this.state
    sections[arrIndex].data[e.target.name] = e.target.value
    this.setState({sections})
  }

  onClickSaveSection(arrIndex, e) {
    e.preventDefault()
    const {sections} = this.state
    sections[arrIndex].edit = !sections[arrIndex].edit
    this.setState({sections})
  }

  onCickDeleteSection(arrIndex, e) {
    e.preventDefault()
    const sections = this.state.sections.filter((s, i) => i !== arrIndex)
    this.setState({sections})
  }

  onDropSectionOnBoard(section) {
    this.setState({
      sections: [...this.state.sections, {...SectionsStore.get(section)}]
    })
  }

  onDropSection(dragIndex, hoverIndex) {
    const {sections} = this.state
    const dragSection = sections[dragIndex]

    this.setState(update(this.state, {
      sections: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragSection]
        ]
      }
    }))
  }
}

export default Constructor

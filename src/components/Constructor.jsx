import React from 'react'
import shortid from 'shortid'
import update from 'react/lib/update'
import { DragDropContext } from 'react-dnd'
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

  onChangeSection = (arrIndex, e) => {
    e.preventDefault()
    const { sections } = this.state
    sections[arrIndex].data[e.target.name] = e.target.value
    this.setState({ sections })
  }

  onClickSaveSection = (arrIndex, e) => {
    e.preventDefault()
    const { sections } = this.state
    sections[arrIndex].edit = !sections[arrIndex].edit
    this.setState({ sections })
  }

  onCickDeleteSection = (arrIndex, e) => {
    e.preventDefault()
    const sections = this.state.sections.filter((s, i) => i !== arrIndex)
    this.setState({ sections })
  }

  onDropSectionOnBoard = (section) => {
    this.setState({
      sections: [...this.state.sections, { ...SectionsStore.get(section) }],
    })
  }

  onDropSection = (dragIndex, hoverIndex) => {
    const { sections } = this.state
    const dragSection = sections[dragIndex]

    this.setState(update(this.state, {
      sections: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragSection],
        ],
      },
    }))
  }

  render() {
    const sections = this.state.sections.map((section, i) => (
      <Sections
        arrIndex={i}
        key={shortid.generate()}
        onChange={this.onChangeSection}
        onClickDelete={this.onCickDeleteSection}
        onClickSave={this.onClickSaveSection}
        onDropSection={this.onDropSection}
        type={section.type}
        {...section}
      />),
    )
    return (
      <div>
        <MainMenu onClickMenuItem={this.onDropSectionOnBoard} />
        <div className="Container">
          <Board onDrop={this.onDropSectionOnBoard}>{sections}</Board>
          <pre className="BoardJSON">{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    )
  }
}

export default Constructor

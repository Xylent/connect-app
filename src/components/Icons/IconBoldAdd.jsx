import React from 'react'
import EditComment from '../../assets/images/ui-16px-1_bold-add.svg'

class IconEditComment extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {className} = this.props
    return(
      <object>
        <EditComment className={className}/>
      </object>
    )
  }
}

export default IconEditComment
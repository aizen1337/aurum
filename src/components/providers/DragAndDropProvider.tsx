'use client'
import React from 'react'
import {DragDropContext, DropResult, ResponderProvided} from '@hello-pangea/dnd'
type Props = {
    children: React.ReactNode
}

const DragAndDropProvider = (props: Props) => {
  return (
    <DragDropContext children={undefined} 
        onDragEnd={}>
        DragAndDropProvider
    </DragDropContext>
  )
}

export default DragAndDropProvider
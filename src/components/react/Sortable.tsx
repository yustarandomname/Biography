import { closestCorners, DndContext, type DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

function Task({ id, content }: { id: number; content: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-4 bg-white border border-red-500"
    >
      {content}
    </div>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([
    { id: "1", content: "hello" },
    { id: "2", content: "hello2" },
    { id: "3", content: "hello3" },
  ]);

  const getTaskPos = (id: string) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <SortableContext items={tasks} strategy={horizontalListSortingStrategy}>
        <ul className="p-4 bg-red-50  flex gap-3 ">
          {tasks.map((id) => (
            <Task id={id} content={id.toString()} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}

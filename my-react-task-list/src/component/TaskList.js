const TaskList = () => {
    return (
      <ul>
        {/* Lista de tareas */}
      </ul>
    );
  };

  <li>
  <span>{name}</span>
  <span className={completed ? "completed" : ""}>
    {completed ? "Completada" : "Pendiente"}
  </span>
  <button onClick={() => handleCompleteTask(task)}>
    {completed ? "Deshacer" : "Marcar como completa"}
  </button>
</li>
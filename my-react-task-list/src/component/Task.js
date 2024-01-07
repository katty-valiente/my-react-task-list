const Task = ({ name, completed }) => {
    return (
      <li>
        <span>{name}</span>
        {completed ? <span>Completada</span> : <span>Pendiente</span>}
      </li>
    );
  };
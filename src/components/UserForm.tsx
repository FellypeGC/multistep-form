type UserProps = {
  data: {
    name: string;
    email: string;
  }
  updateFieldHandler: (key: string, value: string) => void;
}

const UserForm = ({ data, updateFieldHandler }: UserProps) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input 
          type="text"
          name="name" 
          id="name" 
          value={data.name || ""}
          placeholder="Digite o seu nome"
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          name="email" 
          id="email" 
          value={data.email || ""}
          placeholder="Digite o seu email"
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          required
        />
      </div>
    </div>
  )
}

export default UserForm